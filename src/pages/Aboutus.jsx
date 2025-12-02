import React, { useState, useEffect } from 'react';
import MembersGrid from '../components/about_section/MembersGrid';
import ToggleTabs from '../components/about_section/ToggleTabs';
import '../components/about_section/global.css';
import data from '../components/about_section/data/members.json';

function App(){
  const [active, setActive] = useState('members');
  const [members, setMembers] = useState([]);

  useEffect(()=> {
    setMembers(data);
  }, []);

  const filtered = members.filter(m => {
    if (active === 'members') return m.type === 'member';
    if (active === 'alumni') return m.type === 'alumni';
    return true;
  });

  return (
    <div className="container">
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div style={{fontFamily: 'JetBrains Mono', fontWeight: '900', fontSize: 'inherit'}}>Members & Alumni</div>
        <ToggleTabs active={active} setActive={setActive} />
      </header>

      <MembersGrid members={filtered} />
    </div>
  );
}

export default App;