import promptSync from 'prompt-sync';
import open from 'open';
import moment from 'moment';
import { run } from 'steptacular';

const prompt = promptSync({ sigint: true });

run([{
    name: 'Tidy Kitchen',
    run: ({ next }) => {
        prompt('If there are dishes from last night then clean them then press enter');
        next();
    }
},
{
    name: 'Feed cat',
    run: ({ next }) => {
        prompt(`Fill cat's food and water bowl then press enter`);
        next();
    }
},
{
    name: 'Take out bins',
    run: ({ next }) => {
        const weekDayNumber = moment().weekday();
        if (weekDayNumber === 3) {
            prompt('Take out the bins then press enter');
        }

        next();
    }
},
{
    name: 'Meditate for 10',
    run: ({ next }) => {
        prompt('Press enter to begin meditation');
        setTimeout(async () => {
            await open('https://www.youtube.com/watch?v=iNpXCzaWW1s');

            next();
        }, 1000 * 60 * 5);
    }
},
{
    name: 'Make vitamin drink',
    run: ({ next }) => {
        prompt('Make vitamin drink then press enter');
        next();
    }
},
{
    name: 'Set daily goals',
    run: ({ next }) => {
        prompt('Set daily goals then press enter');

        next();
    }
},
{
    name: 'Make breakfast',
    run: ({ next }) => {
        console.log("Make a breafast. You could try");
        prompt('Once done press enter to finish');

        next();
    }
}
]);