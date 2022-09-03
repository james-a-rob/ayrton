import utils from './utils';

interface Data {
    [key: string]: string | number | object | []
}

interface Utils {
    prompt: (message: string) => string
}

interface RunArgs {
    data?: object,
    utils: Utils,
    next: (data?: Data) => void
}

interface Step {
    name: string
    run: (args: RunArgs) => void
}
const next = (data: any, steps: Step[], currentStep: number) => {
    if (steps[currentStep]) {
        steps[currentStep].run({ utils, data, next: (data: Data = {}) => next(data, steps, currentStep + 1) });
    }
}

export const steptacular = (steps: Step[]) => {
    if (steps[0]) {
        steps[0].run({ utils, next: (data: Data = {}) => { next(data, steps, 1) } })

    }
};