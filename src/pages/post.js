import React from 'react';

import Post from '../components/post';

export default () => (
  <Post
    date="July 4th, 2018"
    excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus."
    image={{altText: 'Post image', src: 'https://source.unsplash.com/random/1370x771'}}
    link="#"
    title="Sweet blog post title that goes onto two lines"/>
);
