import utils from './utils';

interface DataValue {
    [key: string]: string | number | object | []
}

interface Utils {
    prompt: (message: string) => string
}

interface RunArgs {
    data: Data,
    utils: Utils,
    next: (data?: Data) => void
}

interface Step {
    name: string
    run: (args: RunArgs) => void
}

interface Data {
    value: DataValue
    setData: (newData: object) => void
}

interface StepError {
    step: number
    error: any
}

const data: Data = {
    value: {},
    setData: (newData: object) => {
        data.value = { ...data.value, ...newData };
    }
};

export const steptacular = (
    steps: Step[],
    onError?: (stepError: StepError) => void,
    currentStep: number = 0) => {
    if (steps.length < 1) {
        console.log('You need to provide a list of steps. See here for examples https://github.com/james-a-rob/steptacular#basic-usage');
    }

    if (currentStep < steps.length) {
        try {
            steps[currentStep].run({
                utils,
                data: data,
                next: () => {
                    steptacular(steps, onError, currentStep + 1);
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
    }
}
