import run from '../src/app';

describe('app', () => {
    it('runs', () => {
        expect(run("yo")).toEqual("yo")

    });
});
