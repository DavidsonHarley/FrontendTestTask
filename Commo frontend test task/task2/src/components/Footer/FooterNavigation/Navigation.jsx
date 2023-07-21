import React from 'react';
import styles from './css/StyleNavition.module.css';

const menuItems = [
  {
    name: 'About',
  },
  {
    name: 'Blog',
  },
  {
    name: 'Shop',
  },
  {
    name: 'Contact Us',
  },
];

const otherPages = [
  {
    name: 'Styleguide',
  },
  {
    name: 'Changelog',
  },
  {
    name: 'Licenses',
  },
  {
    name: 'Team',
  },
];

export default function Navigation() {
  return (
    <>
      <div className={styles.itemsMenu}>
        <div className={styles.title}>
          Menu Items
        </div>
        {menuItems.map((el) => <a className={styles.link} href="/">{el.name}</a>)}
      </div>
      <div className={styles.itemsMenu}>
        <div className={styles.title}>
          Other Pages
        </div>
        {otherPages.map((el) => <a className={styles.link} href="/">{el.name}</a>)}
      </div>
    </>

  );
}
