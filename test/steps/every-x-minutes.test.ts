import everyXMinutes from '../../src/steps/every-x-minutes';

describe('everyXMinutes', () => {
    it('runs', () => {
        jest.setTimeout(300000);
        jest.useFakeTimers();

        const callbackSpy = jest.fn();
        everyXMinutes.func({}, [10], callbackSpy);
        jest.advanceTimersByTime(1200000);
        expect(callbackSpy).toHaveBeenCalledTimes(2);

    });
});
