export type EnvT = 'development' | 'test' | 'uat' | 'production';
export type TWeatherParams = 'lat' | 'lon' | 'date';

export enum EGeoErrorCodes {
  PERMISSION_DENIED = 1,
  POSITION_UNAVAILABLE = 2,
  TIMEOUT = 3,
}
