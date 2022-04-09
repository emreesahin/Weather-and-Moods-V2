export type  HourlyUnits = {
    temperature_2m: string;
    time: string;
}

export type Hourly = {
    time: string[];
    temperature_2m: number[];
    hourly: number[];
}

export type DataTypes = {
    hourly_units: HourlyUnits;
    elevation: number;
    longitude: number;
    utc_offset_seconds: number;
    generationtime_ms: number;
    hourly: Hourly;
    latitude: number;
    time: HourlyUnits;
}


