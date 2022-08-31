"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractVariablesFromStepTextInput = exports.checkIfStepsMatch = void 0;
var curlRegex = /\{([0-9a-zA-Z $]+)\}/g;
var checkIfStepsMatch = function (stepText, stepTextInput) {
    var modifiedStepTextInput = stepTextInput.replace(curlRegex, "{}");
    return modifiedStepTextInput === stepText;
};
exports.checkIfStepsMatch = checkIfStepsMatch;
var extractVariablesFromStepTextInput = function (stepTextInput) {
    var variables = stepTextInput.match(curlRegex);
    if (variables) {
        return variables.map(function (variable) {
            variable = variable.replace("{", "");
            variable = variable.replace("}", "");
            return variable;
        });
    }
    else {
        return [];
    }
};
exports.extractVariablesFromStepTextInput = extractVariablesFromStepTextInput;
