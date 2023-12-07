//Base Structure

const { commonUtils } = require('../../commonUtilities/utils');
let file = "path/toBeWritten/to"
let message = "String to be printed"

await commonUtil.logTestName(file, message)
await commonUtil.logList(file, message)
try {
    await testingFoo();
    await commonUtil.logResultPass(file, message)
    await commonUtil.logTestPass(file, message)
} catch(error) {
    await commonUtil.logResultFail(file, message)
    await commonUtil.logTestFail(file, message)
    throw error;
}
await logAdditionalTestName(file,message)

test ('All tests complete', async ({page}) => {
    await commonUtil.logTestComplete(file, message)
});


/*Logging Documentation
Announcing the name of the test: `await commonUtil.logTestName(file, message)`
Announcing additional tests: `await commonUtil.logAdditionalTestName(file, message)` (This appends to the file rather than erasing it)
Testing steps: `await commonUtil.logList(file, message)` (Should have at least one between the other log types)
Results passing: `await commonUtil.logResultPass(file, message)` Each Try statement should contain one
Test passing: `await commonUtil.logTestPass(file, message)` (Significant milestones in Try statements should include this, even if not an actual test passed)
Result Failing:  `await commonUtil.logResultFail(file, message)` (Each Catch statement should include this)
Test Failing: `await commonUtil.logTestFail(file, message)` (Significant milestones in Catch statements should include this, even if not an actual test failed)
All tests should end with the additional test 'All tests complete' as shown above.
*/
