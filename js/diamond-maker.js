var _ = require('lodash');
var draw = require('../js/draw');
var validate = require('../js/validator');

var exports = module.exports = {};

var alphabetsSmall = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetsCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var inputCharacter = process.argv[2].toString();
var selectedAlphabet = inputCharacter === _.upperCase(inputCharacter) ? alphabetsCaps : alphabetsSmall;
var inputAlphabet = _.take(alphabetsSmall, _.indexOf(selectedAlphabet, inputCharacter) + 1);

if(!validate.IsInputValid(inputCharacter)) {return;}
else{
  draw.DrawPyramid(inputAlphabet);
  draw.DrawReversePyramid(_.reverse(inputAlphabet));
}
