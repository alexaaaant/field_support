interface BatteryRaw {
  academyId: number;
  batteryLevel: number;
  employeeId: string;
  serialNumber: string;
  timestamp: string;
}

interface Measurement {
    batteryLevel: number;
    timestamp: Date;
}

interface Device {
    academyId: number;
    measurements: Measurement[];
}

interface Academy {
    batteryIssues: number;
    devices: Device[];
}

export type Devices = Record<string, Device>;
export type Academies = Record<string, Academy>;
export type BatteriesRaw = BatteryRaw[];
