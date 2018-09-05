import Img from 'gatsby-image';
import Link from 'gatsby-link';
import React from 'react';

import styles from './post.module.css';

import Shiitake from 'shiitake';

const HeroImage = props => (
  <Img className={props.className} sizes={props.sizes} alt={props.altText}/>
);

export default props => {
  const imageProps = {
    alt: props.image.altText,
    className: styles.postImage,
    sizes: props.image.sizes,
  };

  return (
    <div className={`${styles.post} typography-line-break-half`}>
      <h2 className={`${styles.postTitle} typography-h1`}>{props.title}</h2>
      <p className={`typography-line-break-half typography-small`}>
        <Link to={props.link}>{props.date}</Link>
      </p>
      {props.excerpt ? (
        <Link to={props.link}><HeroImage {...imageProps}/></Link>
      ) : (
        <HeroImage {...imageProps}/>
      )}
      {props.excerpt ? (
        <Shiitake
          className={`typography-line-break-none`}
          lines={3}
          tagName={`p`}
          throttleRate={200}>
          {props.excerpt}
        </Shiitake>
      ) : null}
      {props.html ? (
        <div dangerouslySetInnerHTML={{ __html: props.html }}/>
      ) : null}
      {props.excerpt ? (
        <p className={`typography-small`}><Link to={props.link}>Read more</Link></p>
      ) : (
        <p className={`typography-small`}><Link to={`/word`}>Back to Writing</Link></p>
      )}
    </div>
  );
};