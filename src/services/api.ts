import batteriesRaw from '../data/battery-data.json';
import { BatteriesRaw } from '../types/batteries';

export const getBatteries = (): Promise<BatteriesRaw> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(batteriesRaw);
        },         1500);
    });
};