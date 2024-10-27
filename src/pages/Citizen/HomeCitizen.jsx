import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import MyRequestsTable from "../../components/MyRequests/MyRequests";

const HomeCitizen = () => {
  return (
    <>
      <section>
        <h1>
          Bem-vindo, Camis
        </h1>
      </section>

      <section className="w-full flex justify-center py-8">
        <ButtonCTA to="/service-selection">Solicitar Serviço</ButtonCTA>
      </section>

      <section>
        <h1>
          Minhas solicitações
        </h1>
        <MyRequestsTable></MyRequestsTable>
      </section>
    </>

    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //   <h1 className="text-4xl font-bold mb-6">Bem-vindo à página Home Citizen</h1>
    //   <Button>Clique aqui</Button>
    // </div>

  );
};

export default HomeCitizen;
