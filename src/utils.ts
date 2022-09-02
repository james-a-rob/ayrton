import * as promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

export default {
    prompt: (message: string) => {
        return prompt(message);
    }
}