import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";

function DeliveryMap({ status, currentLocation }) {
  const startingLocation = {/* Starting location coordinates */};
  const endingLocation = {/* Client's location coordinates */};

  const path = status === "On Transit" ? [startingLocation, currentLocation] : [startingLocation, endingLocation];

  return (
    <GoogleMap defaultZoom={10} defaultCenter={startingLocation} mapContainerStyle={{ width: '100%', height: '400px' }} center={startingLocation}>
      <Marker position={startingLocation} label="Start" />
      <Marker position={endingLocation} label="End" />
      {status === "On Transit" && <Marker position={currentLocation} label="Current" />}
      <Polyline path={path} />
    </GoogleMap>
  );
}
export default DeliveryMap;