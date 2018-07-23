import Link from 'gatsby-link';
import React from 'react';

import logo from '../assets/icons/logo.svg';
import styles from './header.module.css';

const NavItem = props => {
  const linkClassNames = [];

  linkClassNames.push(styles.navLink);

  if (props.href === props.pathname) {
    linkClassNames.push(styles.navLinkActive);
  }

  return (
    <li className={[styles.navItem, 'typography-semi-bold', 'typography-small'].join(' ')}>
      <Link className={linkClassNames.join(' ')} to={props.href}>{props.label}</Link>
    </li>
  );
};

export default props => (
  <header className={styles.header}>
    <img className={styles.navLogo} src={logo} width="32" height="32" alt="Logo"/>
    <nav className={styles.nav}>
      <ol className={styles.navList}>
        <NavItem href="/" label="Home" pathname={props.pathname}/>
        <NavItem href="/work" label="Work" pathname={props.pathname}/>
        <NavItem href="/word" label="Writing" pathname={props.pathname}/>
      </ol>
    </nav>
  </header>
);
