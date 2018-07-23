import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

import styles from './index.module.css';

export default ({children}) => (
  <div className={styles.container}>
    <div/>
    <div>
      <Header/>
      <main>{children()}</main>
      <Footer/>
    </div>
    <div/>
  </div>
);
