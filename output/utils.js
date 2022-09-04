"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });
exports.default = {
    prompt: (message) => {
        return prompt(message);
    },
    dryRunable: (dryRun, func) => {
        console.log(dryRun, func);
        if (dryRun) {
            const entire = func.toString();
            const body = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
            console.log('Dry run the following code');
            console.log(body);
            return body;
        }
        else {
            return func();
        }
    }
};
