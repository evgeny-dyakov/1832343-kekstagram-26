import {validateUploadForm} from './validate-form.js';
import {scaleControl, onScaleControlClick, scaleReset} from './scale-photo.js';
import {effectsList, onEffectsListClick, effectsReset} from './effect-overlay.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadControl = uploadForm.querySelector('.img-upload__input');
const editingForm = uploadForm.querySelector('.img-upload__overlay');
const editingFormCancel= uploadForm.querySelector('.img-upload__cancel');

const hashtagField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');

uploadControl.addEventListener('change', onUploadControlChange);

function onUploadControlChange () {
  editingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  editingFormCancel.addEventListener('click', onEditingFormCancelClick);
  document.addEventListener('keydown', onEditingFormCancelEscDowm);
  commentField.addEventListener('keydown', onFieldEscDown);
  hashtagField.addEventListener('keydown', onFieldEscDown);
  uploadForm.addEventListener('submit', validateUploadForm);
  scaleControl.addEventListener('click', onScaleControlClick);
  effectsList.addEventListener('click', onEffectsListClick);

  commentField.textContent = '';

  uploadControl.removeEventListener('change', onUploadControlChange);
}

function closeEditingForm () {
  editingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  editingFormCancel.removeEventListener('click', onEditingFormCancelClick);
  document.removeEventListener('keydown', onEditingFormCancelEscDowm);
  commentField.removeEventListener('keydown', onFieldEscDown);
  hashtagField.removeEventListener('keydown', onFieldEscDown);
  uploadForm.removeEventListener('submit', validateUploadForm);
  scaleControl.removeEventListener('click', onScaleControlClick);
  scaleReset();
  effectsList.removeEventListener('click', onEffectsListClick);
  effectsReset();

  uploadControl.value = null;

  uploadControl.addEventListener('change', onUploadControlChange);
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

export {uploadForm, hashtagField};
