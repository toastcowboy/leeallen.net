import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import React from 'react';

import logoGitHub from '../assets/icons/logo-github.svg';
import logoInstagram from '../assets/icons/logo-instagram.svg';
import logoLastFm from '../assets/icons/logo-lastfm.svg';
import logoLinkedIn from '../assets/icons/logo-linkedin.svg';
import logoTwitter from '../assets/icons/logo-twitter.svg';
import resume from '../downloads/lee-allen-resume.pdf';
import styles from './index.module.css';

const elsewhereLinks = [
  {
    altText: `LinkedIn logo`,
    href: `https://linkedin.com/in/leeericallen`,
    logo: logoLinkedIn,
  },
  {
    altText: `Twitter logo`,
    href: `https://twitter.com/leeericallen`,
    logo: logoTwitter,
  },
  {
    altText: `GitHub logo`,
    href: `https://github.com/leeericallen`,
    logo: logoGitHub,
  },
  {
    altText: `Instagram logo`,
    href: `https://instagram.com/toastcowboy`,
    logo: logoInstagram,
  },
  {
    altText: `last.fm logo`,
    href: `https://last.fm/user/toastcowboy`,
    logo: logoLastFm,
  },
];

const ElsewhereLink = props => (
  <a
    className={styles.elsewhereLink}
    href={props.href}
    rel={`nofollow noopener noreferrer`}
    target={`_blank`}>
    <img className={styles.elsewhereLogo} src={props.logo} alt={props.altText}/>
  </a>
);

export default ({ data, location }) => (
  <Layout location={location}>
    <div className={styles.container}>
      <Img
        alt={`Lee’s headshot`}
        className={styles.headshot}
        fluid={data.file.childImageSharp.fluid}/>
      <h1 className={`${styles.copy} typography-align-center`}>
        I’m Lee, a digital product leader living in Southern California. See my <Link to={`/work`}>work</Link>, read my <Link to={`/word`}>writing</Link>, download my <a href={resume}>resume</a>, or just <a href={`mailto:lee@leeallen.net`}>say hi</a>.
      </h1>
      <div className={styles.elsewhere}>
        {elsewhereLinks.map((link, index) => <ElsewhereLink key={index} {...link}/>)}
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query HomeQuery {
    file(name: {eq: "lee-allen-headshot"}) {
      childImageSharp {
        fluid(maxWidth: 638, quality: 80, toFormat: JPG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
