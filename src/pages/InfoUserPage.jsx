import { useForm } from "react-hook-form";
import Calendar from "../components/Calendar";
import Gender from "../components/Gender";
import LocalInput from "../components/LocalInput";
import { Navigate, useNavigate } from "react-router-dom";

function InfoUserPage() {

  const navigate = useNavigate()
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar justify-center">
      <div className="flex flex-col justify-center mt-12 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div className="flex-col flex gap-5">
        <div className="mt-3 flex flex-col gap-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é o seu gênero?
          </h1>

          <Gender />

        </div>
        <div>
          <div className=" flex flex-col gap-5">
            {" "}
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Quando você nasceu?
          </h1>

            <Calendar  />

          </div>
          <div className=" flex justify-center items-center flex-col gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Onde você mora?
          </h1>

            <LocalInput />

          </div>
        </div>
      </div>
      <div className="mb-12 flex flex-row lg:relative mt-8  items-center md:items-center gap-6">
        <button 
        onClick={() => navigate(-1)}
        className="w-[170px] hidden md:block md:w-[220px] h-[60px] border border-yellowMain text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold">
          Voltar
        </button>
        <button 
        onClick={() => navigate(`/login`)}
        className="w-[300px] md:visible-false md:w-[220px] h-[60px] bg-yellowMain text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold">
          Continuar
        </button>
      </div>
    </div>
  );
}

export default InfoUserPage;