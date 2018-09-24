import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import React from 'react';

import Post from '../components/Post';

export default ({ data, location }) => {
  const metaInfo = {
    description: `Assorted word droppings from Lee`,
    siteUrl: `http://leeallen.net/word`,
    title: `Lee Allen — Writing`,
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
    <Layout location={location}>
      <Helmet>
        <title>{metaInfo.title}</title>
        <meta name="description" content={metaInfo.description}/>
        {metaOpenGraph.map((meta, index) => <meta key={index} {...meta}/>)}
        {metaTwitter.map((meta, index) => <meta key={index} {...meta}/>)}
      </Helmet>
      {data.allMarkdownRemark.edges.map(({ node }, index) => {
        const fapArray = node.fileAbsolutePath.split(`/`);
        const name = fapArray.splice(fapArray.length - 2, 1)[0];

        // Find the image node that has the same file name
        const imageNode = data.allFile.edges.filter(({ node }) => node.name === name);
        const fluid = imageNode[0].node.childImageSharp.fluid;

        return (
          <Post
            date={node.frontmatter.datetime}
            excerpt={node.excerpt}
            image={{ altText: node.frontmatter.image.altText, fluid: fluid }}
            key={index}
            link={node.fields.slug}
            title={node.frontmatter.title}/>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "/word/"}, extension: {regex: "/png|jpg|jpeg|gif/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1370, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          name
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Word Post"}}}, sort: {fields: [frontmatter___datetime], order: DESC}) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          fileAbsolutePath
          frontmatter {
            datetime(formatString: "MMM. Do, YYYY")
            image {
              altText
              name
            }
            title
          }
          html
        }
      }
    }
  }
`;
