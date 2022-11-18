import { useEffect, useState } from 'react';

export const useGeolocation = (isUsingGeo: boolean) => {
  const [lat, setLatitude] = useState<number>(6.2088);
  const [lon, setLongitude] = useState<number>(106.8456);

  useEffect(() => {
    if (!isUsingGeo) {
      return;
    }
    
    if ('geolocation' in window.navigator) {
      window.navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      });
    }
  }, [isUsingGeo]);

  return [lat, lon];
};
