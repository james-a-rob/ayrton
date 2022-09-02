"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const utils_1 = require("./utils");
const next = (data, steps, currentStep) => {
    if (steps[currentStep]) {
        steps[currentStep].run({ utils: utils_1.default, data, next: (data = {}) => next(data, steps, currentStep + 1) });
    }
};
const run = (steps) => {
    if (steps[0]) {
        steps[0].run({ utils: utils_1.default, next: (data = {}) => { next(data, steps, 1); } });
    }
};
exports.run = run;
