"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
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
