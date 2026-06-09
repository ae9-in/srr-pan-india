import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap({ 
  dots = [], 
  lineColor = "#c9831a",
  showLabels = true,
  animationDuration = 2,
  loop = true
}) {
  const svgRef = useRef(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  // Initialize DottedMap for India only
  const mapInstance = useMemo(
    () => new DottedMap({ height: 75, grid: "diagonal", countries: ["IND"] }),
    []
  );

  const { width, height } = mapInstance;
  const viewBoxWidth = 800;
  const viewBoxHeight = (height / width) * 800;

  const points = useMemo(() => mapInstance.getPoints(), [mapInstance]);

  const getLabelOffset = (label) => {
    switch (label) {
      case "Bangalore Hub":
        return { x: -60, y: 8, width: 100 };
      case "Chennai":
        return { x: 10, y: 8, width: 80 };
      case "Kochi":
        return { x: -85, y: -10, width: 80 };
      case "Hyderabad":
        return { x: -45, y: -32, width: 90 };
      default:
        return { x: -45, y: -32, width: 90 };
    }
  };

  // Helper to project lat/lng using dotted-map grid mapping
  const projectPoint = (lat, lng) => {
    const pin = mapInstance.getPin({ lat, lng });
    if (!pin) return { x: 0, y: 0 };
    return {
      x: (pin.x / width) * viewBoxWidth,
      y: (pin.y / height) * viewBoxHeight
    };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    // Curved height depends on distance
    const dist = Math.abs(start.x - end.x);
    const midY = Math.min(start.y, end.y) - (dist * 0.2 + 10);
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Calculate animation timing
  const staggerDelay = 0.4;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2; // Pause when all paths are drawn
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div className="w-full aspect-[1/1.05] bg-transparent rounded-lg relative overflow-hidden">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full absolute inset-0 pointer-events-auto select-none z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feMorphology operator="dilate" radius="0.5" />
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Dotted Map of India */}
        <g className="opacity-35">
          {points.map((point, i) => {
            const x = (point.x / width) * viewBoxWidth;
            const y = (point.y / height) * viewBoxHeight;
            return (
              <circle
                key={`map-dot-${i}`}
                cx={x}
                cy={y}
                r="1.8"
                fill="#ffddb8"
              />
            );
          })}
        </g>

        {/* Animated Paths */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          
          if (startPoint.x === 0 && startPoint.y === 0) return null;
          
          const startTime = (i * staggerDelay) / fullCycleDuration;
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
          const resetTime = totalAnimationTime / fullCycleDuration;
          const pathD = createCurvedPath(startPoint, endPoint);
          
          return (
            <g key={`path-group-${i}`}>
              {/* Static Background Path */}
              <path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth="1.5"
                opacity="0.2"
              />

              {/* Animated Foreground Path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2.2"
                initial={{ pathLength: 0 }}
                animate={loop ? {
                  pathLength: [0, 0, 1, 1, 0],
                } : {
                  pathLength: 1
                }}
                transition={loop ? {
                  duration: fullCycleDuration,
                  times: [0, startTime, endTime, resetTime, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0,
                } : {
                  duration: animationDuration,
                  delay: i * staggerDelay,
                  ease: "easeInOut",
                }}
              />
              
              {loop && (
                <motion.circle
                  r="3.5"
                  fill={lineColor}
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: [null, "0%", "100%", "100%", "100%"],
                    opacity: [0, 0, 1, 0, 0],
                  }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                  style={{
                    offsetPath: `path('${pathD}')`,
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Glowing Nodes & Labels */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          
          if (startPoint.x === 0 && startPoint.y === 0) return null;
          
          return (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g key={`start-${i}`}>
                <motion.g
                  onHoverStart={() => setHoveredLocation(dot.start.label || `Location ${i}`)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="4"
                    fill={lineColor}
                    filter="url(#glow)"
                  />
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="4"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="14"
                      dur="2s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>
                
                {showLabels && dot.start.label && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * i + 0.2, duration: 0.5 }}
                    className="pointer-events-none"
                  >
                    <foreignObject
                      x={startPoint.x + getLabelOffset(dot.start.label).x}
                      y={startPoint.y + getLabelOffset(dot.start.label).y}
                      width={getLabelOffset(dot.start.label).width}
                      height="24"
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-md bg-surface/95 backdrop-blur-sm border border-outline-variant text-on-surface shadow-md whitespace-nowrap font-sans">
                          {dot.start.label}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}
              </g>
              
              {/* End Point */}
              <g key={`end-${i}`}>
                <motion.g
                  onHoverStart={() => setHoveredLocation(dot.end.label || `Destination ${i}`)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="4"
                    fill={lineColor}
                    filter="url(#glow)"
                  />
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="4"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="4"
                      to="14"
                      dur="2s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>
                
                {showLabels && dot.end.label && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * i + 0.4, duration: 0.5 }}
                    className="pointer-events-none"
                  >
                    <foreignObject
                      x={endPoint.x + getLabelOffset(dot.end.label).x}
                      y={endPoint.y + getLabelOffset(dot.end.label).y}
                      width={getLabelOffset(dot.end.label).width}
                      height="24"
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-md bg-surface/95 backdrop-blur-sm border border-outline-variant text-on-surface shadow-md whitespace-nowrap font-sans">
                          {dot.end.label}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}
              </g>
            </g>
          );
        })}
      </svg>
      
      {/* Mobile Tooltip */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 bg-surface/90 text-on-surface px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-sm sm:hidden border border-outline-variant shadow-sm z-20"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
