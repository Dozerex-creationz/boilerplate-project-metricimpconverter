const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
test('10L: GET',function(){
  assert.equal(server,{"initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"});
});
test('32g: GET',function(){
assert.equal(,"invalid unit");
});
test('3/7.2/4kg: GET',function(){
assert.equal(,"invalid number");
});
test('3/7.2/4kilomegagram: GET',function(){
assert.equal(,"invalid number and unit");
});
test('kg: GET',function(){
assert.equal(,{"initNum":1,"initUnit":"kg","returnNum":2.20462,"returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"});
});
});
