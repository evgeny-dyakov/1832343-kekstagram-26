import {imgPreview} from './scale-photo.js';

const effectsList = document.querySelector('.img-upload__effects');

function onEffectsListClick (evt) {
  if (evt.target.matches('.effects__radio')) {
    imgPreview.removeAttribute('class');
    imgPreview.classList.add(`effects__preview--${evt.target.id.substring(7)}`);
  }
}

effectsList.addEventListener('click', onEffectsListClick);
