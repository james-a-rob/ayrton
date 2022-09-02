"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });
exports.default = {
    prompt: (message) => {
        return prompt(message);
    }
};
