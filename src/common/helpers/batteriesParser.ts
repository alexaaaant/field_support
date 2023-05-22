import { Academies, BatteriesRaw, Devices } from '../../types/batteries';

export const batteriesParser = (data: BatteriesRaw) => {
    const devices: Devices = {};
    const academies: Academies = {};
    const academiesPrioritized: number[] = [];
  
    data.forEach(entry => {
      if (!devices[entry.serialNumber]) {
        devices[entry.serialNumber] = {
          academyId: entry.academyId,
          serialNumber: entry.serialNumber,
          measurements: [],
        };
      }
      devices[entry.serialNumber].measurements.push({
        batteryLevel: entry.batteryLevel,
        timestamp: +new Date(entry.timestamp),
      });
    });
  
    Object.values(devices).forEach(device => {
      device.measurements.sort((a, b) => a.timestamp - b.timestamp);
      let totalBatteryUsage = 0;
      let count = 0;
  
      for (let i = 1; i < device.measurements.length; i++) {
        const previous = device.measurements[i - 1];
        const current = device.measurements[i];
        const timeDifference = (current.timestamp - previous.timestamp) / (1000 * 60 * 60 * 24);
        const batteryUsage = previous.batteryLevel - current.batteryLevel;
  
        if (batteryUsage > 0) {
          totalBatteryUsage += batteryUsage / timeDifference;
          count++;
        }
      }
  
      if (count > 0 && totalBatteryUsage / count > 0.3) {
        if (!academies[device.academyId]) {
          academies[device.academyId] = { batteryIssues: 0, devices: [] };
          academiesPrioritized.push(device.academyId);
        }
        academies[device.academyId].batteryIssues++;
        academies[device.academyId].devices.push(device);
      }
    });
    academiesPrioritized.sort((a, b) => academies[a].batteryIssues - academies[b].batteryIssues);
    return { academies, academiesPrioritized };
  
};