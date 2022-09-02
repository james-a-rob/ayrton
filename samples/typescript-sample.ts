import { run } from 'steptacular';

run([
    {
        name: 'step1',
        run: ({ utils, next }) => {
            next();
        }
    }
])