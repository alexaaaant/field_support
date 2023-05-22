import { act } from 'react-dom/test-utils';
import { App } from '../../containers/App';
import { fireEvent, flushPromises, render, screen } from './test-utils';
import batteriesRaw from '../../data/battery-data.json';

const mockedGetBatteries = () => Promise.resolve(batteriesRaw);

jest.useFakeTimers();
jest.mock('../../services/api', () => {
    const original = jest.requireActual('../../services/api');

    return {
        ...original,
        getBatteries: () => mockedGetBatteries(),
    };
});

describe('App', () => {
    it('should display a spinner before data', async() => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
        
        await act(async () => {
            jest.runAllTimers();
            await flushPromises();
        });

        expect(container).toMatchSnapshot();
    });

    it('should display an academy info after click on it', async() => {
        const { container } = render(<App />);

        await act(async () => {
            jest.runAllTimers();
            await flushPromises();
        });

        const academyElement = screen.getByText('30013');
        fireEvent.click(academyElement);

        expect(container).toMatchSnapshot();
    });
});