import React from 'react';
import styles from './Badge.module.css';

export default function Badge({ text, kind }) {
  return (
    <span className={`${styles.badge} ${kind === 'year' ? styles.year : ''}`}>
      {text}
    </span>
  );
}