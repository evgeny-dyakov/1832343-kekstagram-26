import {posts, thumbnailsList} from './rendering-thumbnails.js';

const fullPhoto = document.querySelector('.big-picture');
const closeButton = fullPhoto.querySelector('.big-picture__cancel');
const commentsList = fullPhoto.querySelector('.social__comments');

const thumbnails = thumbnailsList.querySelectorAll('.picture');

function renderingFullPhoto (evt) {
  const thumbnail = evt.target.closest('.picture');

  if (thumbnail) {
    for (let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i] === thumbnail) {
        fullPhoto.classList.remove('hidden');

        fullPhoto.querySelector('.big-picture__img img').src = posts[i].url;
        fullPhoto.querySelector('.likes-count').textContent = posts[i].likes;
        fullPhoto.querySelector('.comments-count').textContent = posts[i].comments.length;
        fullPhoto.querySelector('.social__caption').textContent = posts[i].description;

        commentsList.innerHTML = '';

        posts[i].comments.forEach((element) => {
          commentsList.innerHTML +=
            `<li class="social__comment">
              <img class="social__picture" src="${element.avatar}" alt="Аватар комментатора фотографии" width="35" height="35">
              <p class="social__text">${element.message}</p>
            </li>`;
        });

        document.body.classList.add('modal-open');

        fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
        fullPhoto.querySelector('.comments-loader').classList.add('hidden');
      }
    }

    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onFullPhotoEscDown);

    thumbnailsList.removeEventListener('click', renderingFullPhoto);
  }
}

function onCloseButtonClick () {
  closeFullPhoto();
}

function onFullPhotoEscDown (evt) {
  if (evt.keyCode === 27) {
    closeFullPhoto();
  }
}

function closeFullPhoto () {
  fullPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');

  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onFullPhotoEscDown);

  thumbnailsList.addEventListener('click', renderingFullPhoto);
}

thumbnailsList.addEventListener('click', renderingFullPhoto);
