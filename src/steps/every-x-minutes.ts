import * as cron from 'node-cron';
import { Utilities } from './interfaces';

const step = {
    text: 'every {} minutes',
    type: 'trigger',
    func: (utilities: Utilities, stepInputs: [any], next: () => void) => {
        const minutes = stepInputs[0];
        const task = cron.schedule(`*/${minutes} * * * *`, () => {
            next();
        });

        // return a clean up fn. Will be called when workflow ends
    }
}

export default step;