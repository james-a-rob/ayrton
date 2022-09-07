import open from 'open';
import moment from 'moment';
import { steptacular } from 'steptacular';

steptacular([
    {
        name: 'Tidy Kitchen',
        run: ({ utils: { prompt }, next }) => {
            prompt('If there are dishes from last night then clean them then press enter');
            next();
        }
    },
    {
        name: 'Feed cat',
        run: ({ utils: { prompt }, next }) => {
            prompt(`Fill cat's food and water bowl then press enter`);
            next();
        }
    },
    {
        name: 'Take out bins',
        run: ({ utils: { prompt }, next }) => {
            const weekDayNumber = moment().weekday();
            if (weekDayNumber === 3) {
                prompt('Take out the bins then press enter');
            } else {
                console.log("It's not Wednesday so no action required")
            }

            next();
        }
    },
    {
        name: 'Make vitamin drink',
        run: ({ utils: { prompt }, next }) => {
            prompt('Make vitamin drink then press enter');
            next();
        }
    },
    {
        name: 'Meditate for 5 minutes',
        run: ({ utils: { prompt }, next }) => {
            prompt('Press enter to begin meditation');
            setTimeout(async () => {
                await open('https://www.youtube.com/watch?v=iNpXCzaWW1s');
                prompt('Press enter to continue');

                next();
            }, 1000 * 60 * 5);
        }
    },
    {
        name: 'Set daily goals',
        run: ({ utils: { prompt }, next }) => {
            prompt('Set daily goals then press enter');

            next();
        }
    },
    {
        name: 'Make breakfast',
        run: ({ utils: { prompt }, next }) => {
            const breakfastOptions = ['toast', 'cereal', 'eggs', 'banana'];
            const todaysSuggestedOption = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
            console.log(`Make a breafast. You could have ${todaysSuggestedOption}`);
            prompt('Once done press enter to finish');

            next();
        }
    }
]);