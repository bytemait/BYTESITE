import React from 'react';
import MemberCard from './MemberCard';
import styles from './MembersGrid.module.css';

export default function MembersGrid({ members }) {
  return (
    <div className={styles.grid}>
      {members.map(m => (
        <MemberCard key={m.id} member={m} />
      ))}
    </div>
  );
}