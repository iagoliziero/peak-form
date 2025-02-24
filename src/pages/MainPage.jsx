import { Info, Pencil, Timer, Trash2 } from "lucide-react";
import DropdownMenu from "../components/DropDownMenu";
import { useContext } from "react";
import { ExerciseContext } from "../contexts/ExerciseContext";
import { useNavigate } from "react-router-dom";
import InfoCard from "../components/InfoCard";


function MainPage() {

  const {exercise} = useContext(ExerciseContext) // Obtém os exercícios globalmente

  const handleWheel = (event) => {
    if (event.deltaY === 0) {
      // Rola horizontalmente
      event.currentTarget.scrollLeft += event.deltaX;
    }
  }

  const navigate = useNavigate()

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar">
      {/* Logo */}
      <div className="flex mt-16 gap-8">
        <span className="flex relative">
          <img
          onClick={() => navigate(`/principal`)}
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
          <li 
          onClick={() => navigate(`/principal`)}
          className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Seu treino{" "}
          </li>
          <li 
          onClick={() => navigate(`/criarexercicio`)}
          className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Criar exercício{" "}
          </li>
          <li 
          onClick={() => navigate(`/tempodepausa`)}
          className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Tempo de Pausa{" "}
          </li>
          <li 
           onClick={() => navigate(`/tmb`)}
          className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            TMB{" "}
          </li>
          <li 
          onClick={() => navigate(`/perfil`)}
          className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Perfil
          </li>
          <li 
          onClick={() => navigate(`/sobre`)}
          className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Sobre Nós{" "}
          </li>
        </ul>
      </nav>

      <div className="w-full h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5">
        <div className="mt-10 flex justify-center ">
          <button
          onClick={() => navigate(`/criarexercicio`)}
            className="w-[300px] md:w-[360px] h-[60px] bg-yellowMain mb-8 mt-8 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
          >
            Criar exercício
          </button>
        </div>

        {/* cards */}
        <div

          className="w-full flex gap-6 px-8 py-4 snap-x snap-mandatory scrollbar-hide mb-10 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide xl:grid xl:grid-cols-3 xl:w-[90%] xl:gap-6 xl:px-4 xxl:grid-cols-4 3xl:grid-cols-5 items-center lg:overflow-auto"
          onWheel={handleWheel}
        >
          {exercise.map((exer) => (
            <div key={exer.id} className="snap-center flex-shrink-0">
              <div className="w-[320px] h-[420px] bg-yellowMain rounded-lg flex-col">
                <div className="flex items-center justify-between p-4">
                  <h1 className="text-start text-2xl text-darker font-semibold">
                    {exer.title}
                  </h1>
                  <InfoCard />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[305px] h-[345px] bg-whiteMain rounded-md flex-col">
                    <div className="flex p-6">
                      <div className="flex flex-col gap-6">
                      <h2 className="text-xl text-darker font-bold">
                        Quantidade de séries: {""} {exer.numberSeries}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Repetições: {exer.repetitions}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Técnicas avançadas: <br /> {exer.advancedTechnique}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Intensidade: {exer.intensity}
                      </h2>
                      </div>
                    </div>
                    <div className="flex justify-center items-center flex-grow gap-5">
                      {/* Container dos botões */}
                      <button className="w-20 h-16 bg-yellowMain rounded-md hover:scale-105 transition-all text-darker flex justify-center items-center">
                        <Pencil size={34} strokeWidth={2} />
                      </button>
                      <button
                      onClick={() => navigate(`/tempodepausa`)}
                      className="w-20 h-16 bg-orange rounded-md hover:scale-105 transition-all text-darker flex justify-center items-center">
                        <Timer size={34} />
                      </button>
                      <button className="w-20 h-16 bg-red rounded-md hover:scale-105 transition-all text-darker flex justify-center items-center">
                        <Trash2 size={34} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Fim do container dos cards */}
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}

export default MainPage;
