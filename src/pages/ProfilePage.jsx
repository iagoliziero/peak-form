import { CircleUserRound, Pencil } from "lucide-react";
import DropdownMenu from "../components/DropDownMenu";
import { useNavigate } from "react-router-dom";


function ProfilePage() {

  const navigate = useNavigate()
     
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-auto">
      {/* Logo */}
      <div className="flex mt-16 gap-8">
        <span className="flex relative">
          <img
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
      <div className="w-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5 ">
        <div className="flex mt-10 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Seu perfil
          </h1>
        </div>
        <div className="mt-10 mb-10 flex justify-center flex-col lg:flex-row gap-10 ">
        <div className="flex justify-center items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5">
        <div className="flex mt-10">
        <button className="relative left-56 lg:left-60 bottom-16"> <Pencil size={34} strokeWidth={2} /></button>
            <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative right-4"><CircleUserRound size={150} /></div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold"> iago Liziero </h1>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl"> teste@gmail.com</h2>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl"> 10/04/2007</h2>
          </div>
          </div>  
          </div>
          <div className="flex items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar ">
        <div className="flex ">
        <button className="relative left-56 lg:left-60 bottom-16"> <Pencil size={34} strokeWidth={2} /></button>
            <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative right-4">
              <div className="flex flex-col items-center"> <h2 className="text-2xl "> IMC</h2>
              <h1 className="text-3xl font-semibold "> 28.06</h1></div>
            </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold"> Sobre Peso</h1>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl"> Obesidade grau 1</h2>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold"> Altura: </h2>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl"> 173 cm </h2>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold"> Peso: </h2>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl"> 84 kg </h2>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold"> Meta de peso: </h2>
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl"> 90 kg </h2>
          </div>
          </div>  
        </div>
        </div>
      </div>
    </div>
  );
}


export default ProfilePage;