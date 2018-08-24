import React from 'react';

import Post from '../components/post';

export default ({ data }) => {
  const post = data.markdownRemark;
  const slugArray = post.fields.slug.split(`/`);
  const name = slugArray.splice(slugArray.length - 2, 1)[0];

  // Find the image node that has the same file name
  const imageNode = data.allFile.edges.filter(({ node }) => node.name === name);
  const sizes = imageNode[0].node.childImageSharp.sizes;

  return (
    <Post
      date={post.frontmatter.datetime}
      html={post.html}
      image={{ altText: post.frontmatter.image.altText, sizes: sizes }}
      link={post.fields.slug}
      title={post.frontmatter.title}/>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;
