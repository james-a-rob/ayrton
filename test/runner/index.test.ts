import runner from '../../src/runner/index';


describe('runner', () => {

    it('simple', () => {
        const actionStep2 = jest.fn(({ data, next }) => {
            next();
        });
        runner([
            {
                name: 'trigger step',
                run: ({ next }) => {
                    next();
                }

            },
            {
                name: 'action step',
                run: ({ next }) => {

                    next();
                }

            },
            {
                name: 'action step 2',
                run: actionStep2

            }
        ]);
        expect(actionStep2).toHaveBeenCalledTimes(1);
    });


    it('simple with data passing', () => {
        const actionStep2 = jest.fn(({ data, next }) => {
            const newData = { three: 'three' };

            next(newData);
        });
        runner([
            {
                name: 'trigger step',
                run: ({ next }) => {
                    const newData = { one: 'one' };
                    next(newData);
                }

            },
            {
                name: 'action step',
                run: ({ data, next }) => {
                    const newData = { two: 'two' };

                    next(newData);
                }

            },
            {
                name: 'action step 2',
                run: actionStep2

            }
        ]);
        expect(actionStep2.mock.calls[0][0].data.two).toEqual('two');
    });

    it('happy path with multiple trigger callbacks', () => {
        jest.setTimeout(300000);
        const actionStep2 = jest.fn(({ data, next }) => {
            const newData = { three: 'three' };

            next(newData);
        });
        jest.useFakeTimers();
        runner([
            {
                name: 'trigger step',
                run: ({ next }) => {
                    next();
                    setTimeout(() => {
                        next();
                    }, 3000);
                }

            },
            {
                name: 'action step',
                run: ({ next }) => {

                    next();
                }

            },
            {
                name: 'action step 2',
                run: actionStep2

            }
        ]);
        jest.advanceTimersByTime(3000);
        expect(actionStep2).toHaveBeenCalledTimes(2);

    });
});