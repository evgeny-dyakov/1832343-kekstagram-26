import {posts, thumbnailsList} from './rendering-thumbnails.js';

const fullPhoto = document.querySelector('.big-picture');
const fullPhotoCancel = fullPhoto.querySelector('.big-picture__cancel');
const fullPhotoComments = fullPhoto.querySelector('.social__comments');

const thumbnails = Array.from(thumbnailsList.querySelectorAll('.picture'));

thumbnailsList.addEventListener('click', renderingFullPhoto);

function renderingFullPhoto (evt) {
  const thumbnail = evt.target.closest('.picture');

  if (thumbnail) {
    thumbnail.blur();

    updateFullPhoto (thumbnails.findIndex((element) => element === thumbnail));
    openFullPhoto();
  }
}

function updateFullPhoto (index) {
  fullPhoto.querySelector('.big-picture__img img').src = posts[index].url;
  fullPhoto.querySelector('.likes-count').textContent = posts[index].likes;
  fullPhoto.querySelector('.comments-count').textContent = posts[index].comments.length;
  fullPhoto.querySelector('.social__caption').textContent = posts[index].description;

  updateComments(index);
}

function updateComments (index) {
  const commentsFragment = document.createDocumentFragment();
  const commentTemplate = fullPhotoComments.querySelector('.social__comment');

  posts[index].comments.forEach(({avatar, message}) => {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__text').textContent = message;
    commentsFragment.appendChild(comment);
  });

  fullPhotoComments.innerHTML = '';
  fullPhotoComments.appendChild(commentsFragment);
}

function openFullPhoto () {
  fullPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fullPhotoCancel.addEventListener('click', onFullPhotoCancelClick);
  document.addEventListener('keydown', onFullPhotoEscDown);
  thumbnailsList.removeEventListener('click', renderingFullPhoto);
}

function closeFullPhoto () {
  fullPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  fullPhotoCancel.removeEventListener('click', onFullPhotoCancelClick);
  document.removeEventListener('keydown', onFullPhotoEscDown);
  thumbnailsList.addEventListener('click', renderingFullPhoto);
}

function onFullPhotoCancelClick () {
  closeFullPhoto();
}

function onFullPhotoEscDown (evt) {
  if (evt.key === 'Escape') {
    closeFullPhoto();
  }
}
