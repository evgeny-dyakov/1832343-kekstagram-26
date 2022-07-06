const imageUploadForm = document.querySelector('.img-upload__form');

const imageUploadControl = imageUploadForm.querySelector('.img-upload__input');
const imageEditingForm = imageUploadForm.querySelector('.img-upload__overlay');
const imageEditingFormCancel= imageUploadForm.querySelector('.img-upload__cancel');

const commentField = imageUploadForm.querySelector('.text__description');
const hashtagField = imageUploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(imageUploadForm);

imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let isValid;

  if (validateHashtags() && pristine.validate()) {
    isValid = true;
  } else {
    isValid = false;
  }
  console.log(isValid ? 'да' : 'не');
});

// валидация хэштегов

const re = /^#[A-Za-zА-яа-яЁё0-9]{1,19}$/;

function validateHashtags () {
  const hashtags = hashtagField.value.split(' ');
  console.log(hashtags);
  if (hashtags.length > 5) {
    console.log('максимум 5');
    return false;
  }
  hashtags.forEach((element) => {
    if(!re.test(element)) {
      console.log(`символы`);
      return false;
    } else {
      return true;
    }
  });
}

hashtagField.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 32) {
    validateHashtags();
  }
});

hashtagField.addEventListener('change', () => {
  validateHashtags();
});

// валидация хэштегов

function onFieldFocus () {
  document.removeEventListener('keydown', onImageEditingFormCancelEscDowm);
}

function onFieldBlur () {
  document.addEventListener('keydown', onImageEditingFormCancelEscDowm);
}

function onImageEditingFormCancelClick () {
  closeEditingForm();
}

function onImageEditingFormCancelEscDowm (evt) {
  if (evt.keyCode === 27) {
    closeEditingForm();
  }
}

function onFileUploadControlChange () {
  imageEditingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  imageEditingFormCancel.addEventListener('click', onImageEditingFormCancelClick);
  document.addEventListener('keydown', onImageEditingFormCancelEscDowm);

  commentField.addEventListener('focus', onFieldFocus);
  commentField.addEventListener('blur', onFieldBlur);
  hashtagField.addEventListener('focus', onFieldFocus);
  hashtagField.addEventListener('blur', onFieldBlur);

  imageUploadControl.removeEventListener('change', onFileUploadControlChange);
}

function closeEditingForm () {
  imageEditingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imageUploadControl.addEventListener('change', onFileUploadControlChange);

  imageEditingFormCancel.removeEventListener('click', onImageEditingFormCancelClick);
  document.removeEventListener('keydown', onImageEditingFormCancelEscDowm);

  commentField.removeEventListener('focus', onFieldFocus);
  commentField.removeEventListener('blur', onFieldBlur);
  hashtagField.removeEventListener('focus', onFieldFocus);
  hashtagField.removeEventListener('blur', onFieldBlur);
}

imageUploadControl.addEventListener('change', onFileUploadControlChange);
