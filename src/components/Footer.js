import React from 'react';

import styles from './Footer.module.css';

export default props => {
  const footerClassNames = [
    styles.footer,
    `typography-small`,
  ];

  if (props.pathname === `/`) footerClassNames.push(styles.footerHome);

  return (
    <footer className={styles.footerWrapper}>
      <div className={footerClassNames.join(` `)}>
        © 2018 Lee Allen. All rights reserved.
      </div>
    </footer>
  );
}
