export interface HourlyUnits {
  temperature_2m: string;
  time: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
}

export interface DataTypes {
  hourly_units: HourlyUnits;
  utc_offset_seconds: number;
  hourly: Hourly;
  latitude: number;
  generationtime_ms: number;
  elevation: number;
  longitude: number;
}
