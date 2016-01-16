var _ = require('lodash');

var exports = module.exports = {};

exports.DrawPyramid = function(alphabets) {
  var output = '';
  _.forEach(alphabets, function(alphabet, index) {
    var secondAlphabet = index === 0 ? '' : AddSpace(index + index -1) + alphabet;
    output += AddSpace(alphabets.length - index) + alphabet + secondAlphabet + '\n';
  });
  console.log(output.slice(0, output.length - 1));
  return output;
}

exports.DrawReversePyramid = function(alphabets) {
  var output = '';
  var i = 2;
  _.forEach(alphabets, function(alphabet, index) {
    if(alphabet == process.argv[2].toString()){i += 2;return;}
    var secondAlphabet = (index === alphabets.length - 1) ? '' : AddSpace((alphabets.length+ alphabets.length) - i - 1)
    + alphabet + '\n';;
    output += AddSpace(index + 1) + alphabet + secondAlphabet;
    i += 2;
  });
  console.log(output);
  return output;
}

function AddSpace(times){
  return Array(times+1).join(' ');
}
