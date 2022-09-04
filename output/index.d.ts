interface DataValue {
    [key: string]: string | number | object | [];
}
interface Utils {
    prompt: (message: string) => string;
}
interface RunArgs {
    data: Data;
    utils: Utils;
    next: (data?: Data) => void;
}
interface Step {
    name: string;
    run: (args: RunArgs) => void;
}
interface Data {
    value: DataValue;
    setData: (newData: object) => void;
}
interface StepError {
    step: number;
    error: any;
}
export declare const steptacular: (steps: Step[], onError?: ((stepError: StepError) => void) | undefined, currentStep?: number) => void;
export {};
