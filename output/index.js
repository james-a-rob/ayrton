"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const next = (data, steps, currentStep) => {
    if (steps[currentStep]) {
        steps[currentStep].run({ data, next: (data) => next(data, steps, currentStep + 1) });
    }
};
const run = (steps) => {
    if (steps[0]) {
        steps[0].run({
            next: (data = {}) => {
                next(data, steps, 1);
            }
        });
    }
};
exports.run = run;
