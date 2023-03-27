import { axios } from '../../httpClient';

export interface Stations {
  type: string;
  dataUpdatedTime: Date;
  features: ArrayOfStations[];
}

export interface ArrayOfStations {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  id: string;
  name: string;
  collectionStatus: string;
  state: string;
  dataUpdatedTime: Date;
  presets: Preset[];
}

export interface Preset {
  id: string;
  inCollection: boolean;
}

export async function getStations(): Promise<Stations> {
  const resp = await axios.get('/weathercam/v1/stations');
  const data = resp.data as Stations;

  return data;
}
