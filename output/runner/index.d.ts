interface Step {
    name: string;
    run: (args: any) => void;
}
declare const runner: (steps: Step[]) => void;
export default runner;
