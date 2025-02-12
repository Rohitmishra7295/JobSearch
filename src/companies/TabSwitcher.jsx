import React, { useState } from 'react';
import AboutCard from './AboutCard';
import EmployeeCard from './EmployeeCard';
import InfoSection from './InfoSection';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
        <button 
          style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }} 
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }} 
          onClick={() => setActiveTab('info')}
        >
          Info
        </button>
        <button 
          style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer' }} 
          onClick={() => setActiveTab('employee')}
        >
          Employee
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeTab === 'about' && <AboutCard />}
        {activeTab === 'info' && <InfoSection />}
        {activeTab === 'employee' && <EmployeeCard />}
      </div>
    </div>
  );
};

export default TabSwitcher;
