import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMap from "./ui/iconMap";

const position: [number, number] = [-16.4203467,-71.5433957]; // -16.420351,-71.5453393

export const MapDev = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Oficina Central
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Puedes ubicarnos en Calle Ambrosio Vucetich 130, Parque Industrial,
          Arequipa, Perú
        </p>
      </div>

      <div className="w-full flex justify-center px-4 sm:px-0">
        <div className="w-full max-w-4xl">
          <MapContainer
            center={position}
            zoom={16}
            className="h-64 sm:h-80 md:h-96 lg:h-[350px] w-full rounded-lg shadow-lg"
            style={{ minHeight: "256px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={iconMap}>
              <Popup>Digo Telecom 🚀</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
