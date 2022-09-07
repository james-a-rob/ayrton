import chalk from 'chalk';
import utils from './utils';

const data: Data = {
    value: {},
    setData: (newData: object) => {
        data.value = { ...data.value, ...newData };
    }
};

const numberToEmoji = (str: string | number) => {
    if (str === undefined || str === null || str === '') {
        return str;
    }

    if (typeof str !== 'string') {
        str = str.toString();
    }

    if (str === '10') {
        return '🔟';
    }

    return str
        .replace(/0/g, '0️⃣')
        .replace(/1/g, '1️⃣')
        .replace(/2/g, '2️⃣')
        .replace(/3/g, '3️⃣')
        .replace(/4/g, '4️⃣')
        .replace(/5/g, '5️⃣')
        .replace(/6/g, '6️⃣')
        .replace(/7/g, '7️⃣')
        .replace(/8/g, '8️⃣')
        .replace(/9/g, '9️⃣');
}

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
            const stepName = steps[currentStep].name
            const styledStepName = chalk.bgWhiteBright.blue.bold(stepName);
            console.log(`${numberToEmoji(currentStep + 1)}  `, styledStepName, '\n');
            steps[currentStep].run({
                utils: {
                    prompt: utils.prompt,
                    dryRunable: (func) => utils.dryRunable(dryRun, func)
                },
                data: data,
                next: () => {
                    console.log('\n\n');
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
    }
}
