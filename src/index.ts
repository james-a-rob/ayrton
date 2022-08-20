import { readdirSync } from 'fs';

const ayrton = (workflowDirectory: string) => {
    const fileNames = readdirSync(workflowDirectory);
};

export default ayrton;