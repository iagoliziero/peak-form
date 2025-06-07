import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import ButtonNext from "../components/ButtonNext";
import { PartyPopper } from "lucide-react";

const RegisteredExercise = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen  bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-12 md:justify-center">
        <Logo />
        <div>
          <div className="flex justify-center">
            <PartyPopper className="text-yellowMain" size={90} />
          </div>
          <div className="mt-5 flex flex-col gap-5 max-w-[350px] lg:max-w-[400px]">
            <h1 className="text-4xl lg:text-5xl font-bold text-yellowMain text-center">
              Exercício registrado com sucesso!
            </h1>

            <Paragraph>
              Mantenha o foco e siga evoluindo. Bora pro próximo!
            </Paragraph>
          </div>
        </div>
        <div className="mb-12 flex flex-row lg:relative mt-8 items-center md:items-center gap-6">
          <ButtonNext onClick={() => navigate("/principal")}>
            Ir para o Dashboard
          </ButtonNext>
        </div>
      </div>
    </>
  );
};

export default RegisteredExercise;
