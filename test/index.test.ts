import { steptacular } from '../src/index';


describe('runner', () => {

    it('handles simple steps', () => {
        const actionStep2 = jest.fn(({ data, next }) => {
            next();
        });
        steptacular([
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


    it('passes data between steps', () => {
        const actionStep2 = jest.fn(({ data, next }) => {
            data.setData({ 'three': 'three' })

            next();
        });
        steptacular([
            {
                name: 'trigger step',
                run: ({ data, next }) => {
                    data.setData({ 'one': 'one' })
                    next();
                }

            },
            {
                name: 'action step',
                run: ({ data, next }) => {
                    data.setData({ 'two': 'two' })

                    next();
                }

            },
            {
                name: 'action step 2',
                run: actionStep2

            }
        ]);
        expect(actionStep2.mock.calls[0][0].data.value.two).toEqual('two');
    });

    it('handles errors uncaught exceptions gracefully', () => {
        const actionStep2 = jest.fn(({ data, next }) => {
            next();
        });
        steptacular([
            {
                name: 'trigger step',
                run: ({ data, next }) => {
                    throw new Error('error');
                    next();
                }

            },
            {
                name: 'trigger step 2',
                run: actionStep2
            }
        ], {
            onError: (e) => {
                expect(e.step === 0).toBe(true);
                expect(e.error.message === 'error').toBe(true);
            }
        });

        expect(actionStep2).not.toHaveBeenCalled();
    });

});