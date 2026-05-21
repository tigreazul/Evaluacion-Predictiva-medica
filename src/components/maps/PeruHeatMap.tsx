import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

// Peru cities with risk intensity (lat, lng, intensity) - Costa, Sierra, Selva
const heatmapData: [number, number, number][] = [
  // COSTA (Coastal cities)
  // Lima - High risk
  [-12.0464, -77.0428, 0.9],
  [-12.0264, -77.0528, 0.85],
  [-12.0664, -77.0328, 0.88],
  [-12.0866, -77.0228, 0.87],

  // Callao - High risk
  [-12.0566, -77.1181, 0.87],

  // Piura - Critical risk
  [-5.1945, -80.6328, 1.0],
  [-5.1745, -80.6528, 0.95],
  [-5.2145, -80.6128, 0.92],

  // Trujillo (La Libertad) - High risk
  [-8.1116, -79.0288, 0.82],
  [-8.0916, -79.0488, 0.78],

  // Chiclayo (Lambayeque) - High risk
  [-6.7714, -79.8411, 0.80],
  [-6.7514, -79.8611, 0.75],

  // Arequipa - Medium-High risk
  [-16.4090, -71.5375, 0.65],
  [-16.3890, -71.5575, 0.62],

  // Ica - Medium risk
  [-14.0678, -75.7286, 0.55],

  // Tacna - Medium risk
  [-18.0147, -70.2536, 0.50],

  // Tumbes - High risk
  [-3.5669, -80.4515, 0.85],

  // Pisco - Medium-High risk
  [-13.7097, -76.2050, 0.68],

  // Chimbote - High risk
  [-9.0853, -78.5783, 0.83],

  // Paita - High risk
  [-5.0892, -81.1144, 0.81],

  // Huacho - Medium-High risk
  [-11.1075, -77.6053, 0.70],

  // Ilo - Medium risk
  [-17.6397, -71.3378, 0.58],

  // Moquegua - Medium risk
  [-17.1934, -70.9336, 0.56],

  // SIERRA (Highland cities)
  // Cusco - High risk
  [-13.5319, -71.9675, 0.78],
  [-13.5119, -71.9875, 0.75],

  // Cajamarca - High risk
  [-7.1631, -78.5126, 0.82],
  [-7.1431, -78.5326, 0.79],

  // Huancayo - High-Medium risk
  [-12.0653, -75.2045, 0.72],
  [-12.0453, -75.2245, 0.70],

  // Ayacucho - Medium-High risk
  [-13.1587, -74.2236, 0.68],

  // Huaraz - Medium risk
  [-9.5272, -77.5278, 0.60],

  // Puno - Medium-High risk
  [-15.8402, -70.0219, 0.66],
  [-15.8202, -70.0419, 0.64],

  // Huánuco - Medium-High risk
  [-9.9306, -76.2422, 0.67],

  // Abancay - Medium risk
  [-13.6336, -72.8814, 0.58],

  // Cerro de Pasco - Medium risk
  [-10.6833, -76.2667, 0.55],

  // Tarma - Medium risk
  [-11.4189, -75.6900, 0.54],

  // SELVA (Jungle/Amazon cities)
  // Iquitos - High risk
  [-3.7491, -73.2531, 0.85],
  [-3.7291, -73.2731, 0.83],

  // Pucallpa - High risk
  [-8.3791, -74.5539, 0.80],
  [-8.3591, -74.5739, 0.77],

  // Tarapoto - Medium-High risk
  [-6.4869, -76.3631, 0.71],
  [-6.4669, -76.3831, 0.69],

  // Yurimaguas - Medium-High risk
  [-5.8989, -76.0867, 0.68],

  // Puerto Maldonado - Medium risk
  [-12.5931, -69.1894, 0.62],

  // Tingo María - Medium-High risk
  [-9.2958, -75.9947, 0.65],

  // Jaén - Medium-High risk
  [-5.7075, -78.8078, 0.66],

  // Moyobamba - Medium risk
  [-6.0344, -76.9714, 0.60],

  // Bagua - Medium risk
  [-5.6411, -78.5247, 0.59],
];

function HeatmapLayer() {
  const map = useMap();
  const heatLayerRef = useRef<L.HeatLayer | null>(null);

  useEffect(() => {
    if (!map || heatLayerRef.current) return;

    // @ts-ignore - leaflet.heat adds heatLayer to L
    heatLayerRef.current = L.heatLayer(heatmapData, {
      radius: 50,
      blur: 40,
      maxZoom: 8,
      max: 1.0,
      gradient: {
        0.0: "#006c47",  // Base (<10%) - green (secondary)
        0.4: "#65dca4",  // Base-Alto transition
        0.6: "#ffb950",  // Alto (10-15%) - amber (tertiary-fixed-dim)
        0.8: "#ba1a1a",  // Crítico (>15%) - red (error)
        1.0: "#ba1a1a",  // Crítico max - red (error)
      },
    }).addTo(map);

    return () => {
      if (heatLayerRef.current) {
        map.removeLayer(heatLayerRef.current);
        heatLayerRef.current = null;
      }
    };
  }, [map]);

  return null;
}

export function PeruHeatMap() {
  return (
    <MapContainer
      center={[-10.0, -75.5]}
      zoom={5.5}
      style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
      zoomControl={true}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatmapLayer />
    </MapContainer>
  );
}
