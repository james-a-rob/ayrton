#!/usr/bin/env zx
import { $, cd } from 'zx';
import { steptacular } from 'steptacular';

// steps to publish this library
steptacular([
    {
        name: 'Build output code',
        run: async ({ utils: { prompt }, data, next }) => {
            const versionNumber = prompt('Enter new version number: ');
            data.setData({ versionNumber });
            console.log(`Update package.json version to ${versionNumber}`);
            prompt('Press enter to continue: ');
            next();
        }
    },
    {
        name: 'Check all samples still work',
        run: ({ utils: { prompt }, next }) => {
            console.log('run all sample apps from inside samples repo');
            console.log('npm run start:prompt');
            console.log('npm run start:typescript');
            console.log('npm run start:publish');
            console.log('npm run start:zxt');
            prompt('Press enter to continue: ');
            next();
        }
    },
    {
        name: 'Publish to npm',
        run: async ({ utils: { prompt, dryRunable }, data, next }) => {
            cd('../');
            prompt(`About to publish version ${data.value.versionNumber} to npm! Press enter to confirm: `);
            dryRunable(async () => {
                await $`npm publish`;
            });
            console.log('Check module publish successfully here https://www.npmjs.com/package/steptacular');
            prompt('Press enter to continue: ');
            next();
        }
    },
    {
        name: 'Push to github',
        run: async ({ utils: { prompt }, data, next }) => {
            prompt(`About to commit version ${data.value.versionNumber} to git! Press enter to confirm: `);

            await $`git add -A`;
            await $`git commit -m "Releasing version ${data.value.versionNumber}"`;
            // await $`git push origin main`;
            console.log("Push to Github. This must be done manually");

            prompt('Press enter to continue: ');
            next();
        }
    },
    {
        name: 'Create Github release',
        run: ({ utils: { prompt }, data, next }) => {
            console.log('Visit https://github.com/james-a-rob/steptacular/releases/new');
            console.log(`Create a new release named "${data.value.versionNumber}"`);
            console.log('Add any new features, breaking changes and deprications');
            prompt('Press enter to finsih: ');
            next();
        }
    }, {
        dryRun: true
    }
]);