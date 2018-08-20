import React from 'react';

import styles from './footer.module.css';

export default () => (
  <footer className={styles.footerWrapper}>
    <div className={[styles.footer, 'typography-small'].join(' ')}>
      © 2018 Lee Allen. All rights reserved.
    </div>
  </footer>
);
