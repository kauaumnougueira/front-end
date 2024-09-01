import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const coordinates = [
  {
    lat: -2.6329,
    lng: -44.2794,
    name: 'Estação Maracanã',
  },
  {
    lat: -2.5606,
    lng: -44.2289,
    name: 'Estação João de Deus',
  },
  {
    lat: -23.5505,
    lng: -46.6333,
  },
  {
    lat: -23.5505,
    lng: -46.6333,
  },
  {
    lat: -23.5505,
    lng: -46.6333,
  },
];

function MapExample() {
  return (
    <MapContainer  center={ [-2.5898, -44.2316] } zoom={ 8 } style={ { height: '100vh', width: '100%' } }>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map((coordinate, index) => (
        <Marker key={ index } position={ [coordinate.lat, coordinate.lng] }>
          <Popup>
            {coordinate.name}
            .
            {' '}
            <br />
            {' '}
            Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapExample;
