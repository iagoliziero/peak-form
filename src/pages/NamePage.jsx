import { useContext } from "react";
import userContext from "../contexts/userContexts";

function NamePage() {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-visible ">
      <div className=" flex flex-col justify-center mt-16 gap-8">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é o seu nome?
          </h1>
          <span className="text-center text-xl  text-whiteMain">
            {" "}
            <p>
              {" "}
              Estamos contentes com a sua presença aqui. <br />
              Vamos saber um pouco sobre você.
            </p>{" "}
          </span>
          <div className="flex justify-center">
            <div>
              <input
                maxLength={16}
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className=" mt-10 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Nome"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Nao ta funcionando quando eu tento copiar para outras paginas */}
      <div className="flex flex-row relative top-64 lg:relative mt-10 items-center md:items-center gap-6">
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

export default NamePage;
