function ConvertHandler() {
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
        const gal = string.match(/gal/i);
        const l = string.match(/l/i);
        const lbs = string.match(/lbs/i);
        const kg = string.match(/kg/i);
        const mi = string.match(/mi/i);
        const km = string.match(/km/i);

        return gal
            ? 'gal'
            : l
            ? 'l'
            : lbs
            ? 'lbs'
            : kg
            ? 'kg'
            : mi
            ? 'mi'
            : km
            ? 'km'
            : false;
    };

    this.getReturnUnit = function (initUnit) {
        let result;

        return result;
    };

    this.spellOutUnit = function (unit) {
        let result;

        return result;
    };

    this.convert = function (initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;

        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result;

        return result;
    };
}

module.exports = ConvertHandler;
