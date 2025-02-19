// import DropdownMenu from "../components/DropdownMenu";
import H1Three from "../components/H1Three";
import InfoCard from "../components/InfoCard";

function CreateExerPage() {
  return (
    <>
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-y-scroll overflow-x-hidden no-scrollbar">
        {/* Logo */}
        <div className="flex mt-16 gap-8">
          <span className="flex relative">
            <img
              className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
              src="src/public/logo.png"
              alt="logo"
            />
            <span className="relative left-28 md:left-72">
              <InfoCard />
            </span>
          </span>
        </div>
        <nav className="hidden lg:block  ">
          <ul className="flex gap-8 text-center text-2xl xl:text-2xl text-whiteMain ">
            <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
              {" "}
              Seu treino{" "}
            </li>
            <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
              {" "}
              Criar exercício{" "}
            </li>
            <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
              {" "}
              Tempo de Pausa{" "}
            </li>
            <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
              {" "}
              TMB{" "}
            </li>
            <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
              {" "}
              Perfil
            </li>
            <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
              {" "}
              Sobre Nós{" "}
            </li>
          </ul>
        </nav>
        <div className="w-full h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5">
          <div className="mt-10 gap-5">
            <H1Three>Adicionar Exercício</H1Three>
          </div>
          <div className="flex flex-col gap-3  justify-center">
            <div>
              <input
                className=" mt-5 w-[300px] gap-3 md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Nome do Exercício"
              />
            </div>
            <div>
              <input
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="number"
                placeholder="Quantidade de Séries"
              />
            </div>
            <div>
              <input
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Técnicas  (Opcional)"
              />
            </div>
            <div>
              <input
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Intensidade"
              />
            </div>
            <div>
              <input
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Descrição (Opcional)"
              />
            </div>
          </div>
          <button
            className="h-[50px] w-[200px]  md:w-[220px] md:h-[60px]  mt-10 gap-5
                    bg-yellowMain mb-12 md:text-2xl text-xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
          >
            Criar Exercício
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateExerPage;
