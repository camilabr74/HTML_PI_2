import React from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";


function HomeEmployee() {
  return (
    <div>

      <h1 className="text-2xl p-4 font-bold text-accent">
        Bem-vindo ao Portal, servidor!
      </h1>

      <section className="w-full flex justify-center py-8">
        <ButtonCTA to="/service-selection">Visualizar Dados</ButtonCTA>
      </section>

      <ServiceList endpoint='https://orlok.pythonanywhere.com/api/v1/janitorial/' />

    </div>

  );
}

export default HomeEmployee;
