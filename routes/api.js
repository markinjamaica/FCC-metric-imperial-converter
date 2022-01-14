'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
    let convertHandler = new ConvertHandler();

    app.route('/api/convert').get((req, res) => {
        const initNum = convertHandler.getNum(req.query.input);
        if (initNum === 'invalid number') {
            return res.send('invalid number');
        }
        const initUnit = convertHandler.getUnit(req.query.input);
        if (initUnit === 'invalid unit') {
            return res.send('invalid unit');
        }
        const returnNum = convertHandler.convert(initNum, initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);
        const string = convertHandler.getString(
            initNum,
            initUnit,
            returnNum,
            returnUnit
        );
        res.json({
            initNum: initNum,
            initUnit: initUnit,
            returnNum: returnNum,
            returnUnit: returnUnit,
            string: string,
        });
    });
};
