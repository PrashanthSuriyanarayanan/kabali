var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var kabali = require('../index');

describe("Kabali tests", function() {

  it("should find a key in given object", function() {
    expect(kabali([{"vinoth":"hero"},{"vijay": "villain"}]).findKey("vinoth").result()).to.eql([{"vinoth":"hero"}]);
  });

  it("should find multiple keys in given object", function() {
    expect(kabali([{"vinoth":"hero"},{"vijay": "villain"},{"rajini": "Thalaivar"}]).findMultipleKeys(["vinoth", "vijay"]).result()).to.eql([{"vinoth":"hero"},{"vijay": "villain"}]);
  });

});
