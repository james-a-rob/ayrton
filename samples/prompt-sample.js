import { steptacular } from 'steptacular';

steptacular([
    {
        name: 'Manual task 1',
        run: ({ utils: { prompt }, data, next }) => {
            const userId = prompt('Enter userId: ');
            console.log(`Instructions to complete task 1 for user ${userId} are as follows...`);
            data.setData({ userId });
            prompt('Press enter to continue: ');
            next();
        }
    },
    {
        name: 'Automated task 1',
        run: ({ utils: { prompt }, data, next }) => {
            console.log("Doing a bunch of automated work...");

            // fake doing some async work. e.g. calling and api
            setTimeout(() => {
                console.log("working...")

            }, 3000);
            setTimeout(() => {
                prompt('Press enter to continue: ');

                next();

            }, 6000);
        }
    },
    {
        name: 'Manual task 2',
        run: ({ utils: { prompt }, data, next }) => {
            const userHasAdminAccess = (userId) => {
                return userId === 'bob' || userId === 'amy'; t
            }

            if (userHasAdminAccess(data.value.userId)) {
                console.log(`Instructions to complete task 2 if ${data.value.userId} has admin access`);
                console.log(`Visit here to complete task https://www.google.co.uk/search?q=${data.value.userId}`)
            } else {
                console.log(`Instructions to complete task 2 if ${data.value.userId} does not have admin access`);
                console.log(`Visit here to complete task https://www.google.co.uk/search?q=${data.value.userId}`)

            }
            prompt('Press enter to finish: ');
            next();
        }
    }
]);