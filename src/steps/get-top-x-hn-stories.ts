import axios from 'axios';

import { ActionStepRunArgs } from './interfaces';

const step = {
    text: 'get top {} HN stories',
    type: 'action',
    run: async (args: ActionStepRunArgs) => {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=${args.stepInputs[0]}`);
        return args.next(response.data.hits);
    }
}

export default step;