import {generateDescriptions} from './generate-descriptions.js';
// import './rendering-full-photo';

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

// нахожу фул фото
const fullScreenPicture = document.querySelector('.big-picture');

// собираю в массив миниатюры
const thumnails = document.querySelectorAll('.picture');

// ф-ия отрисовки фул фото с нужными данными
const renderingFullPhoto = (thumnail, data) => {
  thumnail.addEventListener('click', () => {
    fullScreenPicture.classList.remove('hidden');
    const fullPictImg = fullScreenPicture.querySelector('img');
    fullPictImg.src = data.url;
    const fullPictLikes = fullScreenPicture.querySelector('.likes-count');
    fullPictLikes.textContent = data.likes;
    const fullPictCommCount = fullScreenPicture.querySelector('.comments-count');
    fullPictCommCount.textContent = data.comments.length;
  });
};

// каждой добавляю обработчик клик
for (let i = 0; i < thumnails.length; i++) {
  renderingFullPhoto(thumnails[i], photoDescriptions[i]);
}

// нахожу кнопку закрытия
const closeButton = fullScreenPicture.querySelector('.cancel');

// закрытие фул фото при клике
closeButton.addEventListener('click', () => {
  fullScreenPicture.classList.add('hidden');
});

// закрытие фул фото при esc
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    fullScreenPicture.classList.add('hidden');
  }
});
