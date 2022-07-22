import {imgPreview} from './scale-photo.js';

const effectsList = document.querySelector('.img-upload__effects');

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  console.log(valueElement.value);
  // imgPreview.style.filter = `grayscale(${valueElement.value})`;
});

function onEffectsListClick (evt) {
  if (evt.target.matches('.effects__radio')) {
    imgPreview.removeAttribute('class');
    imgPreview.classList.add(`effects__preview--${evt.target.id.substring(7)}`);
  }

  if (evt.target.matches('#effect-chrome')) {
    console.log('chrome');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
  }
}

function effectsReset () {
  imgPreview.removeAttribute('class');
}

export {effectsList, onEffectsListClick, effectsReset};
