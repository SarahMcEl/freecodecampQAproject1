function ConvertHandler() {

  this.getNum = function(input) {
    const numRegex = new RegExp('[0-9]+[.]?[0-9]?\/?[0-9]?[.]?[0-9]?');
    const regexTest = new RegExp('[0-9]+[.]?[0-9]?\/?[0-9]?[.]?[0-9]?[a-zA-Z]+');
    if (regexTest.test(input)) {
      return Number(numRegex.exec(input));;
    } else {
      let result = numRegex.exec(input);
      if (result == null) {
        return 1;
      }
      return -1;
    }
  };

  this.getUnit = function(input) {
    const unitRegex = new RegExp('[a-zA-Z]+');
    let result = unitRegex.exec(input).toString();
    return result.toLowerCase();
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit == 'mi')  {result = 'km';}
    if(initUnit == 'km')  {result = 'mi';}
    if(initUnit == 'gal') {result = 'l';}
    if(initUnit == 'l')   {result = 'gal';}
    if(initUnit == 'lbs') {result = 'kg';}
    if(initUnit == 'kg')  {result = 'lbs';}

    return result;
  };

  this.spellOutUnit = function(initUnit) {
    let result;
    if(initUnit == 'mi')  {result = 'miles';}
    if(initUnit == 'km')  {result = 'kilometers';}
    if(initUnit == 'gal') {result = 'gallons';}
    if(initUnit == 'l')   {result = 'liters';}
    if(initUnit == 'lbs') {result = 'pounds';}
    if(initUnit == 'kg')  {result = 'kilograms';}

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if(initUnit == 'mi')  {result = (initNum * miToKm).toFixed(5);}
    if(initUnit == 'km')  {result = (initNum / miToKm).toFixed(5);}
    if(initUnit == 'gal') {result = (initNum * galToL).toFixed(5);}
    if(initUnit == 'l')   {result = (initNum / galToL).toFixed(5);}
    if(initUnit == 'lbs') {result = (initNum * lbsToKg).toFixed(5);}
    if(initUnit == 'kg')  {result = (initNum / lbsToKg).toFixed(5);}

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = "" + initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);

    return result;
  };

}

module.exports = ConvertHandler;