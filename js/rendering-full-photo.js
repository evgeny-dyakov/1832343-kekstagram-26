import {posts, thumbnailsList} from './rendering-thumbnails.js';

const fullPhoto = document.querySelector('.big-picture');
const closeButton = fullPhoto.querySelector('.big-picture__cancel');
const commentsList = fullPhoto.querySelector('.social__comments');

const thumbnails = thumbnailsList.querySelectorAll('.picture');

function removePreviousComments () {
  const previousСomments = commentsList.children;
  for (let i = previousСomments.length - 1; i >= 0; i--) {
    previousСomments[i].remove();
  }
}

function addActualComments (post) {
  post.comments.forEach((element) => {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');

    const userAvatar = document.createElement('img');
    userAvatar.classList.add('social__picture');
    userAvatar.src = element.avatar;
    userAvatar.alt = 'Аватар комментатора фотографии';
    userAvatar.width = '35';
    userAvatar.height = '35';

    const userMessage = document.createElement('p');
    userMessage.classList.add('social__text');
    userMessage.textContent = element.message;

    comment.appendChild(userAvatar);
    comment.appendChild(userMessage);
    commentsList.appendChild(comment);
  });
}

function renderingFullPhoto (thumbnail, post) {
  thumbnail.addEventListener('click', () => {
    fullPhoto.classList.remove('hidden');

    fullPhoto.querySelector('.big-picture__img img').src = post.url;
    fullPhoto.querySelector('.likes-count').textContent = post.likes;
    fullPhoto.querySelector('.comments-count').textContent = post.comments.length;
    fullPhoto.querySelector('.social__caption').textContent = post.description;
    removePreviousComments();
    addActualComments(post);

    document.body.classList.add('modal-open');

    fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
    fullPhoto.querySelector('.comments-loader').classList.add('hidden');
  });
}

for (let i = 0; i < thumbnails.length; i++) {
  renderingFullPhoto(thumbnails[i], posts[i]);
}

closeButton.addEventListener('click', () => {
  fullPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    fullPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});

