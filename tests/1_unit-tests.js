const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    // 1. convertHandler should correctly read a whole number input
    test('whole number input', () => {
        assert.equal(convertHandler.getNum('6mi'), 6, 'read integer');
    });

    // 2. convertHandler should correctly read a decimal number input
    test('decimal number input', () => {
        assert.equal(convertHandler.getNum('0.43mi'), 0.43, 'read decimal');
    });

    // 3. convertHandler should correctly read a fractional input
    test('fractional number input', () => {
        assert.equal(convertHandler.getNum('3/4mi'), 0.75, 'read fraction');
    });

    // 4. convertHandler should correctly read a fractional input with a decimal
    test('fractional number input with decimal', () => {
        assert.equal(
            convertHandler.getNum('4.5/5mi'),
            0.9,
            'read fraction w/ decimal'
        );
    });
    // 5. convertHandler should correctly return an error on a double-fraction
    test('double-fraction input', () => {
        assert.equal(
            convertHandler.getNum('4/3/5mi'),
            'invalid number',
            'read double fraction'
        );
    });

    // 6. convertHandler should correctly default to a numerical input of 1 when no numerical input is provided
    test('no numerical input', () => {
        assert.equal(convertHandler.getNum('mi'), 1, 'read empty number');
    });

    // 7. convertHandler should correctly read each valid input unit
    test('miles input', () => {
        assert.equal(convertHandler.getUnit('4mi'), 'mi', 'read miles');
    });
    test('kilometers input', () => {
        assert.equal(convertHandler.getUnit('4km'), 'km', 'read kilometers');
    });
    test('gallons input', () => {
        assert.equal(convertHandler.getUnit('4gal'), 'gal', 'read gallons');
    });
    test('liters input', () => {
        assert.equal(convertHandler.getUnit('4l'), 'l', 'read liters');
    });
    test('pounds input', () => {
        assert.equal(convertHandler.getUnit('4lbs'), 'lbs', 'read pounds');
    });
    test('kilogram input', () => {
        assert.equal(convertHandler.getUnit('4kg'), 'kg', 'read kilograms');
    });

    // 8. convertHandler should correctly return an error for an invalid input unit
    test('invalid input unit', () => {
        assert.equal(
            convertHandler.getUnit('4w'),
            'invalid unit',
            'read invalid unit'
        );
    });

    // 9. convertHandler should return the correct return unit for each valid input unit

    // 10. convertHandler should correctly return the spelled-out string unit for each valid input unit

    // 11. convertHandler should correctly convert gal to L

    // 12. convertHandler should correctly convert L to gal

    // 13. convertHandler should correctly convert mi to km

    // 14. convertHandler should correctly convert km to mi

    // 15. convertHandler should correctly convert lbs to kg

    // 16. convertHandler should correctly convert kg to lbs
});
