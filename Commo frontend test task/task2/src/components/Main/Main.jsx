import React from 'react';
import styles from './css/StyleMain.module.css';
import Frame1 from './Frame1/Frame1';

export default function Main() {
  return (
    <div className={styles.main}>
      <Frame1 />
    </div>
  );
}
