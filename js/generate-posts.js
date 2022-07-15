import {getRandomNumber, getRandomUniqueNumber} from './util.js';

const userNames = [
  'Виктория',
  'Александр',
  'Света',
  'Мария',
  'Лиза',
  'Анна',
  'Роман',
  'Максим',
  'Сергей',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const photoDescriptions = [
  'Настигло вдохновение, и запилил такую фотку',
  'Мне кажется, картинка передает эмоции. Что думаете?',
  'Я художник, я так вижу',
  'Есть идеи, как подписать фотку?',
  'Кажется, это моя лучшая фотка',
];

const minLikesCount = 15;

const maxLikesCount = 200;

const minCommentsCountPerPhoto = 1;

const maxCommentsCountPerPhoto = 15;

const minCommentsIdNumber = 100;

const maxCommentsIdNumber = 999;

function getLikesCount () {
  return getRandomNumber(minLikesCount, maxLikesCount);
}

function getUserName () {
  return userNames[getRandomNumber(0, userNames.length - 1)];
}

function getMessage () {
  return messages[getRandomNumber(0, messages.length - 1)];
}

function getPhotoDescription () {
  return photoDescriptions[getRandomNumber(0, photoDescriptions.length - 1)];
}

function getAvatar () {
  return `img/avatar-${getRandomNumber(1, 6)}.svg`;
}

const getCommentId = getRandomUniqueNumber(minCommentsIdNumber, maxCommentsIdNumber);

function getComments () {
  const commentsCount = getRandomNumber(minCommentsCountPerPhoto, maxCommentsCountPerPhoto);
  const comments = [];
  for (let i = 1; i <= commentsCount; i++) {
    const comment = {
      id: getCommentId(),
      name: getUserName(),
      avatar: getAvatar(),
      message: getMessage(),
    };
    comments.push(comment);
  }
  return comments;
}

function generatePosts (count) {
  const getPhotoNumber = getRandomUniqueNumber(1, count);
  const posts = [];
  for (let i = 1; i <= count; i++) {
    const post = {
      id: i,
      url: `photos/${getPhotoNumber()}.jpg`,
      description: getPhotoDescription(),
      likes: getLikesCount(),
      comments: getComments(),
    };
    posts.push(post);
  }
  return posts;
}

export {generatePosts};
