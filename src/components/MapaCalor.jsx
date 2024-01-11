import React from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from '../src/HeatmapLayer';
import { addressPoints } from './realworld.10000.js';

const MapExample = () => {
  return (
    <div>
      <MapContainer />
    </div>
  );
};

const MapContainer = () => {
  const center = [0, 0];
  const zoom = 13;

  return (
    <Map center={center} zoom={zoom}>
      <HeatmapLayerComponent />
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

const HeatmapLayerComponent = () => {
  return (
    <HeatmapLayer
      fitBoundsOnLoad
      fitBoundsOnUpdate
      points={addressPoints}
      longitudeExtractor={m => m[1]}
      latitudeExtractor={m => m[0]}
      intensityExtractor={m => parseFloat(m[2])}
    />
  );
};

render(<MapExample />, document.getElementById('app'));
