import { steptacular } from 'steptacular';

steptacular([
    {
        name: 'Manual task 1',
        run: ({ utils: { prompt }, data, next }) => {
            const userId = prompt('Enter userId: ');
            console.log(`Instructions to complete task 1 for user ${userId}...`);
            data.setData({ userId });
            prompt('Press enter to continue: ');
            next();
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

            } else {
                console.log(`Instructions to complete task 2 if ${data.value.userId} does not have admin access`);

            }
            prompt('Press enter to continue: ');
            next();
        }
    }
]);