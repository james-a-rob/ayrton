export interface Utilities {

}

export interface StepInputs {

}

export interface StepRunArgs {
    utilities: Utilities,
    stepInputs: [any],
}

export interface TriggerStepRunArgs extends StepRunArgs {
    next: <T>(args: [] | T | null) => void
}

export interface ActionStepRunArgs extends StepRunArgs {
    data: any
    next: <T>(args: [T] | T | null) => void
}