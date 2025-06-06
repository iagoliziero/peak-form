import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";
import ButtonBack from "../components/ButtonBack";
import ButtonNext from "../components/ButtonNext";

function ActivityPage() {

    const navigate = useNavigate()
    const [selectedButton, setSelectedButton] = useState([])

    const buttons = [
        { id: 1,label: "Não muito ativo"},
        {id: 2,label: "Levemente ativo"}, 
        {id: 3, label: "Ativo"},
        {id: 4, label: "Bastante ativo"},
    ]

    const handleSelection = (id) => {
        setSelectedButton((prevSelected) => (prevSelected === id ? null : id));
      };
    

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar md:justify-center lg:justify-start 3xl:justify-center">
    <Logo />
    <div>
      <div className="mt-5 flex flex-col gap-5">
        <H1>
          Qual é o seu nível de <br /> atividade física?
        </H1>
       <Paragraph> 
       Seu nível de atividade física incluindo exercício físico.
       </Paragraph>

        <div className="flex flex-col items-center mt-5 gap-5">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleSelection(button.id)}
              className={`text-center w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl text-whiteMain
                ${
                  selectedButton === button.id
                    ? "border-yellowMain text-yellowMain"
                    : ""
                }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="mb-5 flex flex-row lg:relative mt-8  items-center md:items-center gap-6">
        <ButtonBack 
        onClick={() => navigate(-1)}>
          Voltar
        </ButtonBack>
        <ButtonNext 
        onClick={() => navigate(`/perfilusuario`)}>
          Continuar
        </ButtonNext>
      </div>
  </div>
  );
}

export default ActivityPage;
