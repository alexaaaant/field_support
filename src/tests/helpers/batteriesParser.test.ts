import { batteriesParser } from '../../common/helpers/batteriesParser';
import { badBatteries, goodBatteries } from './mockData';

describe('batteriesParser', () => {
    it('should return an empry array, if all batteries are good', () => {
        const result = batteriesParser(goodBatteries);

        expect(result).toStrictEqual({'academies': {}, 'academiesPrioritized': []});
    });

    it('should return bad batteries, if some batteries are bad', () => {
        const result = batteriesParser(badBatteries);

        expect(result).toMatchSnapshot();
    });
});
