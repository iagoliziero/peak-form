import DropdownMenu from "../components/DropdownMenu";
import { CircleUserRound } from "lucide-react";
import H1Three from "../components/H1Three";

function AboutUs() {
  return (
    <>
      {/* header */}
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-y-scroll no-scrollbar">
        {/* Logo */}
        <div className="flex mt-16 gap-8">
          <span className="flex relative">
            <img
              className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
              src="src/public/logo.png"
              alt="logo"
            />
          </span>
          <span className="relative left-28">
            <DropdownMenu />
          </span>
        </div>
        {/* navigate */}
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
        <div className="w-full h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5">
          <div className="flex mt-10">
            <H1Three> Sobre Nós </H1Three>
          </div>
          <div className="mt-10 gap-10 flex-col md:flex-col lg:flex-row flex justify-center items-center ">
            <div className=" overflow-y-scroll no-scrollbar p-6 gap-5 w-[350px] lg:w-[400px] h-[450px] lg:h-[600px] xl:w-[450px] border-2 flex-col items-center flex bg-yellowMain rounded-lg">
              <div className="rounded-full mt-10 h-[200px] w-[200px] bg-slate-100 flex justify-center relative items-center ">
                {" "}
                <CircleUserRound size={200} />{" "}
              </div>
              <h1 className="text-xl mt-10 gap-10 md:text-2xl lg:text-3xl text-black text-center font-semibold">
                {" "}
                Artur Dallmann - Full Stack
              </h1>
              <p className="text-lg m-5 gap-10 md:text-xl lg:text-2xl text-black text-center font-regular">
                {" "}
                Sou um desenvolvedor full stack apaixonado por tecnologia e
                inovação. Com experiência em JavaScript, React, Tailwind CSS, C#
                e TypeScript, minha especialização está na criação de sistemas
                eficientes e intuitivos. Estudo na ETEC e na FIAP, sempre
                buscando aprimorar minhas habilidades e trazer soluções
                tecnológicas de alto impacto. No projeto <b> Peak Form</b>, meu
                objetivo é oferecer uma plataforma moderna e funcional para
                otimizar o gerenciamento de exercícios, tornando a experiência
                do usuário fluida e eficiente.{" "}
              </p>
            </div>
            <div className=" overflow-y-scroll no-scrollbar p-6 gap-5 w-[350px] lg:w-[400px] h-[450px] lg:h-[600px] xl:w-[450px] border-2 flex-col items-center flex bg-yellowMain rounded-lg">
              <div className="rounded-full mt-10 h-[200px] w-[200px] bg-slate-100 flex justify-center relative items-center ">
                {" "}
                <CircleUserRound size={200} />{" "}
              </div>
              <h1 className="text-xl mt-10 gap-10 md:text-2xl lg:text-3xl text-black text-center font-semibold">
                {" "}
                Iago Lizieiro - Full Stack
              </h1>
              <p className="text-lg m-5 gap-10 md:text-xl lg:text-2xl text-black text-center font-regular">
                {" "}
                Sou um desenvolvedor full stack com foco na criação de sistemas
                inteligentes e otimizados. Com experiência em JavaScript, React,
                Tailwind CSS, C# e Node.js, trabalho para desenvolver soluções
                ágeis e robustas. Estudante da ETEC e FIAP, estou sempre em
                busca de novos desafios e aprimoramento técnico. No{" "}
                <b> Peak Form </b>, meu compromisso é proporcionar uma
                plataforma inovadora e de alto desempenho para facilitar o
                gerenciamento de exercícios e otimizar a rotina dos usuários.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
