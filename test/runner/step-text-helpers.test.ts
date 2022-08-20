import { checkIfStepsMatch, extractVariablesFromStepTextInput } from '../../src/runner/step-text-helpers';

describe('step text helpers', () => {
    it('steps text matches string input', () => {
        const stepsMatch = checkIfStepsMatch('trigger based on value {}', 'trigger based on value {1}');
        expect(stepsMatch).toBe(true);
    });

    it('steps text matches property input', () => {
        const stepsMatch = checkIfStepsMatch('trigger based on value {}', 'trigger based on value {$property}');
        expect(stepsMatch).toBe(true);
    });

    it('steps text matches multiple inputs', () => {
        const stepsMatch = checkIfStepsMatch('trigger {} based on value {}', 'trigger {hello how are you} based on value {$property}');
        expect(stepsMatch).toBe(true);
    });

    it('get variables', () => {
        const variables = extractVariablesFromStepTextInput('trigger {hello how are you} based on value {$property}');
        expect(variables).toEqual(["hello how are you", "$property"]);
    });
});