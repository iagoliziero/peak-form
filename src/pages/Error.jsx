import { useNavigate } from "react-router-dom";
import H1 from "../components/H1";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button.jsx";
import ButtonNext from "../components/ButtonNext";



const Error = () => {

    const navigate = useNavigate();

    return ( 
        <>
    <div className="h-screen  bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-12 md:justify-center">
      <Logo />
      <div>
        <div className="mt-5 flex flex-col gap-5 max-w-[350px] lg:max-w-[400px]">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellowMain text-center">
          Ocorreu um erro inesperado. (Erro 404)
          </h1>
         
        <Paragraph> 
            Estamos trabalhando para resolver isso. Tente novamente mais tarde ou volte para a página inicial.
        </Paragraph>
        
         
          </div>
        </div>

        <div className="mb-12 flex flex-row lg:relative mt-8 items-center md:items-center gap-6">
        <ButtonNext onClick={() => navigate('/')}>
        Voltar para a Home
        </ButtonNext>
      </div>
      </div>
      
        </>
     );
}
 
export default Error;