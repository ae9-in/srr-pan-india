import React from "react";
import { WorldMap } from "./map";

export default function MapDemo() {
  return (
    <div className="py-20 bg-transparent w-full">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="font-bold text-xl md:text-4xl text-on-surface">
          Active Supply Network
        </p>
        <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto py-4">
          Seamless logistics and bulk distribution pipelines connecting all major trading hubs directly to our central warehouse.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 28.6139, lng: 77.209, label: "Delhi" },
            end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" }
          },
          {
            start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
            end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" }
          },
          {
            start: { lat: 22.5726, lng: 88.3639, label: "Kolkata" },
            end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" }
          },
          {
            start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
            end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" }
          },
          {
            start: { lat: 13.0827, lng: 80.2707, label: "Chennai" },
            end: { lat: 12.9716, lng: 77.5946, label: "Bangalore" }
          }
        ]}
      />
    </div>
  );
}
