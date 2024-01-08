import { 
  AttributionControl, 
  Circle, 
  CircleMarker, 
  FeatureGroup, 
  GeoJSON, 
  ImageOverlay, 
  LayerGroup, 
  LayersControl, 
  MapContainer, 
  Marker, 
  Pane, 
  Polygon, 
  Polyline, 
  Popup, 
  Rectangle, 
  SVGOverlay, 
  ScaleControl, 
  TileLayer, 
  Tooltip, 
  VideoOverlay, 
  WMSTileLayer, 
  ZoomControl, 
  useMap, 
  useMapEvent, 
  useMapEvents,

} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const center = [-8.047562, -34.877003]
const rectangle = [
  [-8.0311, -34.9075],
  [-7.881917, -34.899341],
]

const GeographyChart = ({ isDashboard = false }) => {

  return (
    <MapContainer
      style={{ width: 'auto', height: '200px' }}
      center={[-8.047562, -34.877003]} // Coordenadas iniciais do mapa
      zoom={13} // Nível de zoom inicial
      scrollWheelZoom={false}
    >
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <LayersControl position="topright">
      <LayersControl.Overlay name="Marker with popup">
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: 'blue' }}
            radius={200}
          />
          <Circle
            center={center}
            pathOptions={{ fillColor: 'red' }}
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={{ color: 'green', fillColor: 'green' }}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Feature group">
        <FeatureGroup pathOptions={{ color: 'purple' }}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
      {/* Consulte a documentação do react-leaflet para mais detalhes */}
    </MapContainer>
  );
};
    

export default GeographyChart;
