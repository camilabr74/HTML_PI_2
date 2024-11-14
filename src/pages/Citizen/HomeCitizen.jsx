import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import ServiceList from "../../components/ServiceList/ServiceList";

const HomeCitizen = () => {
  return (
    <>
      <section className="w-full flex justify-center py-8">
        <ButtonCTA to="/HTML_PI_2/service-selection">Solicitar Serviço</ButtonCTA>
      </section>

      <section>
        <h1>
          Minhas solicitações
        </h1>
        <ServiceList endpoint='https://orlok.pythonanywhere.com/api/v1/citizen/requests' />
      </section>
    </>


  );
};

export default HomeCitizen;
