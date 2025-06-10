// import L from "leaflet";

// // Solución para la carga del ícono en producción (Vercel)
// const iconMap = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// export default iconMap;

import L from "leaflet";
import DigoLogo from "@/assets/images/digo-logo.jpg";

// Configuración del ícono personalizado
const iconMap = new L.Icon({
  iconUrl: DigoLogo, // Ruta a tu imagen en la carpeta public
  iconSize: [40, 40], // Tamaño del ícono [ancho, alto]
  iconAnchor: [20, 40], // Punto de anclaje (normalmente la mitad del ancho y el alto completo)
  popupAnchor: [0, -40], // Donde se abrirá el popup relativo al iconAnchor
  className: "digo-telecom-icon", // Clase CSS opcional para estilos adicionales
});

export default iconMap;
