import { ActionStepRunArgs } from './interfaces';
declare const step: {
    text: string;
    type: string;
    run: (args: ActionStepRunArgs) => Promise<void>;
};
export default step;
