import React from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';

function HomeEmployee() {
  return (
    <div>

      <h1 className="text-2xl p-4 font-bold text-accent">
        Bem-vindo ao Portal, servidor!
      </h1>

      <ServiceList endpoint='https://orlok.pythonanywhere.com/api/v1/janitorial/' />

    </div>

  );
}

export default HomeEmployee;
