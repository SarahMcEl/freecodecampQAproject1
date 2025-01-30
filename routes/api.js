'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get(function(req, res) {
    let inputNum = Number(convertHandler.getNum(req.query['inputData']));
    if( inputNum == -1) {
      res.jsonp({result: 'invalid number', print: 'invalid number'});
    } else {
      let inputUnit = convertHandler.getUnit(req.query['inputData']);
      if (inputUnit == 'invalid number and unit') {
        res.jsonp({result: 'invalid number and unit', print: 'invalid number and unit'});
      } else {

        let outputNum = convertHandler.convert(inputNum, inputUnit);
        let outputUnit = convertHandler.getReturnUnit(inputUnit);
        let outputString = convertHandler.getString(inputNum, inputUnit, outputNum, outputUnit);

        res.jsonp({
          result: outputString,
          print: {
            initNum: inputNum,
            initUnit: inputUnit,
            returnNum: outputNum,
            returnUnit: outputUnit,
            string: outputString
          }
        });
      }
    }
  });

};