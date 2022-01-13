const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    // 1. convertHandler should correctly read a whole number input
    test('whole number input', () => {
        assert.equal(convertHandler.getNum('6mi'), 6, 'get number');
    });

    // 2. convertHandler should correctly read a decimal number input
    test('decimal number input', () => {
        assert.equal(convertHandler.getNum('.43mi'), 0.43, 'get decimal');
    });

    // 3. convertHandler should correctly read a fractional input

    // 4. convertHandler should correctly read a fractional input with a decimal

    // 5. convertHandler should correctly return an error on a double-fraction

    // 6. convertHandler should correctly default to a numerical input of 1 when no numerical input is provided

    // 7. convertHandler should correctly read each valid input unit

    // 8. convertHandler should correctly return an error for an invalid input unit

    // 9. convertHandler should return the correct return unit for each valid input unit

    // 10. convertHandler should correctly return the spelled-out string unit for each valid input unit

    // 11. convertHandler should correctly convert gal to L

    // 12. convertHandler should correctly convert L to gal

    // 13. convertHandler should correctly convert mi to km

    // 14. convertHandler should correctly convert km to mi

    // 15. convertHandler should correctly convert lbs to kg

    // 16. convertHandler should correctly convert kg to lbs
});
