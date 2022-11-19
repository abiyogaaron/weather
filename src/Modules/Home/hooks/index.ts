import { useEffect, useState } from 'react';
import { EGeoErrorCodes } from '../../../Interface';

interface IGeoError {
  title: string;
  desc: string;
  isError: boolean;
}

export const useGeolocation = (isUsingGeo: boolean) => {
  const [lat, setLatitude] = useState<number>(-6.2088);
  const [lon, setLongitude] = useState<number>(106.8456);
  const [geoError, setGeoError] = useState<IGeoError>({ title: '', desc: '', isError: false });

  useEffect(() => {
    if (!isUsingGeo) {
      return;
    }

    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      }, (error) => {
        if (error.code === EGeoErrorCodes.PERMISSION_DENIED) {
          setGeoError({
            title: 'Permission Denied',
            desc: 'Please activate your location settings to get the current weather.',
            isError: true,
          });
        } else if (error.code === EGeoErrorCodes.POSITION_UNAVAILABLE) {
          setGeoError({
            title: 'Position Unavailable',
            desc: 'Please try to toggle the location settings.',
            isError: true,
          });
        } else if (error.code === EGeoErrorCodes.TIMEOUT) {
          setGeoError({
            title: 'Timeout Expired',
            desc: 'Please try again to get the location data.',
            isError: true,
          });
        }
      }, {
        timeout: 1000 * 10,
      });
    }
  }, [isUsingGeo]);

  return { lat, lon, geoError };
};
