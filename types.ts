
export enum SensorType {
  OPTICAL = 'OPTICAL',
  RADAR = 'RADAR'
}

export interface FilterState {
  sensorType: SensorType;
  cloudCover: [number, number];
  startDate: string;
  endDate: string;
  province: string;
  city: string;
  district: string;
}

export interface SatelliteInfo {
  id: string;
  name: string;
  type: SensorType;
  resolution: string;
}
