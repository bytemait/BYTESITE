import React from 'react';
import styles from './MemberCard.module.css';
import Badge from './Badge';

export default function MemberCard({ member }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img className={styles.avatar} src={member.avatar} alt={member.name} />
      </div>

      <div className={styles.info}>
        <div>
          <h3 className={styles.name}>{member.name}</h3>
          <p className={styles.role}>{member.role}</p>
        </div>

        <div className={styles.badges}>
          <Badge text={member.year} kind="year" />
          {member.tags.slice(0, 3).map((t, i) => (
            <Badge key={i} text={t} />
          ))}
        </div>
      </div>
    </div>
  );
}