import DropdownMenu from "../components/DropDownMenu";


function CreateExercisePage() {
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
              <DropdownMenu />
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">Adicionar Exercício</h1>
          </div>
          <div className="flex flex-col gap-3  justify-center">
            <div>
              <input
              maxLength={16}
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
               maxLength={23}
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Técnicas (Opcional)"
              />
            </div>
            <div>
              <input
               maxLength={23}
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Intensidade"
              />
            </div>
            <div>
              <input
               maxLength={200}
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

export default CreateExercisePage;