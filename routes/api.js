'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get("/api/convert/",(req,res)=>{
    let input=req.query.input;
    let initNum=convertHandler.getNum(input);
    let initUnit=convertHandler.getUnit(input);
    let returnUnit=convertHandler.getReturnUnit(initUnit);
    let returnNum=convertHandler.convert(initNum,initUnit);
    let string=convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
    let validNum=initNum=="invalid"?1:0;
    let validUnit=initUnit=="invalid"?1:0;
    let out;
    if(validNum && validUnit){
      out="invalid number and unit"
    }
    else if(validNum){
      out="invalid number"
    }
    else if(validUnit){
      out="invalid unit"
    }
    else{
    out={'initNum':initNum,'initUnit':initUnit,'returnNum':returnNum,'returnUnit':returnUnit,'string':string};
    }
    console.log(out);
    res.json(out);
  })
};
