import {generatePosts} from './generate-posts.js';

const postsCount = 25;
const posts = generatePosts(postsCount);

const thumbnailsList = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const thumbnailsFragment = document.createDocumentFragment();

posts.forEach(({url, likes, comments}) => {
  const thumbnailItem = thumbnailTemplate.cloneNode(true);

  thumbnailItem.querySelector('.picture__img').src = url;
  thumbnailItem.querySelector('.picture__likes').textContent = likes;
  thumbnailItem.querySelector('.picture__comments').textContent = comments.length;

  thumbnailsFragment.appendChild(thumbnailItem);
});

thumbnailsList.appendChild(thumbnailsFragment);


export {posts, thumbnailsList};
