interface Step {
    name: string;
    run: (args: any) => void;
}
export declare const run: (steps: Step[]) => void;
export {};
