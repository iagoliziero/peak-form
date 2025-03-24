import { useForm } from "react-hook-form";
import DropdownMenu from "../components/DropDownMenu";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";

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
      <div className="h-full bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-y-scroll overflow-x-hidden no-scrollbar">
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
            <div className="flex flex-col">
            <span className="flex items-start mb-1 relative left-2">
                <Paragraph> Nome do exercício: </Paragraph>
                </span>
              <input
                {...register("title", { required: true })}
                maxLength={16}
                className={` w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.title ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="ex: supino reto"
              />
              {errors?.title?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  O nome do exercício é obrigatório.{" "}
                </p>
              )}
            </div>
            <div  className="flex flex-col">
            <span className="flex items-start mb-1 relative left-2">
                <Paragraph> Quantidade de séries: </Paragraph>
                </span>
              <input
                {...register("numberSeries", { required: true })}
                className={`w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
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
            <div  className="flex flex-col">
            <span className="flex items-start mb-1 relative left-2">
                <Paragraph> Quantidade de repetições: </Paragraph>
                </span>
              <input
                maxLength={23}
                {...register("repetitions", { required: true })}
                className={` w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.repetitions
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="ex: 4 séries"
              />
              {errors?.repetitions?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A quantidade de repetições é obrigatória.{" "}
                </p>
              )}
            </div>
            <div  className="flex flex-col">
            <span className="flex items-start mb-1 relative left-2">
                <Paragraph> Técnicas avançadas: </Paragraph>
                </span>
              <input
                {...register("advancedTechnique", { required: true })}
                maxLength={23}
                className={` w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.repetitions
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="ex: drop-set"
              />
              {errors?.advancedTechnique?.type === "required" && <p className="text-lightRed mx-4 mt-1">
               Técnicas avançadas é obrigatório. </p>}
            </div>
            <div className="flex flex-col">
            <span className="flex items-start mb-1 relative left-2">
                <Paragraph> Intensidade: </Paragraph>
                </span>
              <input
                {...register("intensity", { required: true })}
                maxLength={23}
                className={`w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.intensity
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Pesado"
              />
              {errors?.intensity?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A intesidade é obrigatória.{" "}
                </p>
              )}
            </div>
            <div  className="flex flex-col">
            <span className="flex items-start mb-1 relative left-2">
                <Paragraph> Descrição do exercício: </Paragraph>
                </span>
              <input
                {...register("description", { required: false })}
                maxLength={200}
                className="w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain"
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
