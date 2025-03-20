import { useForm } from "react-hook-form";
import DropdownMenu from "../components/DropDownMenu";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";
import H1 from "../components/H1";

function CreateExercisePage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-y-scroll overflow-x-hidden no-scrollbar">
        {/* Logo */}
        <div className="flex mt-16 gap-8">
          <span className="flex relative">
          <img
          onClick={() => navigate(`/principal`)}
            className="w-[9rem] md:w-[11rem] xl:w-[12rem]"
            src="src/public/logo.png"
            alt="logo"
          />
            <span className="relative left-28 md:left-72">
              <DropdownMenu />
            </span>
          </span>
        </div>
       <Nav />
        <div className="w-full h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5">
          <div className="mt-10 gap-5">
            <H1>
              Adicionar Exercício
            </H1>
          </div>
          <div className="flex flex-col gap-3  justify-center">
            <div>
              <input
                {...register("title", { required: true })}
                maxLength={16}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.title ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Nome do Exercício"
              />
              {errors?.title?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  O nome do exercício é obrigatório.{" "}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("numberSeries", { required: true })}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.numberSeries
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Quantidade de Séries"
              />
              {errors?.numberSeries?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A quantidade de séries é obrigatória.{" "}
                </p>
              )}
            </div>
            <div>
              <input
                maxLength={23}
                {...register("repetitions", { required: true })}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.repetitions
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Repetições"
              />
              {errors?.repetitions?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A quantidade de repetições é obrigatória.{" "}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("advancedTechnique", { required: false })}
                maxLength={23}
                className=" mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Técnicas (Opcional)"
              />
            </div>
            <div>
              <input
                {...register("intensity", { required: true })}
                maxLength={23}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.intensity
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Intensidade"
              />
              {errors?.intensity?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A intesidade é obrigatória.{" "}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("description", { required: false })}
                maxLength={200}
                className="mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
                type="text"
                placeholder="Descrição (Opcional)"
              />
            </div>
          </div>

          <Button
            onClick={() => handleSubmit(onSubmit)()}
          >
            Criar Exercício
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateExercisePage;
