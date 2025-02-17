import { CircleUserRound, Pencil } from "lucide-react";
import DropdownMenu from "../components/DropDownMenu";

function ProfilePage() {

      
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
          <span className="relative left-28">
          <DropdownMenu />
          </span>
        </span>
        
      </div>
      <nav className="hidden lg:block  ">
        <ul className="flex gap-8 text-center text-2xl xl:text-2xl text-whiteMain ">
          <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Seu treino{" "}
          </li>
          <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Criar exercício{" "}
          </li>
          <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Tempo de Pausa{" "}
          </li>
          <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            TMB{" "}
          </li>
          <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
            {" "}
            Perfil
          </li>
          <li className="hover:text-yellowMain cursor-pointer transition-all hover:scale-105 ">
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
        <div className="flex items-center flex-col w-[350px] lg:w-[400px] h-[450px] lg:h-[600px] xl:w-[450px] bg-yellowMain rounded-lg p-6 overflow-y-auto gap-5">
        <div className="flex ">
        <span className="relative left-56"> <Pencil size={34} strokeWidth={2} /></span>
            <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative "><CircleUserRound size={150} /></div>
            <h1 className="text-xl"> 
            </h1>
        </div>
            
          </div>
          <div className="flex items-center flex-col w-[350px] lg:w-[400px] h-[450px] lg:h-[600px] xl:w-[450px] bg-yellowMain rounded-lg p-6 overflow-y-auto gap-5">
            <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative "></div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;