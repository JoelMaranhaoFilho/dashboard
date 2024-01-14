import {  
  Circle,
  LayersControl,  
  FeatureGroup, 
  LayerGroup,  
  MapContainer, 
  Marker,  
  Popup, 
  Rectangle,  
  TileLayer,

} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [-8.047562, -34.877003]
const rectangle = [
  [-8.0311, -34.9075],
  [-7.881917, -34.899341],
  [-7.801217, -34.879347],
]

const GeographyChart = ({ isDashboard = false }) => {

  return (
    <MapContainer
      style={{ width: 'auto', height: '200px', background: 'green'}}
      center={[-8.047562, -34.877003]} // Coordenadas iniciais do mapa
      zoom={12} // Nível de zoom inicial
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
            pathOptions={{ fillColor: 'orange' }}
            radius={200}
          />
          <Circle
            center={center}
            pathOptions={{ color: 'red', fillColor: '#f00505' }}
            radius={1100}
            stroke={false}
          />
          
          <LayerGroup>
            <Circle
              center={[-8.0564, -34.8970]}
              pathOptions={{ color: '#FF8C00', fillColor: '#f00505' }}
              radius={400}
            />
          </LayerGroup>
          <LayerGroup>
            <Circle
              center={[-8.0281, -34.9191]}
              pathOptions={{ color: '#006400', fillColor: '#f00505' }}
              radius={400}
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
