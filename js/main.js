const getRandomNumber = (min, max) => {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber();

const checkStringLength = (string, length) => string.length <= length;

checkStringLength();
