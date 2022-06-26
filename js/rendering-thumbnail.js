import {generateDescriptions} from './generate-descriptions.js';

// генерирую массив данных
const PHOTO_DESCRIPTIONS_COUNT = 25;
const photoDescriptions = generateDescriptions(PHOTO_DESCRIPTIONS_COUNT);

// ищу список где в дальнейшем будут миниатюры
const pictureList = document.querySelector('.pictures');

// нахожу шаблон отображения миниатюр
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// создаю фрагмент в котором предварительно буду собирать миниатюры
const picturesFragment = document.createDocumentFragment();

// наполняю инфой из массива данных клоны шаблона, готовыми собираю в фрагменте
for (let i = 0; i < photoDescriptions.length; i++) {
  const currentPicture = pictureTemplate.cloneNode(true);

  const currentPictureImg = currentPicture.querySelector('.picture__img');
  currentPictureImg.src = photoDescriptions[i].url;

  const currentPictureLikes = currentPicture.querySelector('.picture__likes');
  currentPictureLikes.textContent = photoDescriptions[i].likes;

  const currentPictureComments = currentPicture.querySelector('.picture__comments');
  currentPictureComments.textContent = photoDescriptions[i].comments.length;

  picturesFragment.appendChild(currentPicture);
}

// заливаю фрагмент в список
pictureList.appendChild(picturesFragment);

