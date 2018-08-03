import React from "react";

import styles from './work.module.css';

const Piece = props => (
  <div className={styles.piece}>
    <img
      className={styles.pieceImage}
      src={props.image.src}
      width={1370}
      alt={props.image.altText}/>
    <h2 className={[styles.pieceTitle, 'typography-h1'].join(' ')}>{props.title}</h2>
    {props.links ? (
      <ul className={styles.pieceLinks}>{props.links.map((link, index) =>
        <li className="typography-small" key={index}><a href={link.href}>{link.text}</a></li>)}</ul>
    ) : null}
    {props.client ? (
      <p className={[styles.pieceClient, 'typography-small'].join(' ')}>{props.client}</p>
    ) : null}
    {props.description.map((description, index) =>
      <p className={styles.pieceDescription} key={index}>{description}</p> )}
  </div>
);

export default () => (
  <div>
    <Piece
      client="PogoTec, Inc."
      description={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus.',
      ]}
      image={{ altText: 'Screenshot', src: 'https://source.unsplash.com/random/1370x771' }}
      links={[
        { href: 'http://pogotec.com', text: 'Live site' },
        { href: '#', text: 'Archived site' },
      ]}
      title="PogoTec"/>
    <Piece
      client="PogoTec, Inc."
      description={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus.',
      ]}
      image={{ altText: 'Screenshot', src: 'https://source.unsplash.com/random/1370x771' }}
      links={[
        { href: 'http://pogotec.com', text: 'Live site' },
        { href: '#', text: 'Archived site' },
      ]}
      title="PogoTec"/>
    <Piece
      client="PogoTec, Inc."
      description={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus.',
      ]}
      image={{ altText: 'Screenshot', src: 'https://source.unsplash.com/random/1370x771' }}
      title="PogoTec"/>
  </div>
);
