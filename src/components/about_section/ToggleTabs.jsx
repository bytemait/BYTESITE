import React from 'react';
import styles from './ToggleTabs.module.css';

export default function ToggleTabs({ active, setActive }) {
  return (
    <div className={styles.wrap}>
      <button className={`${styles.tab} ${active === 'members' ? styles.active : ''}`} onClick={()=>setActive('members')}>Members</button>
      <button className={`${styles.tab} ${active === 'alumni' ? styles.active : ''}`} onClick={()=>setActive('alumni')}>Alumni</button>
    </div>
  );
}