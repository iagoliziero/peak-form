import { useNavigate } from "react-router-dom";

function Thankspage() {
  const navigate = useNavigate()
    return (
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-12 lg: overflow-auto ">
        <div className=" flex flex-col relative justify-center mt-12 gap-8">
          <span className="flex flex-col items-center">
            <img
              className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
              src="src/public/logo.png"
              alt="logo"
            />
          </span>
        </div>
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-4xl leading-relaxed md:text-5xl lg:text-5xl text-whiteMain text-center font-semibold">
              {" "}
              Ótimo! Você deu um <br /> grande passo na <br className="block md:hidden" /> sua jornada.
            </h1>
            <span className="text-center text-2xl md:text-2xl gap-5   text-whiteMain">
              {" "}
              <p>
                {" "}
                Os treinos são essenciais para o <br className="md:block" />crescimento  muscular. <br className="md:hidden" />{" "}
                Registre seus exercícios para garantir <br  /> que está desafiando
                seu corpo <br className="md:hidden" /> da maneira certa.
              </p>{" "}
              <p className="text-center  text-2xl md:text-2xl text-whiteMain mt-10 mb-10">
                {" "}
                Vamos aos detalhes sobre <br className="md:hidden" /> a sua frequência de treino.
              </p>{" "}
            </span>
          </div>
        </div>
        <div className="mb-12 flex flex-row lg:relative mt-8 items-center md:items-center gap-6">
          <button 
          onClick={() => navigate(-1)}
          className="w-[170px] hidden md:block md:w-[220px] h-[60px] border border-yellowMain text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold">
            Voltar
          </button>
          <button 
          onClick={() => navigate(`/atividade`)}
          className="w-[300px] md:visible-false md:w-[220px] h-[60px] bg-yellowMain text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold">
            Continuar
          </button>
        </div>
      </div>
    );
  }
  
  export default Thankspage;