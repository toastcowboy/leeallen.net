import React from 'react';

import styles from './post.module.css';

import Shiitake from 'shiitake';

export default props => (
  <div className={[styles.post, 'typography-line-break-half'].join(' ')}>
    <h2 className={[styles.postTitle, 'typography-h1'].join(' ')}>{props.title}</h2>
    <p className="typography-line-break-half typography-small"><a href={props.link}>{props.date}</a></p>
    <img
      className={styles.postImage}
      src={props.image.src}
      width={1370}
      alt={props.image.altText}/>
    <Shiitake
      className="typography-line-break-none"
      lines={3}
      tagName="p"
      throttleRate={200}>
      {props.excerpt}
    </Shiitake>
    <p className="typography-small"><a href={props.link}>Read more</a></p>
  </div>
);
