import React from 'react';

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
      <ul className={styles.pieceLinks}>
        {props.links.map((link, index) =>
          <li className="typography-small" key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        )}
      </ul>
    ) : null}
    {props.client ? (
      <p className={[styles.pieceClient, 'typography-small'].join(' ')}>{props.client}</p>
    ) : null}
    {props.children}
  </div>
);

export default ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({node}, index) => {
      return (
        <Piece key={index} {...node.frontmatter}>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </Piece>
      )
    })}
  </div>
);

export const query = graphql`
  query WorkQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            client
            image {
              altText
              src
            }
            links {
              href
              text
            }
            title
          }
        }
      }
    }
  }
`;
