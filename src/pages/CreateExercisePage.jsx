import { useForm } from "react-hook-form";
import DropdownMenu from "../components/DropDownMenu";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";


function CreateExercisePage() {

  const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
      alert(JSON.stringify(data))
    }

  return (
    <>
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-y-scroll overflow-x-hidden no-scrollbar">
        {/* Logo */}
        <div className="flex mt-16 gap-8">
          <span className="flex relative">
          <img
          onClick={() => navigate(`/principal`)}
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px] cursor-pointer"
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
        <div className="w-full h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5">
          <div className="mt-10 gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">Adicionar Exercício</h1>
          </div>
          <div className="flex flex-col gap-3  justify-center">
            <div>
              <input
                {...register("title", {required: true})}
              maxLength={16}
                className={`mt-5 w-[300px] gap-3 md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.title ? "border-lightRed" : "focus:border-yellowMain" }` }
                type="text"
                placeholder="Nome do Exercício"
              />
              {errors?.title?.type === "required" && <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  O nome do exercício é obrigatório.{" "}
                </p>}
            </div>
            <div>
              <input
              {...register("numberSeries", {required: true})}
              className={`mt-5 w-[300px] gap-3 md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                errors?.numberSeries ? "border-lightRed" : "focus:border-yellowMain" }` }
                type="text"
                placeholder="Quantidade de Séries"
              />
              {errors?.numberSeries?.type === 'required' && <p className="text-lightRed mx-4 mt-1"> A quantidade de séries é obrigatória. </p>}
            </div>
            <div>
              <input
               maxLength={23}
               {...register("repetitions", {required: true})}
               className={`mt-5 w-[300px] gap-3 md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                errors?.repetitions ? "border-lightRed" : "focus:border-yellowMain" }` }
                type="text"
                placeholder="Repetições"
              />
              {errors?.repetitions?.type === 'required' && <p className="text-lightRed mx-4 mt-1"> A quantidade de repetições é obrigatória. </p>}
              </div>
            <div>
              <input
              {...register("advancedTechnique", {required: false})}
               maxLength={23}
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Técnicas (Opcional)"
              />
            </div>
            <div>
              <input
              {...register("intensity", {required: true})}
               maxLength={23}
               className={`mt-5 w-[300px] gap-3 md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                errors?.intensity ? "border-lightRed" : "focus:border-yellowMain" }` }
                type="text"
                placeholder="Intensidade"
              />
              {errors?.intensity?.type === 'required' && <p className="text-lightRed mx-4 mt-1"> A intesidade é obrigatória. </p>}
            </div>
            <div>
              <input
              {...register("description", {required: false})}
               maxLength={200}
                className=" mt-5 w-[300px] gap-3  md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Descrição (Opcional)"
              />
            </div>
          </div>

          <button
          onClick={() => handleSubmit(onSubmit)()}
            className="w-[300px] md:w-[360px] h-[60px] bg-yellowMain mb-8 mt-8 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
          >
            Criar Exercício
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateExercisePage;