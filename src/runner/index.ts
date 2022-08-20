import { checkIfStepsMatch } from './step-text-helpers';
interface Step {
    text: string
    type: string
    run: (args: any) => void
}
const next = (data: any, steps: Step[], currentStep: number) => {
    if (steps[currentStep]) {
        steps[currentStep].run({ data, next: (data: any) => next(data, steps, currentStep + 1) });
    }
}
const findStep = (stepText: string, steps: Step[]): Step | undefined => {
    const foundStep = steps.find((step) => {
        return checkIfStepsMatch(step.text, stepText);
    });
    return foundStep;
}
const runner = (workflows: string[][], availableSteps: Step[]) => {
    const firstWorkflow = workflows[0];
    const steps: Step[] = [];
    for (const stepText of firstWorkflow) {
        const step = findStep(stepText, availableSteps);
        if (step) {
            steps.push(step);

        }

    }

    if (steps[0]) {
        steps[0].run({ next: (data: any) => { next(data, steps, 1) } })

    }
};

export default runner;