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

pristine.addValidator(hashtagField, validateHashtags, 'максимум 5 | #hashtags | до 20 символов');

function validateHashtags () {
  if (hashtagField.value === '') {
    return true;
  }

  const hashtags = hashtagField.value.trim().split(' ');
  if (hashtags.length > 5) {
    return false;
  }

  const re = /^#[A-Za-zА-яа-яЁё0-9]{1,19}$/;
  for (let i = 0; i < hashtags.length; i++) {
    if (!re.test(hashtags[i])) {
      return false;
    }
  }

  return true;
}

export {validateUploadForm};
