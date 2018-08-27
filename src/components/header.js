import Link from 'gatsby-link';
import React from 'react';

import logo from '../assets/icons/logo.svg';
import styles from './header.module.css';

const NavItem = props => {
  const linkClassNames = [];

  linkClassNames.push(styles.navLink);

  if (props.pathname.match(props.pattern)) linkClassNames.push(styles.navLinkActive);

  return (
    <li className={`${styles.navItem} typography-semi-bold typography-small`}>
      <Link className={linkClassNames.join(` `)} to={props.href}>{props.label}</Link>
    </li>
  );
};

export default props => {
  const navItems = [
    {
      href: `/`,
      label: `Home`,
      pattern: /^\/$/,
    },
    {
      href: `/work`,
      label: `Work`,
      pattern: /^\/work/,
    },
    {
      href: `/word`,
      label: `Writing`,
      pattern: /^\/word/,
    },
  ];
  const navLogoClassNames = [styles.navLogo];

  if (props.pathname === `/`) navLogoClassNames.push(styles.navLogoHome);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <Link className={navLogoClassNames.join(` `)} to="/">
          <img
            src={logo}
            width={32}
            height={32}
            alt="Logo"/>
        </Link>
        {props.pathname !== `/` ? (
          <nav className={styles.nav}>
            <ol className={styles.navList}>
              {navItems.map((navItem, index) =>
                <NavItem key={index} {...navItem} pathname={props.pathname}/>)}
            </ol>
          </nav>
        ) : null}
      </div>
    </header>
  );
};
