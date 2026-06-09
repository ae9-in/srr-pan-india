import DottedMap from 'dotted-map';

const map = new DottedMap({ height: 50, grid: "diagonal", countries: ["IND"] });
const cities = [
  { name: 'Delhi', lat: 28.6139, lng: 77.209 },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
  { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
  { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
  { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
  { name: 'Kolkata', lat: 22.5726, lng: 88.3639 }
];

cities.forEach(c => {
  const pin = map.getPin({ lat: c.lat, lng: c.lng });
  console.log(`${c.name}:`, pin ? `Success { x: ${pin.x}, y: ${pin.y} }` : 'FAILED');
});
