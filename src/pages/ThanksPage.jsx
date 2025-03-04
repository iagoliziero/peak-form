import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";
import ButtonBack from "../components/ButtonBack";
import ButtonNext from "../components/ButtonNext";

function Thankspage() {
  const navigate = useNavigate()
    return (
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-12 lg: overflow-scroll no-scrollbar ">
       <Logo />
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <H1>
             
              Ótimo! Você deu um <br /> grande passo na <br className="block md:hidden" /> sua jornada.
            </H1>
              <Paragraph> 
              Os treinos são essenciais para o <br className="md:block" />crescimento  muscular. <br className="md:hidden" />{" "}
                Registre seus exercícios para garantir <br  /> que está desafiando
                seu corpo <br className="md:hidden" /> da maneira certa.
              </Paragraph>
             <Paragraph> 
             Vamos aos detalhes sobre <br className="md:hidden" /> a sua frequência de treino.
             </Paragraph>
          </div>
        </div>
        <div className="mb-12 flex flex-row lg:relative mt-8 items-center md:items-center gap-6">
          <ButtonBack 
          onClick={() => navigate(-1)}>
            Voltar
          </ButtonBack>
          <ButtonNext 
          onClick={() => navigate(`/atividade`)}
>
            Continuar
          </ButtonNext>
        </div>
      </div>
    );
  }
  
  export default Thankspage;