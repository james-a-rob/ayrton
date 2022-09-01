interface Step {
    name: string
    run: (args: any) => void
}
const next = (data: any, steps: Step[], currentStep: number) => {
    if (steps[currentStep]) {
        steps[currentStep].run({ data, next: (data: any) => next(data, steps, currentStep + 1) });
    }
}

export const run = (steps: Step[]) => {

    if (steps[0]) {
        steps[0].run({ next: (data: any = {}) => { next(data, steps, 1) } })

    }
};