import Link from 'gatsby-link';
import React from 'react';

import styles from './404.module.css';

export default () => (
  <div className={styles.container}>
    <h1>Page not found</h1>
    <p>Sorry, the page you requested could not be found. Please return to the <Link to={`/`}>homepage</Link>.</p>
  </div>
);
