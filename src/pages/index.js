import Link from 'gatsby-link';
import React from 'react';

import headshot from '../assets/images/lee-allen-headshot.png';
import logoGitHub from '../assets/icons/logo-github.svg';
import logoInstagram from '../assets/icons/logo-instagram.svg';
import logoLinkedIn from '../assets/icons/logo-linkedin.svg';
import logoTwitter from '../assets/icons/logo-twitter.svg';
import resume from '../downloads/lee-allen-resume.pdf';
import styles from './index.module.css';

const elsewhereLinks = [
  {
    altText: 'GitHub logo',
    href: 'https://github.com/leeericallen',
    logo: logoGitHub,
  },
  {
    altText: 'Instagram logo',
    href: 'https://instagram.com/toastcowboy',
    logo: logoInstagram,
  },
  {
    altText: 'LinkedIn logo',
    href: 'https://linkedin.com/in/leeericallen',
    logo: logoLinkedIn,
  },
  {
    altText: 'Twitter logo',
    href: 'https://twitter.com/leeericallen',
    logo: logoTwitter,
  },
];

const ElsewhereLink = props => (
  <a className={styles.elsewhereLink} href={props.href}>
    <img className={styles.elsewhereLogo} src={props.logo} alt={props.altText}/>
  </a>
);

export default () => (
  <div className={styles.container}>
    <img className={styles.headshot} src={headshot} alt="Lee’s headshot"/>
    <h1 className={[styles.copy, 'typography-align-center'].join(' ')}>
      I’m Lee, a digital generalist living in Southern California. See my <Link to="/work">work</Link>, read my <Link to="/word">writing</Link>, download my <a href={resume}>resume</a>, or just <a href="mailto:lee@leeallen.net">say hi</a>.
    </h1>
    <div className={styles.elsewhere}>
      {elsewhereLinks.map((link, index) => (
        <ElsewhereLink
          altText={link.altText}
          href={link.href}
          key={index}
          logo={link.logo}/>
      ))}
    </div>
  </div>
);
