const makeConstant = function(arguement){
  return function() {
    return arguement;
  }
}

// start counter from any number
const makeCounterFromN = function(number) {
  let count = number - 1;
  return function() {
    count++;
    return count;
  }
};

const curry = undefined;

// counter starts from zero
const makeCounterFromZero = function() {
  let count = -1;
  return function() {
    count++;
    return count;
  }  
}

const makeDeltaTracker = undefined; 
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
