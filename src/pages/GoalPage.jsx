import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../contexts/NameContexts.jsx";
import Logo from "../components/Logo.jsx";
import H1 from "../components/H1.jsx";
import Paragraph from "../components/Paragraph.jsx";
import ButtonBack from "../components/ButtonBack.jsx";
import ButtonNext from "../components/ButtonNext.jsx";

function GoalPage() {
  const navigate = useNavigate();
  const { name } = useContext(NameContext);
  const [selectedButtons, setSelectedButton] = useState([]);

  const buttons = [
    { id: 1, label: "Perder peso" },
    { id: 2, label: "Manter peso" },
    { id: 3, label: "Ganhar peso" },
    { id: 4, label: "Ganhar massa muscular" },
    { id: 5, label: "Melhorar a saúde" },
  ];

  const toggleSelection = (id) => {
    setSelectedButton((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((btnId) => btnId !== id);
      } else if (prevSelected.length < 2) {
        return [...prevSelected, id];
      }
      return prevSelected;
    });
  };

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar md:justify-center lg:justify-start">
      <Logo />
      <div>
        <div className="mt-5 flex flex-col gap-5">
          <H1>
            Obrigado, {name.name}! Agora, <br /> vamos falar sobre suas metas.
          </H1>
          <Paragraph>
            Escolha até 2 aspectos importantes para você, <br /> incluindo um
            objetivo relacionado ao seu peso.
          </Paragraph>

          <div className="flex flex-col items-center mt-5 gap-5">
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => toggleSelection(button.id)}
                className={`text-center w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl text-whiteMain
                ${
                  selectedButtons.includes(button.id)
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
      <div className="mb-5 flex flex-row lg:relative mt-8 items-center md:items-center gap-6">
        <ButtonBack onClick={() => navigate(-1)}>Voltar</ButtonBack>
        <ButtonNext onClick={() => navigate(`/agradecimento`)}>
          Continuar
        </ButtonNext>
      </div>
    </div>
  );
}

export default GoalPage;
