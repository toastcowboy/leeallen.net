import Img from 'gatsby-image';
import React from 'react';

import styles from './work.module.css';

const Piece = props => (
  <div className={styles.piece}>
    <Img className={styles.pieceImage} sizes={props.sizes} alt={props.image.altText}/>
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

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({node}, index) => {
        // Find the image node that has the same file name
        const imageNode = data.allFile.edges.filter(edge =>
          node.frontmatter.image.name === edge.node.name);

        return (
          <Piece key={index} sizes={imageNode[0].node.childImageSharp.sizes} {...node.frontmatter}>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </Piece>
        )
      })}
    </div>
  );
};

export const query = graphql`
  query WorkQuery {
    allFile(filter: {id: {regex: "/work-pieces/"}, extension: {regex: "/png/"}}) {
      edges {
        node {
          absolutePath
          childImageSharp {
            sizes(maxWidth: 685) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
          name
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Work Piece"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            client
            image {
              altText
              name
            }
            links {
              href
              text
            }
            title
          }
          html
        }
      }
    }
  }
`;
