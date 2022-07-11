function getRandomNumber (from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getRandomUniqueNumber (from, to) {
  const previousValues = [];

  return function () {
    let randomNumber = getRandomNumber(from, to);
    while (previousValues.includes(randomNumber)) {
      randomNumber = getRandomNumber(from, to);
    }
    previousValues.push(randomNumber);
    return randomNumber;
  };
}

export {getRandomNumber, getRandomUniqueNumber};
