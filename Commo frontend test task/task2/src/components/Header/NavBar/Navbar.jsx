import React from 'react';
import styles from './css/StyleNavbar.module.css';

const navigation = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },

  {
    name: 'Team',
  },

  {
    name: 'Shop',
  },

  {
    name: 'Pages',
  },

];

export default function Navbar() {
  return (
    <div className={styles.navBar}>
      {
        navigation.map((el) => <a key={el.name} className={styles.link} href="/">{el.name}</a>)
      }
    </div>
  );
}
