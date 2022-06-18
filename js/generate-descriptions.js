import {getRandomNumber} from './util.js';

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 5;
const USER_NAMES = [
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
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Описание_1',
  'Описание_2',
  'Описание_3',
  'Описание_4',
  'Описание_5'
];

const getName = () => USER_NAMES[getRandomNumber(0, USER_NAMES.length - 1)];

const getAvatar = () => `img/avatar-${getRandomNumber(1, 6)}.svg`;

const getLikes = () => getRandomNumber(MIN_LIKES, MAX_LIKES);

const getDescription = () => DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)];

const getMessage = () => MESSAGES[getRandomNumber(0, MESSAGES.length - 1)];

const commentsId = [1];

const getId = () => {
  let commentId = 1;
  while (commentsId.find((el) => el === commentId)) {
    commentId = getRandomNumber(1, commentsId.length + 100);
  }
  commentsId.push(commentId);
  return commentId;
};

const getComments = () => {
  const count = getRandomNumber(1, MAX_COMMENTS);
  const comments = [];
  for (let i = 1; i <= count; i++) {
    const comment = {
      id: getId(),
      name: getName(),
      avatar: getAvatar(),
      message: getMessage(),
    };
    comments.push(comment);
  }
  return comments;
};

const generateDescriptions = (count) => {
  const photoDescriptions = [];
  for (let i = 1; i <= count; i++) {
    const photoDescription = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getDescription(),
      likes: getLikes(),
      comments: getComments(),
    };
    photoDescriptions.push(photoDescription);
  }
  return photoDescriptions;
};

export {generateDescriptions};
