import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import React from 'react';

import Post from '../components/Post';

export default ({ data, location }) => {
  const post = data.allMarkdownRemark.edges[0].node;
  const pathArray = post.frontmatter.path.split(`/`);
  const name = pathArray.splice(pathArray.length - 1, 1)[0];

  // Find the image node that has the same file name
  const imageNode = data.allFile.edges.filter(({ node }) => node.name === name);
  const fluid = imageNode[0].node.childImageSharp.fluid;
  const src = imageNode[0].node.childImageSharp.fluid.src;

  const metaInfo = {
    description: post.excerpt,
    image: `http://leeallen.net${src}`,
    siteUrl: `http://leeallen.net${post.frontmatter.path}`,
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
  const structuredData = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://leeallen.net",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Writing",
        "item": "https://leeallen.net/word",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${post.frontmatter.title}`,
        "item": `http://leeallen.net${post.frontmatter.path}`,
      },
    ],
  });

  return (
    <Layout location={location}>
      <Helmet>
        <title>{metaInfo.title}</title>
        <meta name={`description`} content={metaInfo.description}/>
        {metaOpenGraph.map((meta, index) => <meta key={index} {...meta}/>)}
        {metaTwitter.map((meta, index) => <meta key={index} {...meta}/>)}
        <script type={`application/ld+json`}>{structuredData}</script>
      </Helmet>
      <Post
        date={post.frontmatter.datetime}
        html={post.html}
        image={{ altText: post.frontmatter.image.altText, fluid: fluid }}
        link={post.frontmatter.path}
        title={post.frontmatter.title}/>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allFile(filter: {absolutePath: {regex: "/word/"}, extension: {regex: "/png|jpg|jpeg|gif/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1370, quality: 80, toFormat: JPG) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          name
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {path: {eq: $slug}}}) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fileAbsolutePath
          frontmatter {
            datetime(formatString: "MMM. Do, YYYY")
            image {
              altText
              name
            }
            path
            title
          }
          html
        }
      }
    }
  }
`;
