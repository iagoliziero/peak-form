function ProfileBodyPage() {
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-auto ">
      <div className=" flex flex-col justify-center mt-10 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div className="flex flex-col ">
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é a sua altura?
          </h1>
          <div className="flex justify-center">
            <div>
              <input
                maxLength={3}
                className=" mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Sua altura"
              />
              <div className="left-32 md:left-36 bottom-11 relative text-center text-2xl  text-whiteMain">
                {" "}
                cm
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é o seu peso?
          </h1>
          <span className="mt-2 text-center text-xl  text-whiteMain">
            <p>
              Não tem problema inserir uma estimativa. <br />
              você pode atualizar posteriormente.
            </p>
          </span>
          <div className="flex justify-center">
            <div>
              <input
                maxLength={3}
                className=" mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Peso atual"
              />
              <div className="left-32 md:left-36 bottom-11 relative text-center text-2xl  text-whiteMain">
                {" "}
                kg
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é a sua meta de peso?
          </h1>
          <div className="flex justify-center">
            <div>
              <input
                maxLength={3}
                className=" mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Meta de peso"
              />
              <div className="left-32 md:left-36 bottom-11 relative text-center text-2xl  text-whiteMain">
                {" "}
                kg
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  lg:relative items-center md:items-center gap-6 ">
        <button
          className="w-[170px] hidden md:block  md:w-[220px] h-[60px]
                        border border-yellowMain text-yel mb-12 text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold"
        >
          Voltar
        </button>
        <button
          className="w-[300px] md:visible-false md:w-[220px] h-[60px]
                        bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default ProfileBodyPage;
