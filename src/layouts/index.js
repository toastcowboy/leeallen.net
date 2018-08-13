import React, { Component } from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

import styles from './index.module.css';

export default class extends Component {
  constructor(props) {
    super(props);

    // Create a callback ref for the content element
    this.content = null;
    this.setContentRef = element => { this.content = element; };

    // Bind event handlers
    this.handleResize = this.handleResize.bind(this);

    /**
     * Set the minHeight dynamically to workaround mobile sizing issues and keep the footer pinned
     * to the bottom of the viewport
     */
    this.setContentHeight = () => {
      if (this.content) this.content.style.minHeight = `${window.innerHeight}px`;
    };
  }

  componentDidMount() {
    this.setContentHeight();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(event) {
    this.setContentHeight();
  }

  render() {
    return (
      <div className={styles.container}>
        <div/>
        <div className={styles.content} ref={this.setContentRef}>
          <Header pathname={this.props.location.pathname}/>
          <main>{this.props.children()}</main>
          <Footer/>
        </div>
        <div/>
      </div>
    );
  }
}
