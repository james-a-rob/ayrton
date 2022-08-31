"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cron = require("node-cron");
var step = {
    text: 'every {} minutes',
    type: 'trigger',
    run: function (args) {
        var minutes = args.stepInputs[0];
        var task = cron.schedule("*/".concat(minutes, " * * * *"), function () {
            args.next(null);
        });
        // return a clean up fn. Will be called when workflow ends
    }
};
exports.default = step;
