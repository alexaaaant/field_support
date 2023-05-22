interface BatteryRaw {
  academyId: number;
  batteryLevel: number;
  employeeId: string;
  serialNumber: string;
  timestamp: string;
}

interface Measurement {
    batteryLevel: number;
    timestamp: number;
}

interface Device {
    academyId: number;
    serialNumber: string; 
    measurements: Measurement[];
    wearLevel: number;
}

interface Academy {
    batteryIssues: number;
    devices: Device[];
}

export type Devices = Record<string, Device>;
export type Academies = Record<string, Academy>;
export type BatteriesRaw = BatteryRaw[];
