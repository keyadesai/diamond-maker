var assert = require('assert');
var validator = require('../js/validator');
describe('When IsInputValid Called', function() {
  describe('with valid input', function () {
    var output = validator.IsInputValid('a');
    it('return true', function () {
      assert.equal(output, true);
    });
  });
  describe('with null input', function () {
    var output = validator.IsInputValid(null);
    it('should false', function () {
      assert.equal(output, false);
    });
  });
  describe('with non character input', function () {
    var output = validator.IsInputValid('65');
    it('should return false', function () {
      assert.equal(output, false);
    });
  });
  describe('with more than one character', function () {
    var output = validator.IsInputValid('test');
    it('should return false', function () {
      assert.equal(output, false);
    });
  });
});
