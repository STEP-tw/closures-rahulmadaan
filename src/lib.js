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

curry = function(functionName,arguement_1) {
  return function(arguement_2,arguement_3) {
    if(!arguement_3) {
      return functionName(arguement_1,arguement_2);
    }
    return functionName(arguement_1,arguement_2,arguement_3);
  }
}

// counter starts from zero
const makeCounterFromZero = function() {
  let count = -1;
  return function() {
    count++;
    return count;
  }  
}

const makeDeltaTracker = function(tracker){
  let deltaValue = 0;
  let oldValue = tracker;
  let newValue = tracker;
  return function(deltaInput) {
    if(!deltaInput) {deltaInput = 0}
    oldValue = oldValue + deltaValue;
    deltaValue = deltaInput;
    newValue = oldValue + deltaValue;
    let deltaObject = {old : oldValue , delta : deltaValue , new : newValue };
    return deltaObject;
  }
}

const makeFiboGenerator = function (one,two) {
  let termOne = one + two;
  let termTwo = two;
  let fiboTerm = 0;
  if(one == undefined && two == undefined) { termOne =1, termTwo=1}
  if(one!=undefined  && two == undefined) { termTwo=one, termOne=one; }
  return function() {
    fiboTerm = termOne - termTwo;
    termOne = termOne + termTwo;
    termTwo = termOne - termTwo;
    return fiboTerm;
  }
}

const makeCycler = function(inputArray) {
  let index = -1;
  let input = inputArray.slice(0,inputArray.length);
  return function() {
    let length = input.length;
    ++index;
    if(index >= length) {index = 0;}
    return input[index];
  }
}

const compose = function(functionOne,functionTwo) {
  return function(arguementOne,arguementTwo) {
    if(!arguementTwo) {
      let output = functionTwo(arguementOne);
      return functionOne(output);
    }
    let output = functionTwo(arguementOne,arguementTwo);
    return functionOne(output);
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
