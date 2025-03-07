import { CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import H1 from "../components/H1";

function Home() {
  const navigate = useNavigate()

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 lg:justify-center overflow-scroll no-scrollbar">
      <div className=" flex flex-col justify-center md:mt-0 gap-8">
      <div>
          <button 
          onClick={() => navigate(`/signin`)}
          className="w-10 h-10 top-[5rem] md:left-[21.875rem] lg:left-[34.375rem] rounded-full items-center bg-yellowMain hover:bg-orange flex justify-center relative left-52 "> <CircleUserRound size={30} /> </button>
          </div>
        <span className="flex items-center justify-center">
          <H1>
            
            Bem vindo ao
          </H1>
          
        </span>
        
        <span className="flex flex-col items-center">
          <img className="w-[10rem] md:w-[11.875rem] lg:w-[13.75rem]" src="src/public/logo.png" alt="logo" />
        </span>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4">
          <img
            className="w-[21.875rem] lg:w-[18.75rem] rounded-2xl"
            src="/src/public/image1.png"
            alt=""
          />
          <p className="text-3xl text-whiteMain text-center">
            Veja seus treinos <br />
            virarem conquistas.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-[21.875rem] lg:w-[18.75rem] rounded-2xl"
            src="/src/public/image2.png"
            alt=""
          />
          <p className="text-3xl text-whiteMain text-center">
            Transforme esforço <br /> em progresso.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-[21.875rem] lg:w-[18.75rem] rounded-2xl"
            src="/src/public/image3.png"
            alt=""
          />
          <p className="text-3xl text-whiteMain text-center">
            Organização, <br /> disciplina e resultado.
          </p>
        </div>
        
      </div>
      <div className="flex flex-col sticky bottom-0 lg:relative mt-10 items-center md:items-center">
            <button
            onClick={() => navigate(`/nome`)}
              className="w-[18.75rem] md:w-[22.5rem] h-[3.75rem]
                    bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all duration-[400ms] font-semibold"
            >
              Continuar
            </button>
          </div>
    </div>
  );
}

export default Home;
