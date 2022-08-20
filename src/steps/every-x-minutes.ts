import * as cron from 'node-cron';
import { TriggerStepRunArgs } from './interfaces';

const step = {
    text: 'every {} minutes',
    type: 'trigger',
    run: (args: TriggerStepRunArgs) => {
        const minutes = args.stepInputs[0];
        const task = cron.schedule(`*/${minutes} * * * *`, () => {
            args.next(null);
        });

        // return a clean up fn. Will be called when workflow ends
    }
}

export default step;