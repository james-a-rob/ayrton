import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

export default {

    prompt: (message: string) => {
        return prompt(message);
    },
    dryRunable: (dryRun: boolean, func: any) => {
        console.log(dryRun, func)
        if (dryRun) {
            const entire = func.toString()
            const body = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
            console.log('Dry run the following code');
            console.log(body);
            return body;
        } else {
            return func();

        }
    }
}