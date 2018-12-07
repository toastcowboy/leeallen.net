import { Link } from 'gatsby';
import React from 'react';

import logo from '../assets/icons/logo.svg';
import resume from '../downloads/lee-allen-resume.pdf';
import styles from './Header.module.scss';

const NavItem = props => {
  const itemClassNames = [
    styles.navItem,
    `typography-semi-bold`,
    `typography-small`,
  ];

  if (props.pathname.match(props.pattern)) itemClassNames.push(styles.navItemActive);

  return (
    <li className={itemClassNames.join(` `)}>
      <Link className={styles.navLink} to={props.href}>{props.label}</Link>
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
  ];
  const navLogoClassNames = [styles.navLogo];

  if (props.pathname === `/`) navLogoClassNames.push(styles.navLogoHome);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <Link className={navLogoClassNames.join(` `)} to={`/`}>
          <img
            src={logo}
            width={32}
            height={32}
            alt={`Logo`}/>
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
