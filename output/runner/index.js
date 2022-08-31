"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var next = function (data, steps, currentStep) {
    if (steps[currentStep]) {
        steps[currentStep].run({ data: data, next: function (data) { return next(data, steps, currentStep + 1); } });
    }
};
var runner = function (steps) {
    if (steps[0]) {
        steps[0].run({ next: function (data) {
                if (data === void 0) { data = {}; }
                next(data, steps, 1);
            } });
    }
};
exports.default = runner;
