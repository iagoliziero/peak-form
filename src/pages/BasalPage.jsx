import DropdownMenu from "../components/DropDownMenu";

function BasalPage() {
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
        <div className="flex mt-10 flex-col gap-3 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Taxa metabólica basal
          </h1>
          <p className="text-center text-xl text-whiteMain">
            {" "}
            A Taxa Metabólica Basal (TMB) representa{" "}
            <br className="block md:hidden" /> o total de calorias que o corpo
            gasta para <br /> manter funções vitais, como batimentos{" "}
            <br className="block md:hidden" /> cardíacos, respiração, pressão
            arterial <br className="" /> e temperatura corporal, mesmo estando
            em <br className="block md:hidden" /> repouso absoluto.{" "}
          </p>
        </div>
        <div className="flex flex-col mb-12 justify-center items-center ">
          <div className="flex">
            <input
              maxLength={10}
              className={`mt-10 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain`}
              type="text"
              placeholder="Altura"
            />
            <div></div>
          </div>
          <div className="flex">
            <input
              maxLength={10}
              className={`mt-10 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain`}
              type="text"
              placeholder="Peso atual"
            />
          </div>
          <div className="flex ">
            <input
              maxLength={10}
              className={`mt-10 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain`}
              type="text"
              placeholder="Idade"
            />
          </div>
          <div className="flex mt-10 flex-col gap-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
              {" "}
              Qual é o seu gênero?{" "}
            </h1>
          </div>
          <div className="mt-8">
            <select className="w-[300px] p-4 border border-gray rounded-md bg-darker text-white text-xl focus:outline-none focus:ring-2 focus:ring-yellowMain">
              <option> Homem </option>
              <option> Mulher </option>
            </select>
          </div>
          <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl mt-8 text-whiteMain font-semibold"> Resultado: </h2>
        <h1 className="text-3xl md:text-4xl font-semibold text-yellowMain"> 1789.09</h1>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-center text-xl text-whiteMain"> É importante entender que a TMB não é <br className="block md:hidden" /> um número exato. Ela é apenas uma estimativa, <br  />pois fatores como genética, hormônios e rotina <br className="block md:hidden" /> influenciam o gasto real de calorias.</p>
      </div>
        </div>
      </div>
    </div>
  );
}

export default BasalPage;
