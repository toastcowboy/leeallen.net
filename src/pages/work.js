import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import React from 'react';

import styles from './work.module.css';

const Piece = props => (
  <div className={styles.piece}>
    <h2 className={`${styles.pieceTitle} typography-h1`}>{props.title}</h2>
    {props.links ? (
      <ul className={styles.pieceLinks}>
        {props.links.map((link, index) =>
          <li className={`typography-small`} key={index}>
            <a href={link.href} rel={`nofollow noopener noreferrer`} target={`_blank`}>{link.text}</a>
          </li>
        )}
      </ul>
    ) : null}
    {props.client ? (
      <p className={`${styles.pieceClient} typography-small`}>{props.client}</p>
    ) : null}
    <Img className={styles.pieceImage} sizes={props.sizes} alt={props.image.altText}/>
    {props.children}
  </div>
);

export default ({ data }) => {
  const metaInfo = {
    description: `A selection of my best work`,
    siteUrl: `http://leeallen.net/work`,
    title: `Lee Allen — Work`,
  };
  const metaOpenGraph = [
    {
      content: metaInfo.siteUrl,
      property: `og:url`,
    },
    {
      content: metaInfo.title,
      property: `og:title`,
    },
    {
      content: metaInfo.description,
      property: `og:description`,
    },
  ];
  const metaTwitter = [
    {
      content: metaInfo.siteUrl,
      name: `twitter:url`,
    },
    {
      content: metaInfo.title,
      name: `twitter:title`,
    },
    {
      content: metaInfo.description,
      name: `twitter:description`,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>{metaInfo.title}</title>
        <meta name={`description`} content={metaInfo.description}/>
        {metaOpenGraph.map((meta, index) => <meta key={index} {...meta}/>)}
        {metaTwitter.map((meta, index) => <meta key={index} {...meta}/>)}
      </Helmet>
      {data.allMarkdownRemark.edges.map(({node}, index) => {
        // Find the image node that has the same file name
        const imageNode = data.allFile.edges.filter(edge =>
          node.frontmatter.image.name === edge.node.name);
        const sizes = imageNode[0].node.childImageSharp.sizes;

        return (
          <Piece key={index} sizes={sizes} {...node.frontmatter}>
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
          childImageSharp {
            # Comment
            sizes(maxWidth: 1370, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpSizes
            }
          }
          name
        }
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "Work Piece"}}},
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
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
