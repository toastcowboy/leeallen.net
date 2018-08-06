import React from 'react';

import styles from './word.module.css';

import Shiitake from 'shiitake';

const Post = props => (
  <div className={[styles.post, 'typography-line-break-half'].join(' ')}>
    <h2 className={[styles.postTitle, 'typography-h1'].join(' ')}>{props.title}</h2>
    <p className="typography-line-break-half typography-small"><a href={props.link}>{props.date}</a></p>
    <img
      className={styles.postImage}
      src={props.image.src}
      width={1370}
      alt={props.image.altText}/>
    <Shiitake
      className={[styles.postExcerpt, 'typography-line-break-none'].join(' ')}
      lines={3}
      tagName="p"
      throttleRate={200}>
      {props.excerpt}
    </Shiitake>
    <p className="typography-small"><a href={props.link}>Read more</a></p>
  </div>
);

export default () => (
  <div>
    <Post
      date="July 4th, 2018"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus."
      image={{ altText: 'Post image', src: 'https://source.unsplash.com/random/1370x771' }}
      link="#"
      title="Sweet blog post title that goes onto two lines"/>
    <Post
      date="June 23rd, 2018"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus."
      image={{ altText: 'Post image', src: 'https://source.unsplash.com/random/1370x771' }}
      link="#"
      title="This is another post title that just breaks"/>
    <Post
      date="May 4th, 2018"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus."
      image={{ altText: 'Post image', src: 'https://source.unsplash.com/random/1370x771' }}
      link="#"
      title="Yet another terrible title that goes on"/>
  </div>
);
