import { useForm } from "react-hook-form";
import Calendar from "../components/Calendar";
import Gender from "../components/Gender";
import LocalInput from "../components/LocalInput";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import H1 from "../components/H1";
import ButtonNext from "../components/ButtonNext";
import ButtonBack from "../components/ButtonBack";

function InfoUserPage() {

  const navigate = useNavigate()
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar md:justify-center lg:justify-start">
      <Logo />
      <div className="flex-col flex gap-5">
        <div className="mt-5 flex flex-col gap-5">
        <H1> 
        Qual é o seu gênero?
        </H1>

          <Gender />

        </div>
        <div>
          <div className=" flex flex-col gap-5">
            {" "}
            <H1>
            Quando você nasceu?
              </H1>

            <Calendar  />

          </div>
          <div className=" flex justify-center items-center flex-col gap-5">
          <H1> 
          Onde você mora?
          </H1>

            <LocalInput />

          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-row lg:relative mt-8  items-center md:items-center gap-6">
        <ButtonBack 
        onClick={() => navigate(-1)}>
          Voltar
        </ButtonBack>
        <ButtonNext 
        onClick={() => navigate(`/login`)}>
          Continuar
        </ButtonNext>
      </div>
    </div>
  );
}

export default InfoUserPage;