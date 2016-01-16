var _ = require('lodash');

var exports = module.exports = {};

exports.IsInputValid = function(inputCharacter){
  if(_.isUndefined(inputCharacter) || _.isNull(inputCharacter) || _.isEmpty(inputCharacter)){
    console.error('Please provide character');
    return false;
  }
  if(!_.isString(inputCharacter) || inputCharacter.length > 1){
    console.error('Invalid input');
    return false;
  }
  return true;
}
