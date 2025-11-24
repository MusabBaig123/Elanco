export function locationToCoordinates(location) {
  const minLat = 50, maxLat = 58;
  const minLng = -7, maxLng = 2;

  let hash = 0;
  for (let i = 0; i < location.length; i++) {
    hash = location.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Correct fake coordinate generator
  const lat = minLat + (Math.abs(hash) % 1000) / 1000 * (maxLat - minLat);
  const lng = minLng + (Math.abs(hash >> 1) % 1000) / 1000 * (maxLng - minLng);

  return [lat, lng];
}
