function ConvertHandler() {
    const units = {
        mi: {
            name: 'miles',
            abrv: 'mi',
            opp: 'km',
            convert: {
                operation: 'multiply',
                amount: 1.60934,
            },
        },
        km: {
            name: 'kilometers',
            abrv: 'km',
            opp: 'mi',
            convert: {
                operation: 'divide',
                amount: 1.60934,
            },
        },
        gal: {
            name: 'gallons',
            abrv: 'gal',
            opp: 'l',
            convert: {
                operation: 'multiply',
                amount: 3.78541,
            },
        },
        l: {
            name: 'liters',
            abrv: 'l',
            opp: 'gal',
            convert: {
                operation: 'divide',
                amount: 3.78541,
            },
        },
        lbs: {
            name: 'pounds',
            abrv: 'lbs',
            opp: 'kg',
            convert: {
                operation: 'multiply',
                amount: 0.453592,
            },
        },
        kg: {
            name: 'kilograms',
            abrv: 'kg',
            opp: 'lbs',
            convert: {
                operation: 'divide',
                amount: 0.453592,
            },
        },
    };

    this.getNum = function (input) {
        const string = input.toString();
        const numRegex = /^\d+(\.\d+)?|^\.\d+/;
        let match = string.match(numRegex);

        if (match) {
            return parseFloat(match[0]);
        }
        return false;
    };

    this.getUnit = function (input) {
        const string = input.toString();
        for (const property in units) {
            let regex = new RegExp(units[property].abrv, 'i');
            if (string.match(regex)) {
                return units[property].abrv;
            }
        }
        return false;
    };

    this.getReturnUnit = function (initUnit) {
        return units[initUnit].opp;
    };

    this.spellOutUnit = function (unit) {
        return units[unit].name;
    };

    this.convert = function (initNum, initUnit) {
        const operator = units[initUnit].convert.operation;
        const amount = units[initUnit].convert.amount;

        if (operator === 'multiply') {
            return initNum * amount;
        } else {
            return initNum / amount;
        }
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        return `${initNum} ${units[initUnit].name} converts to ${returnNum} ${units[returnUnit].name}`;
    };
}

module.exports = ConvertHandler;
