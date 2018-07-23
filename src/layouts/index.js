import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

import styles from './index.module.css';

export default props => (
  <div className={styles.container}>
    <div/>
    <div className={styles.content}>
      <Header pathname={props.location.pathname}/>
      <main>{props.children()}</main>
      <Footer/>
    </div>
    <div/>
  </div>
);
