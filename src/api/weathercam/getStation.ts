import { axios } from '../../httpClient';

export interface Station {
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
  cameraType: string;
  nearestWeatherStationId: number;
  collectionStatus: string;
  state: string;
  dataUpdatedTime: Date;
  collectionInterval: number;
  names: Names;
  roadAddress: RoadAddress;
  liviId: string;
  country: string;
  startTime: Date;
  repairMaintenanceTime: Date;
  annualMaintenanceTime: Date;
  purpose: string;
  municipality: string;
  municipalityCode: number;
  province: string;
  provinceCode: number;
  presets: Preset[];
}

export interface Names {
  fi: string;
  sv: string;
  en: string;
}

export interface Preset {
  id: string;
  presentationName: string;
  inCollection: boolean;
  resolution: string;
  directionCode: string;
  imageUrl: string;
  direction: string;
}

export interface RoadAddress {
  roadNumber: number;
  roadSection: number;
  distanceFromRoadSectionStart: number;
  carriageway: string;
  side: string;
  contractArea: string;
  contractAreaCode: number;
}

export async function getStation(id: string): Promise<Station> {
  const resp = await axios.get(`/weathercam/v1/stations/${id}`);
  const data = resp.data as Station;

  return data;
}
