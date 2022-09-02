import { run } from 'steptacular';

run([
    {
        name: 'step1',
        run: ({ next }) => {
            next.blah;
        }
    }
])