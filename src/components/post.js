import Link from 'gatsby-link';
import React from 'react';

import styles from './post.module.css';

import Shiitake from 'shiitake';

const HeroImage = props => (
  <img
    className={props.className}
    src={props.src}
    width={1370}
    alt={props.alt}/>
);

export default props => (
  <div className={[styles.post, 'typography-line-break-half'].join(' ')}>
    <h2 className={[styles.postTitle, 'typography-h1'].join(' ')}>{props.title}</h2>
    <p className="typography-line-break-half typography-small">
      <Link to={props.link}>{props.date}</Link>
    </p>
    {props.excerpt ? (
      <Link to={props.link}>
        <HeroImage
          className={styles.postImage}
          src={props.image.src}
          width={1370}
          alt={props.image.altText}/>
      </Link>
    ) : (
      <HeroImage
        className={styles.postImage}
        src={props.image.src}
        width={1370}
        alt={props.image.altText}/>
    )}
    {props.excerpt ? (
      <Shiitake
        className="typography-line-break-none"
        lines={3}
        tagName="p"
        throttleRate={200}>
        {props.excerpt}
      </Shiitake>
    ) : null}
    {props.body ? (
      props.body.map((body, index) => <p key={index}>{body}</p> )
    ) : null}
    {props.excerpt ? (
      <p className="typography-small"><Link to={props.link}>Read more</Link></p>
    ) : null}
  </div>
);
