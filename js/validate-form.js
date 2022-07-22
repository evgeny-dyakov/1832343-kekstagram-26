import {uploadForm, hashtagField} from './rendering-form.js';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-error',
}, true);

function validateUploadForm (evt) {
  evt.preventDefault();
  const isValid = pristine.validate();
  // console.log(isValid);
  return isValid;
}

pristine.addValidator(hashtagField, validateCorrectness, 'без спецсимволов в формате #hashtag');
pristine.addValidator(hashtagField, validateEqual, 'не должны повторяться');
pristine.addValidator(hashtagField, validateCount, 'максимум 5');

function validateCorrectness () {
  if (hashtagField.value === '') {
    return true;
  }

  const hashtags = hashtagField.value.trim().split(' ');
  const re = /^#[A-Za-zА-яа-яЁё0-9]{1,19}$/;
  for (let i = 0; i < hashtags.length; i++) {
    if (!re.test(hashtags[i])) {
      return false;
    }
  }
  return true;
}

function validateEqual () {
  const hashtags = hashtagField.value.trim().split(' ');
  for (let i = 0; i < hashtags.length - 1; i++) {
    for (let j = i + 1; j < hashtags.length; j++) {
      if (hashtags[i] === hashtags[j]) {
        return false;
      }
    }
  }
  return true;
}

function validateCount () {
  const hashtags = hashtagField.value.trim().split(' ');
  if (hashtags.length > 5) {
    return false;
  }
  return true;
}

export {validateUploadForm};
