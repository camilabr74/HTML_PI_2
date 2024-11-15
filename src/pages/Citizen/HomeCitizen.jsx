import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import ServiceList from "../../components/ServiceList/ServiceList";

const HomeCitizen = () => {
  return (
    <>

      <h1 className="text-2xl p-8 font-bold text-accent">
        Bem-vindo ao Portal, vicentino!
      </h1>

      <section className="w-full flex justify-center py-8">
        <ButtonCTA to="/HTML_PI_2/service-selection">Solicitar Serviço</ButtonCTA>
      </section>

      <section>
        <ServiceList endpoint='https://orlok.pythonanywhere.com/api/v1/citizen/requests' />
      </section>
    </>


  );
};

export default HomeCitizen;
