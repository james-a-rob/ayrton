import utils from '../src/utils';
describe('utils', () => {
    it('supports dry runable switched off', () => {

        const mockFunc = () => {
            console.log('this should not run when in dryrun mode');
            return "return value";
        };
        const returnValue = utils.dryRunable(false, mockFunc);
        expect(returnValue).toEqual("return value");
    });

    it('supports dry runable switched on', () => {

        const mockFunc = async () => {
            console.log('this should not run when in dryrun mode');
            return "return value";
        };
        const returnValue = utils.dryRunable(true, mockFunc);

        expect(returnValue).toEqual(`
            console.log('this should not run when in dryrun mode');
            return "return value";
        `);
    });
});