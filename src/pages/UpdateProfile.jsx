import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import ButtonNext from "../components/ButtonNext";
import { CircleCheckBig, UserCheck } from "lucide-react";

const UpdateProfile = () => {

    const navigate = useNavigate();

    return ( 
        <>
    <div className="h-screen  bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-12 md:justify-center">
      <Logo />
      <div>
        <div className="flex justify-center">
        <UserCheck className="text-yellowMain" size={90} />
        </div>
        <div className="mt-5 flex flex-col gap-5 max-w-[350px] lg:max-w-[400px]">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellowMain text-center">
          Perfil atualizado com sucesso!
          </h1>
         
        <Paragraph> 
        Pronto! Perfil no jeito e foco no progresso! 📈
        </Paragraph>
         
          </div>
        </div>

        <div className="mb-12 flex flex-row lg:relative mt-8 items-center md:items-center gap-6">
        <ButtonNext onClick={() => navigate('/perfil')}>
        Ir para o Perfil
        </ButtonNext>
      </div>
      </div>
      
        </>
     );
}
 
export default UpdateProfile;