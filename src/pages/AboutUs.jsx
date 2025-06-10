import DropdownMenu from "../components/DropDownMenu";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER */}
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar">
        {/* LOGO */}
        <div className="flex mt-16 gap-8">
          <span className="flex relative">
            <img
              onClick={() => navigate(`/principal`)}
              className="w-[9rem] md:w-[11rem] xl:w-[12rem] cursor-pointer"
              src="../../logo.png"
              alt="logo"
            />
            {/* LOGO */}
            <span className="relative left-28 md:left-72">
              <DropdownMenu />
            </span>
          </span>
        </div>
        <Nav />
        {/* HEADER */}
        <div className="w-full xxl:h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5 ">
          <div className="flex mt-10 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
              {" "}
              Sobre Nós{" "}
            </h1>
          </div>
          <div className="mt-10 mb-10 flex justify-center flex-col lg:flex-row gap-10 ">
            <div className=" flex items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar ">
              <div className="rounded-full h-[250px] w-[250px] bg-slate-100 flex justify-center relative items-center ">
                <img
                  className="rounded-full"
                  src="../../public/artur.png"
                  alt="imagem Artur"
                />
              </div>

              <h1 className="text-2xl lg:text-3xl font-semibold">
                {" "}
                Artur Dallmann - Full Stack
              </h1>

              <div>
                <p className="text-xl lg:text-2xl text-center">
                  {" "}
                  Sou um desenvolvedor full stack apaixonado por tecnologia e
                  inovação. Com experiência em JavaScript, React, Tailwind CSS,
                  C# e TypeScript, minha especialização está na criação de
                  sistemas eficientes e intuitivos. Estudante de ADS na ETEC e
                  na FIAP, sempre buscando aprimorar minhas habilidades e trazer
                  soluções tecnológicas de alto impacto. No projeto{" "}
                  <b> Peak Form</b>, meu objetivo é oferecer uma plataforma
                  moderna e funcional para otimizar o gerenciamento de
                  exercícios, tornando a experiência do usuário fluida e
                  eficiente.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar ">
              <div className=" h-[250px] w-[250px] flex justify-center relative items-center ">
                {" "}
                <img
                  className="rounded-full"
                  src="../../public/Iago.png"
                  alt="imagem Iago"
                />
              </div>
              <h1 className=" text-2xl lg:text-3xl font-semibold">
                {" "}
                Iago Liziero - Full Stack
              </h1>
              <div>
                <p className="text-xl lg:text-2xl text-center">
                  {" "}
                  Sou desenvolvedor Full Stack com foco na criação de sistemas
                  inteligentes, escaláveis e otimizados. Tenho experiência com
                  JavaScript, TypeScript, React, Tailwind CSS, C#, Node.js,
                  Express, MySQL, PostgreSQL e MongoDB. Atuo desenvolvendo
                  soluções ágeis, robustas e centradas na experiência do
                  usuário. Atualmente sou estudante de Análise e Desenvolvimento
                  de Sistemas pela ETEC e FIAP, sempre em busca de novos
                  desafios e constante evolução técnica. No projeto{" "}
                  <b>Peak Form</b>, meu compromisso é oferecer uma plataforma
                  inovadora e de alto desempenho, focada no gerenciamento
                  eficiente de exercícios e na otimização da rotina dos
                  usuários.
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
