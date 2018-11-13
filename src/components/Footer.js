import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import styles from './Footer.module.scss';

export default props => {
  const footerClassNames = [
    styles.footer,
    `typography-small`,
  ];

  if (props.pathname === `/`) footerClassNames.push(styles.footerHome);

  return (
    <footer className={styles.footerWrapper}>
      <div className={footerClassNames.join(` `)}>
        Built using <OutboundLink href="https://gatsbyjs.org" rel="nofollow noopener noreferrer" target="_blank">Gatsby</OutboundLink> • View source on <OutboundLink href="https://github.com/leeericallen/leeallen.net" rel="nofollow noopener noreferrer" target="_blank">GitHub</OutboundLink>
      </div>
    </footer>
  );
}
