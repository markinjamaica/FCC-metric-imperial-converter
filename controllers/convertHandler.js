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
            opp: 'L',
            convert: {
                operation: 'multiply',
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
        L: {
            name: 'liters',
            abrv: 'L',
            opp: 'gal',
            convert: {
                operation: 'divide',
                amount: 3.78541,
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

        const numRegex = /^\d+(\.\d+)?(\/\d+(\.\d+)?)?/i;
        const numberMatch = string.match(numRegex);

        if (numberMatch) {
            // Check for fractions
            if (numberMatch[0].includes('/')) {
                // Check for double divisor
                if (string.split('/').length > 2) {
                    return 'invalid number';
                }
                let [a, b] = numberMatch[0].split('/');
                a = parseFloat(a);
                b = parseFloat(b);
                return a / b;
            }
            return parseFloat(numberMatch[0]);
        }
        return 1;
    };

    this.getUnit = function (input) {
        const string = input.toString();
        for (const property in units) {
            let regex = new RegExp(units[property].abrv, 'i');
            if (string.match(regex)) {
                return units[property].abrv;
            }
        }
        return 'invalid unit';
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
            return Math.round(initNum * amount * 100000) / 100000;
        } else {
            return Math.round((initNum / amount) * 100000) / 100000;
        }
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        return `${initNum} ${units[initUnit].name} converts to ${returnNum} ${units[returnUnit].name}`;
    };
}

module.exports = ConvertHandler;
