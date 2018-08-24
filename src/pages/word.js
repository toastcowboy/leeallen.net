import React from 'react';

import Post from '../components/post';

export default ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      const fapArray = node.fileAbsolutePath.split('/');
      const name = fapArray.splice(fapArray.length - 2, 1)[0];

      // Find the image node that has the same file name
      const imageNode = data.allFile.edges.filter(({ node }) => node.name === name);
      const sizes = imageNode[0].node.childImageSharp.sizes;

      return (
        <Post
          date={node.frontmatter.datetime}
          excerpt={node.excerpt}
          image={{ altText: 'Post image', sizes: sizes }}
          key={index}
          link="/post"
          title={node.frontmatter.title}/>
      );
    })}
  </div>
);

export const query = graphql`
  query WordQuery {
    allFile(filter: {id: {regex: "/word/"}, extension: {regex: "/png|jpg|jpeg|gif/"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1370, quality: 80) {
              ...GatsbyImageSharpSizes
            }
          }
          name
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Word Post"}}}, sort: {fields: [frontmatter___datetime], order: DESC}) {
      edges {
        node {
          excerpt
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
