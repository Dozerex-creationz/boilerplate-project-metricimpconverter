const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
test('10L: GET',function(){chai.request(server).get("/api/convert?input=10L").end(function(err,res){
  assert.equal(res.text,'{"initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"}');
})});
test('32g: GET',function(){chai.request(server).get("/api/convert?input=32g").end(function(err,res){
  str="invalid unit";
assert.equal(res.body,str);
})});
test('3/7.2/4kg: GET',function(){chai.request(server).get("/api/convert?input=3/7.2/4kg").end(function(err,res){
assert.equal(res.body,"invalid number");
})});
test('3/7.2/4kilomegagram: GET',function(){chai.request(server).get("/api/convert?input=3/7.2/4kilomegagram").end(function(err,res){
assert.equal(res.body,"invalid number and unit");
})});
test('kg: GET',function(){chai.request(server).get("/api/convert?input=kg").end(function(err,res){
assert.equal(res.text,`{"initNum":1,"initUnit":"kg","returnNum":2.20462,"returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"}`);
})});
});
