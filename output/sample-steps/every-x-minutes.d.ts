import { TriggerStepRunArgs } from './interfaces';
declare const step: {
    text: string;
    type: string;
    run: (args: TriggerStepRunArgs) => void;
};
export default step;
