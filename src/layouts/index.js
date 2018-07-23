import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

const styles = {
  display: 'grid',
  gridTemplateColumns: '1fr minmax(45ch, 70ch) 1fr',
};

export default ({children}) => (
  <div style={styles}>
    <div/>
    <div>
      <Header/>
      <main>{children()}</main>
      <Footer/>
    </div>
    <div/>
  </div>
);
