import Link from 'gatsby-link';
import React from 'react';

import logo from '../assets/icons/logo.svg';
import styles from './header.module.css';

const NavItem = props => (
  <li className={[styles.navItem, 'typography-semi-bold', 'typography-small'].join(' ')}>
    <Link className={styles.navLink} to={props.href}>{props.label}</Link>
  </li>
);

export default () => (
  <header className={styles.header}>
    <img className={styles.navLogo} src={logo} width="32" height="32" alt="Logo"/>
    <nav className={styles.nav}>
      <ol className={styles.navList}>
        <NavItem href="/" label="Home"/>
        <NavItem href="/work" label="Work"/>
        <NavItem href="/word" label="Writing"/>
      </ol>
    </nav>
  </header>
);
