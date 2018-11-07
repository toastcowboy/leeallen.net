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
        Built using <a href="https://gatsbyjs.org" rel="nofollow noopener noreferrer" target="_blank">Gatsby</a> • View source on <a
        href="https://github.com/leeericallen/leeallen.net" rel="nofollow noopener noreferrer" target="_blank">GitHub</a>
      </div>
    </footer>
  );
}
