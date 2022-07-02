import {generatePosts} from './generate-posts.js';

const postsCount = 25;
const posts = generatePosts(postsCount);

const thumbnailsList = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

posts.forEach((post) => {
  const thumbnailItem = thumbnailTemplate.cloneNode(true);

  thumbnailItem.querySelector('.picture__img').src = post.url;
  thumbnailItem.querySelector('.picture__likes').textContent = post.likes;
  thumbnailItem.querySelector('.picture__comments').textContent = post.comments.length;

  thumbnailsList.appendChild(thumbnailItem);
});

export {posts, thumbnailsList};
