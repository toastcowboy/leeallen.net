import Layout from '../components/Layout';
import { Link } from 'gatsby';
import React from 'react';

import styles from './404.module.css';

export default props => (
  <Layout location={props.location}>
    <div className={styles.container}>
      <h1>Page not found</h1>
      <p>Sorry, the page you requested could not be found. Please return to the <Link to={`/`}>homepage</Link>.</p>
    </div>
  </Layout>
);
