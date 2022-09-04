"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.steptacular = void 0;
const utils_1 = require("./utils");
const data = {
    value: {},
    setData: (newData) => {
        data.value = Object.assign(Object.assign({}, data.value), newData);
    }
};
const steptacular = (steps, onError, currentStep = 0) => {
    if (steps.length < 1) {
        console.log('You need to provide a list of steps. See here for examples https://github.com/james-a-rob/steptacular#basic-usage');
    }
    if (currentStep < steps.length) {
        try {
            steps[currentStep].run({
                utils: utils_1.default,
                data: data,
                next: () => {
                    (0, exports.steptacular)(steps, onError, currentStep + 1);
                }
            });
        }
        catch (error) {
            if (onError) {
                console.log(`Error in step ${currentStep}`);
                const stepError = {
                    step: currentStep,
                    error
                };
                onError(stepError);
            }
        }
    }
};
exports.steptacular = steptacular;
