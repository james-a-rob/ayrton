import topXHNStories from '../../src/steps/get-top-x-hn-stories';
import * as nock from 'nock';

const nockBack = nock.back;
nockBack.setMode('dryrun');
nockBack.fixtures = __dirname + '/nockFixtures';

describe('getTopXHNStories', () => {
    it('runs', async () => {
        const { nockDone, context } = await nockBack('get-top-x-hn-stories.json')
        const callbackSpy = jest.fn();
        await topXHNStories.run({ data: {}, utilities: {}, stepInputs: [1], next: callbackSpy });
        expect(callbackSpy.mock.calls[0][0][0].title).toEqual("Diablo 1 for Web Browsers");
        nockDone()
    });
});
