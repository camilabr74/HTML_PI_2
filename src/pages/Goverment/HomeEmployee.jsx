import React from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';

function HomeEmployee() {
  return (
    <div>
   
      <ServiceList endpoint='https://orlok.pythonanywhere.com/api/v1/janitorial/' />

    </div>
    
  );
}

export default HomeEmployee;
