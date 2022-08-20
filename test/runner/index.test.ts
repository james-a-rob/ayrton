import runner from '../../src/runner/index';


describe('runner', () => {

    it('happy path', () => {
        const actionStep2 = jest.fn(({ data, next }) => {
            const newData = { three: 'three' };

            next(newData);
        });
        runner([
            [
                'trigger step',
                'action step',
                'action step 2'
            ]
        ], [
            {
                text: 'trigger step',
                type: 'trigger',
                run: ({ next }) => {
                    const newData = { one: 'one' };
                    next(newData);
                }

            },
            {
                text: 'action step',
                type: 'action',
                run: ({ data, next }) => {
                    const newData = { two: 'two' };

                    next(newData);
                }

            },
            {
                text: 'action step 2',
                type: 'action',
                run: actionStep2

            }
        ]);
        expect(actionStep2).toHaveBeenCalledTimes(1);
    });

    it('happy path with multiple trigger callbacks', () => {
        jest.setTimeout(300000);
        const actionStep2 = jest.fn(({ data, next }) => {
            const newData = { three: 'three' };

            next(newData);
        });
        jest.useFakeTimers();
        runner([
            [
                'trigger step',
                'action step',
                'action step 2'
            ]
        ], [
            {
                text: 'trigger step',
                type: 'trigger',
                run: ({ next }) => {
                    const newData = { one: 'one' };
                    next(newData);
                    setTimeout(() => {
                        next(newData);
                    }, 3000);
                }

            },
            {
                text: 'action step',
                type: 'action',
                run: ({ data, next }) => {
                    const newData = { two: 'two' };

                    next(newData);
                }

            },
            {
                text: 'action step 2',
                type: 'action',
                run: actionStep2

            }
        ]);
        jest.advanceTimersByTime(3000);
        expect(actionStep2).toHaveBeenCalledTimes(2);

    });
    it('happy path with variables', () => {
        const actionStep1 = jest.fn(({ data, next }) => {
            const newData = { two: 'two' };

            next(newData);
        });
        runner([
            [
                'trigger based on value {1}',
                'action step using {$name} property',
                'action step 2'
            ]
        ], [
            {
                text: 'trigger based on value {}',
                type: 'trigger',
                run: ({ next }) => {
                    const newData = { one: 'one' };
                    next(newData);
                }

            },
            {
                text: 'action step using {} property',
                type: 'action',
                run: actionStep1

            }
        ]);
        expect(actionStep1).toHaveBeenCalledTimes(1);
    });
});