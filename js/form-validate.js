const uploadForm = document.querySelector('.img-upload__form');

const uploadControl = uploadForm.querySelector('.img-upload__input');
const editingForm = uploadForm.querySelector('.img-upload__overlay');
const editingFormCancel= uploadForm.querySelector('.img-upload__cancel');
const hashtagField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-error',
}, false);

function validateHashtags () {
  if (hashtagField.value === '') {
    return true;
  }

  const hashtags = hashtagField.value.split(' ');
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

pristine.addValidator(hashtagField, validateHashtags, 'максимум 5 | #hashtags | до 20 символов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  console.log(isValid);
});

// валидацию поставить, валидацию снять

uploadControl.addEventListener('change', onUploadControlChange);

function onUploadControlChange () {
  editingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  editingFormCancel.addEventListener('click', onEditingFormCancelClick);
  document.addEventListener('keydown', onEditingFormCancelEscDowm);

  commentField.addEventListener('keydown', onFieldEscDown);
  hashtagField.addEventListener('keydown', onFieldEscDown);

  commentField.textContent = '';

  uploadControl.removeEventListener('change', onUploadControlChange);
}

function closeEditingForm () {
  editingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploadControl.value = null;

  uploadControl.addEventListener('change', onUploadControlChange);

  editingFormCancel.removeEventListener('click', onEditingFormCancelClick);
  document.removeEventListener('keydown', onEditingFormCancelEscDowm);

  commentField.removeEventListener('keydown', onFieldEscDown);
  hashtagField.removeEventListener('keydown', onFieldEscDown);
}

function onEditingFormCancelClick () {
  closeEditingForm();
}

function onEditingFormCancelEscDowm (evt) {
  if (evt.key === 'Escape') {
    closeEditingForm();
  }
}

function onFieldEscDown (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
}
