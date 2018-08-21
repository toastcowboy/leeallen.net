import React from 'react';

import styles from './word.module.css';

import Post from '../components/post';

export default () => (
  <div>
    <Post
      date="July 4th, 2018"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus."
      image={{ altText: 'Post image', src: 'https://source.unsplash.com/random/1370x771' }}
      link="/post"
      title="Sweet blog post title that goes onto two lines"/>
    <Post
      date="June 23rd, 2018"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus."
      image={{ altText: 'Post image', src: 'https://source.unsplash.com/random/1370x771' }}
      link="/post"
      title="This is another post title that just breaks"/>
    <Post
      date="May 4th, 2018"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc tincidunt, dictum risus vitae, interdum augue. Sed mollis arcu feugiat, egestas purus quis, gravida tortor. Sed consequat felis sit amet ligula tempor dapibus id vel lacus."
      image={{ altText: 'Post image', src: 'https://source.unsplash.com/random/1370x771' }}
      link="/post"
      title="Yet another terrible title that goes on"/>
  </div>
);

export const query = graphql`
  query WorkQuery {
    allFile(filter: {id: {regex: "/word/"}, extension: {regex: "/png|jpg|jpeg|gif/"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1370, quality: 80) {
              sizes
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
            datetime
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
