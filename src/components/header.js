import Link from 'gatsby-link';
import React from 'react';

import logo from '../assets/icons/logo.svg';
import styles from './header.module.css';

const NavItem = props => {
  const linkClassNames = [];

  linkClassNames.push(styles.navLink);

  if (props.href === props.pathname) linkClassNames.push(styles.navLinkActive);

  return (
    <li className={[styles.navItem, 'typography-semi-bold', 'typography-small'].join(' ')}>
      <Link className={linkClassNames.join(' ')} to={props.href}>{props.label}</Link>
    </li>
  );
};

export default props => {
  const navItems = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/work',
      label: 'Work'
    },
    {
      href: '/word',
      label: 'Writing'
    },
  ];
  const navLogoClassNames = [styles.navLogo];

  if (props.pathname === '/') navLogoClassNames.push(styles.navLogoHome);

  return (
    <header className={styles.header}>
      <Link className={navLogoClassNames.join(' ')} to="/">
        <img
          src={logo}
          width={32}
          height={32}
          alt="Logo"/>
      </Link>
      {props.pathname !== '/' ? (
        <nav className={styles.nav}>
          <ol className={styles.navList}>
            {navItems.map((navItem, index) =>
              <NavItem
                href={navItem.href}
                key={index}
                label={navItem.label}
                pathname={props.pathname}/>)}
          </ol>
        </nav>
      ) : null}
    </header>
  );
};
