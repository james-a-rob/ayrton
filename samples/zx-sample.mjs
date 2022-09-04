#!/usr/bin/env zx
import { $, cd } from 'zx';
import { steptacular } from 'steptacular';

steptacular([
    {
        name: 'list files in parent directory',
        run: async ({ next }) => {
            cd('../');
            await $`dir`;
            next();
        }
    }, {
        name: 'make some request to the internet',
        run: async ({ next }) => {
            await $`curl -L https://jsonplaceholder.typicode.com/todos/1`;
            next();
        }
    },
    {
        name: 'do final manual step',
        run: ({ utils, next }) => {
            utils.prompt('Do manual job then hit enter');
            next();
        }
    }
], () => {
    console.log('error');
});
