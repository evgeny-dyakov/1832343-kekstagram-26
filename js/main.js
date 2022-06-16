function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('тестовая строка', 140);

function getRandomNamber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUnorderedNumbers (min, max) {
  const orderedNumbers = [];
  const unorderedNumbers = [];

  for (let i = min; i <= max; i++) {
    orderedNumbers.push(i);
  }

  for (let i = min; i <= max; i++) {
    const randomNumber = getRandomNamber(0, orderedNumbers.length - 1);
    unorderedNumbers.push(orderedNumbers.splice(randomNumber, 1)[0]);
  }

  return unorderedNumbers;
}

function getPhotoComments () {

  let commentId = 0;

  return function (quantity) {
    const names = ['Виктория', 'Александр', 'Света', 'Мария', 'Лиза', 'Анна', 'Роман', 'Максим', 'Сергей'];
    const comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

    const photoComments = [];
    for (let i = 1; i <= quantity; i++) {
      const comment = {
        id: ++commentId,
        name: names[getRandomNamber(0, names.length - 1)],
        avatar: `img/avatar-${getRandomNamber(1, 6)}.svg`,
        message: comments[getRandomNamber(0, comments.length - 1)],
      };
      photoComments.push(comment);
    }

    return photoComments;
  };
}

function getPhotoDescriptions (quantity) {
  const photoDescriptions = [];
  const unorderedNumbers = getUnorderedNumbers(1, quantity);
  const comments = getPhotoComments();

  for (let i = 1; i <= quantity; i++) {
    const photoDescription = {
      id: i,
      url: `photos/${unorderedNumbers[i - 1]}.jpg`,
      description: 'тестовое описание фотографии',
      likes: getRandomNamber(15, 200),
      comments: comments(getRandomNamber(1, 5)),
    };
    photoDescriptions.push(photoDescription);
  }

  return photoDescriptions;
}

const PHOTO_DESCRIPTIONS_COUNT = 5;

getPhotoDescriptions(PHOTO_DESCRIPTIONS_COUNT);
