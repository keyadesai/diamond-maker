var assert = require('assert');
var diamond = require('../js/draw');
describe('When DrawPyramid Called', function() {
  describe('with only a', function () {
    var output = diamond.DrawPyramid(['a']);
    it('should return a', function () {
      assert.equal(output, ' a\n');
    });
  });
  describe('with only ab', function () {
    var output = diamond.DrawPyramid(['a', 'b']);
    it('should return ab', function () {
      assert.equal(output, '  a\n b b\n');
    });
  });
  describe('with only abcde', function () {
    var output = diamond.DrawPyramid(['a', 'b', 'c', 'd', 'e']);
    it('should return ab', function () {
      assert.equal(output, '     a\n    b b\n   c   c\n  d     d\n e       e\n');
    });
  });
});

describe('When ReverseDrawPyramid Called', function() {
  describe('with only a', function () {
    var output = diamond.DrawReversePyramid(['a']);
    it('should return a', function () {
      assert.equal(output, ' a');
    });
  });
  describe('with only ab', function () {
    var output = diamond.DrawReversePyramid(['b', 'a']);
    it('should return ab', function () {
      assert.equal(output, ' b b\n  a');
    });
  });
  describe('with only abcde', function () {
    var output = diamond.DrawReversePyramid(['e', 'd', 'c', 'b', 'a']);
    it('should return ab', function () {
      assert.equal(output, ' e       e\n  d     d\n   c   c\n    b b\n     a');
    });
  });
});
