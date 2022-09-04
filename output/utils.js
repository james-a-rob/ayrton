"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const prompt = promptSync({ sigint: true });
exports.default = {
    prompt: (message) => {
        return prompt(message);
    },
    dryRunable: (dryRun, func) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(dryRun, func);
        if (dryRun) {
            const entire = func.toString();
            const body = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
            console.log('Dry run the following code');
            console.log(body);
            return body;
        }
        else {
            return yield func();
        }
    })
};
