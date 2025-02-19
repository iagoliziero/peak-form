function Thankspage() {
  return (
    <div className="h-screen  bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-hidden ">
      <div className=" flex flex-col  relative justify-center mt-44 gap-8">
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
            Ótimo! Você deu um grande <br /> passo na sua jornada.
          </h1>
          <span className="text-center text-2xl md:text-2xl gap-5   text-whiteMain">
            {" "}
            <p>
              {" "}
              Os treinos são essenciais para o crescimento muscular. <br />{" "}
              Registre seus exercícios para garantir que está <br /> desafiando
              seu corpo da maneira certa.
            </p>{" "}
            <p className="text-center  text-2xl md:text-2xl text-whiteMain mt-10 mb-10">
              {" "}
              Vamos aos detalhes sobre a sua frequência de treino.
            </p>{" "}
          </span>
        </div>
      </div>
      <div className="mb-10 flex flex-row lg:relative mt-10 items-center md:items-center gap-6">
        <button className="w-[170px] hidden md:block md:w-[220px] h-[60px] border border-yellowMain text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold">
          Voltar
        </button>
        <button className="w-[300px] md:visible-false md:w-[220px] h-[60px] bg-yellowMain text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold">
          Continuar
        </button>
      </div>
    </div>
  );
}

export default Thankspage;
