import { CircleUserRound } from "lucide-react";
import DropdownMenu from "../components/DropDownMenu";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate()

  return (
    <>
      {/* HEADER */}
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar">
      {/* LOGO */}
      <div className="flex mt-16 gap-8">
        <span className="flex relative">
        <img
          onClick={() => navigate(`/principal`)}
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px] cursor-pointer"
            src="src/public/logo.png"
            alt="logo"
          />
          {/* LOGO */}
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
      {/* HEADER */}
        <div className="w-full xxl:h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5 ">
          <div className="flex mt-10 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold"> Sobre Nós </h1>
          </div>
          <div className="mt-10 mb-10 flex justify-center flex-col lg:flex-row gap-10 ">
            <div className=" flex items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar ">
              <div className="rounded-full h-[250px] w-[250px] bg-slate-100 flex justify-center relative items-center ">
              <img className="rounded-full" src="./src/public/Artur.png"  alt="" />
                
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-semibold">
                {" "}
                Artur Dallmann - Full Stack
              </h1> 
    
             <div>
             <p className="text-xl lg:text-2xl text-center">
                {" "}
                Sou um desenvolvedor full stack apaixonado por tecnologia e
                inovação. Com experiência em JavaScript, React, Tailwind CSS, C#
                e TypeScript, minha especialização está na criação de sistemas
                eficientes e intuitivos. Estudante de ADS na ETEC e na FIAP, sempre
                buscando aprimorar minhas habilidades e trazer soluções
                tecnológicas de alto impacto. No projeto <b> Peak Form</b>, meu
                objetivo é oferecer uma plataforma moderna e funcional para
                otimizar o gerenciamento de exercícios, tornando a experiência
                do usuário fluida e eficiente.{" "}
              </p>
             </div>
            </div>
            <div className="flex items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar ">
              <div className=" h-[250px] w-[250px] flex justify-center relative items-center ">
                {" "}
                <img className="rounded-full" src="./src/public/Iago.png" alt="" />
              </div>
              <h1 className=" text-2xl lg:text-3xl font-semibold">
                {" "}
                Iago Liziero - Full Stack
              </h1>
              <div>
              <p className="text-xl lg:text-2xl text-center">
                {" "}
                Sou um desenvolvedor full stack com foco na criação de sistemas
                inteligentes e otimizados. Com experiência em JavaScript, React,
                Tailwind CSS, C# e Node.js, trabalho para desenvolver soluções
                ágeis e robustas. Estudante de ADS na ETEC e FIAP, estou sempre em
                busca de novos desafios e aprimoramento técnico. No{" "}
                <b> Peak Form </b>, meu compromisso é proporcionar uma
                plataforma inovadora e de alto desempenho para facilitar o
                gerenciamento de exercícios e otimizar a rotina dos usuários.{" "}
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
