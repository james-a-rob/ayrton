#!/usr/bin/env zx
import { $, cd } from 'zx';
import { steptacular } from 'steptacular';

steptacular([
    {
        name: 'List files in parent directory',
        run: async ({ utiss: { prompt }, next }) => {
            cd('../');
            await $`dir`;
            prompt('Press enter to continue');
            next();
        }
    }, {
        name: 'Make some request to the internet',
        run: async ({ next }) => {
            await $`curl -L https://jsonplaceholder.typicode.com/todos/1`;
            prompt('Press enter to continue');
            next();
        }
    },
    {
        name: 'Do final manual step',
        run: ({ utils, next }) => {
            utils.prompt('Do manual job then hit enter');
            prompt('Press enter to finish');
            next();
        }
    }
], () => {
    console.log('error');
});
