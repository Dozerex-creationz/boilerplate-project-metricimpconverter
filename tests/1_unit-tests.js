const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
//for all valid input read numbericals and display error if wrong
test('#equal #notEqual #isNotNull',function(){
  assert.isNotNull(convertHandler.getNum("10mi"));
});
test('',function(){
  assert.isNotNull(convertHandler.getNum("10.09mi"));
});
test('',function(){
  assert.isNotNull(convertHandler.getNum("10/3mi"));
});
test('',function(){
  assert.isNotNull(convertHandler.getNum("1.3/2mi"));
});
test('',function(){
  assert.equal(convertHandler.getNum("1/2/3mi"),"invalid");
});
test('',function(){
  assert.equal(convertHandler.getNum("mi"),1);
});

//units are perfect or wrong 
test('#isOk #isNotOk #equal',function(){
  assert.isOk(convertHandler.getUnit("10mi"));
});
test('',function(){
  assert.equal(convertHandler.getUnit("10.09kgs"),"invalid");
});
test('',function(){
  assert.equal(convertHandler.getReturnUnit("L"),"gal");
});
test('',function(){
  assert.equal(convertHandler.spellOutUnit("kg"),"kilograms");
});
//convert unit to correct unit
test('#equal',function(){
  assert.equal(convertHandler.getReturnUnit("L"),"gal");
});

test('',function(){
  assert.equal(convertHandler.getReturnUnit("km"),"mi");
});
test('',function(){
  
  assert.equal(convertHandler.getReturnUnit("mi"),"km");
});
test('',function(){
  
  assert.equal(convertHandler.getReturnUnit("lbs"),"kg");
});
test('',function(){
  
  assert.equal(convertHandler.getReturnUnit("kg"),"lbs");
});
test('',function(){
  
  assert.equal(convertHandler.getReturnUnit("gal"),"L");

});


});