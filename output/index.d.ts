interface Data {
    [key: string]: string | number | object | [];
}
interface Utils {
    prompt: (message: string) => string;
}
interface RunArgs {
    data?: object;
    utils: Utils;
    next: (data?: Data) => void;
}
interface Step {
    name: string;
    run: (args: RunArgs) => void;
}
export declare const steptacular: (steps: Step[]) => void;
export {};
