import utils from './utils';

const data: Data = {
    value: {},
    setData: (newData: object) => {
        data.value = { ...data.value, ...newData };
    }
};



export const steptacular = (
    steps: Step[],
    options: Options = {},
    currentStep: number = 0) => {
    const { onError, dryRun = false } = options;

    if (steps.length < 1) {
        console.log('You need to provide a list of steps. See here for examples https://github.com/james-a-rob/steptacular#basic-usage');
    }

    if (currentStep < steps.length) {
        try {
            steps[currentStep].run({
                utils: {
                    prompt: utils.prompt,
                    dryRunable: (func) => utils.dryRunable(dryRun, func)
                },
                data: data,
                next: () => {
                    steptacular(steps, options, currentStep + 1);
                }
            });
        } catch (error: any) {
            if (onError) {
                console.log(`Error in step ${currentStep}`);
                const stepError = {
                    step: currentStep,
                    error
                }
                onError(stepError);
            }

        }

        console.log('Finished');
    }
}
