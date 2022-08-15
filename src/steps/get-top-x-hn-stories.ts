import * as cron from 'node-cron';
import { Utilities } from './interfaces';

const step = {
    text: 'get top {} HN stories ',
    type: 'iterator',
    func: (utilities: Utilities, stepInputs: [any], next: () => void) => {
        // get hn stories 
        // map response
        // get first x


        // return a clean up fn. Will be called when workflow ends
    }
}

export default step;