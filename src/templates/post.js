import Helmet from 'react-helmet';
import React from 'react';

import Post from '../components/post';

export default ({ data }) => {
  const post = data.markdownRemark;
  const slugArray = post.fields.slug.split(`/`);
  const name = slugArray.splice(slugArray.length - 2, 1)[0];

  // Find the image node that has the same file name
  const imageNode = data.allFile.edges.filter(({ node }) => node.name === name);
  const sizes = imageNode[0].node.childImageSharp.sizes;
  const src = imageNode[0].node.childImageSharp.sizes.src;

  const metaInfo = {
    description: post.excerpt,
    image: `http://leeallen.net${src}`,
    siteUrl: `http://leeallen.net${post.fields.slug}`,
    title: `Lee Allen — ${post.frontmatter.title}`,
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
      content: metaInfo.image,
      property: `og:image`,
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
    {
      content: metaInfo.image,
      name: `twitter:image`,
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
      <Post
        date={post.frontmatter.datetime}
        html={post.html}
        image={{ altText: post.frontmatter.image.altText, sizes: sizes }}
        link={post.fields.slug}
        title={post.frontmatter.title}/>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    allFile(filter: {id: {regex: "/word/"}, extension: {regex: "/png|jpg|jpeg|gif/"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1370, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpSizes
            }
          }
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;
