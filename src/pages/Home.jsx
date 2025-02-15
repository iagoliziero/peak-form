function Home() {
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 lg:justify-center overflow-auto ">
      <div className=" flex flex-col justify-center mt-10 gap-8">
        <span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-darker text-whiteMain font-semibold text-center">
            
            Bem vindo ao
          </h1>
        </span>
        <span className="flex flex-col items-center">
          <img className="w-[160px] md:w-[190px] lg:w-[220px]" src="src/public/logo.png" alt="logo" />
        </span>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4">
          <img
            className="w-[350px] lg:w-[300px] rounded-2xl"
            src="/src/public/image1.png"
            alt=""
          />
          <p className="text-3xl text-whiteMain text-center">
            Veja seus treinos <br />
            virarem conquistas.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-[350px] lg:w-[300px] rounded-2xl"
            src="/src/public/image2.png"
            alt=""
          />
          <p className="text-3xl text-whiteMain text-center">
            Transforme esforço <br /> em progresso.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-[350px] lg:w-[300px] rounded-2xl"
            src="/src/public/image3.png"
            alt=""
          />
          <p className="text-3xl text-whiteMain text-center">
            Organização, <br /> disciplina e resultado.
          </p>
        </div>
        
      </div>
      <div className="flex flex-col sticky bottom-0 lg:relative mt-10 items-center md:items-center">
            <button
              className="w-[300px] md:w-[360px] h-[60px]
                    bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
            >
              Continuar
            </button>
          </div>
    </div>
  );
}

export default Home;
