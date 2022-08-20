
const curlRegex = /\{([0-9a-zA-Z $]+)\}/g;

export const checkIfStepsMatch = (stepText: string, stepTextInput: string) => {
    const modifiedStepTextInput = stepTextInput.replace(curlRegex, "{}");
    console.log(modifiedStepTextInput);
    return modifiedStepTextInput === stepText;
}

export const extractVariablesFromStepTextInput = (stepTextInput: string) => {
    const variables = stepTextInput.match(curlRegex);
    if (variables) {
        return variables.map((variable) => {
            variable = variable.replace("{", "");
            variable = variable.replace("}", "");
            return variable
        });
    } else {
        return [];
    }


}