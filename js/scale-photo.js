const scaleControl = document.querySelector('.img-upload__scale');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

let currentScaleValue = 100;

function onScaleControlClick (evt) {
  if (evt.target.matches('.scale__control--smaller') && currentScaleValue > 25) {
    scaleValue.value = `${currentScaleValue -= 25}%`;
  }
  if (evt.target.matches('.scale__control--bigger') && currentScaleValue < 100) {
    scaleValue.value = `${currentScaleValue += 25}%`;
  }

  imgPreview.style.transform = `scale(${currentScaleValue / 100})`;
}

function scaleReset () {
  currentScaleValue = 100;
  scaleValue.value = '100%';
  imgPreview.removeAttribute('style');
}

export {scaleControl, onScaleControlClick, scaleReset, imgPreview};
