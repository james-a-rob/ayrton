interface DataValue {
    [key: string]: string | number | object | [];
}
interface Utils {
    prompt: (message: string) => string;
    dryRunable: (dryRun: boolean, func: any) => any;
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
interface Options {
    onError?: (stepError: StepError) => void;
    dryRun?: boolean;
}
