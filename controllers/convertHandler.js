function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log(input)
    if(input.charAt(0)=='.' ||input.charAt(0)=='/'){
      return "invalid";
    }
    let result=input.split(/[A-za-z]+/);
    result=result[0];
    if(result==''){
      return 1;
    }
    if(result.split('.').length-1>1 || result.split('/').length-1>1){
      return "invalid";
    }
    result=eval(result);
    return parseFloat(result);
  };
  this.getUnit = function(input) {
    let result=input.split(/[\d]+/);
    let ans=result[result.length-1].toLowerCase();
    let valid=["mi","km","gal","l","kg","lbs"]
    if(ans=="l"){
      return "L";
    }
    if(valid.indexOf(ans)>-1){
    return ans;
    }
    return "invalid";
  };
  
  this.getReturnUnit = function(initUnit) {
    let result=initUnit;
    let swi=result.toLowerCase();
    switch(swi){
      case "km":
      {
        result="mi";
        break;
      }
      case "mi":
      {
        result="km";
        break;
      }
      case "l":
      {
        result="gal";
        break;
      }
      case "gal":
      {
        result="L";
        break;
      }
      
      case "kg":
      {
        result="lbs";
        break;
      }
      case "lbs":
      {
        result="kg";
        break;
      }
      default:
      {
        result="invalid";
      }
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result=unit;
    let swi=result.toLowerCase();
    switch(swi){
      case "mi":
      {
        result="miles";
        break;
      }
      case "km":
      {
        result="kilometers";
        break;
      }
      case "gal":
      {
        result="gallons";
        break;
      }
      case "l":
      {
        result="liters";
        break;
      }
      
      case "lbs":
      {
        result="pounds";
        break;
      }
      case "kg":
      {
        result="kilograms";
        break;
      }
      default:
      {
        result="invalid";
      }
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result=initNum;
    let swi=initUnit.toLowerCase();
    switch(swi){
      case "mi":
      {
        result*=miToKm;
        break;
      }
      case "km":
      {
        result/=miToKm;
        break;
      }
      case "gal":
      {
        result*=galToL;
        break;
      }
      case "l":
      {
        result/=galToL;
        break;
      }
      
      case "lbs":
      {
        result*=lbsToKg;
        break;
      }
      case "kg":
      {
        result/=lbsToKg;
        break;
      }
      default:{
        result=0
      }
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result=initNum+" "+this.spellOutUnit(initUnit)+" converts to "+returnNum+" "+this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
