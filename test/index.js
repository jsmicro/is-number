const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    // Run the isNumber() Test.
    test($.isNumber)
        .accept(200)
        .reject([])
        .reject('Test')
        .reject({})
        .reject(true)
        .reject(false)
        .reject(test.args(arguments))
        .queue(true);

    // Run the isNotNumber() Test.
    test(isNotNumber)
        .accept(() => {})
        .accept([])
        .accept('Test')
        .accept({})
        .accept(true)
        .accept(false)
        .accept(test.args(arguments))
        .reject(200)
        .queue(true);
}
