import { data } from "autoprefixer";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProfileBodyContexts } from "../contexts/ProfileBodyContexts";
import Logo from "../components/Logo";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";
import ButtonBack from "../components/ButtonBack";
import ButtonNext from "../components/ButtonNext";

function ProfileBodyPage() {

  const { setProfileBody } = useContext(ProfileBodyContexts);

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const heightInMeters = data.height / 100;
    const imc = (data.weight / (heightInMeters * heightInMeters)).toFixed(2);

    let weightStatus = "";
    let obesityLevel = "";

    if (imc < 18.5) {
      weightStatus = "Abaixo do peso";
      obesityLevel = "Normal";
    } else if (imc < 24.9) {
      weightStatus = "Peso normal";
      obesityLevel = "Normal";
    } else if (imc < 29.9) {
      weightStatus = "Sobrepeso";
      obesityLevel = "Obesidade grau 1";
    } else if (imc < 34.9) {
      weightStatus = "Obesidade";
      obesityLevel = "Obesidade grau 2";
    } else {
      weightStatus = "Obesidade grave";
      obesityLevel = "Obesidade grau 3";
    }

    setProfileBody([
      {
        imc,
        weightStatus,
        obesityLevel,
        height: data.height,
        weight: data.weight,
        goalWeight: data.goalWeight,
      },
    ]);

    navigate("/infos");
  };


  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar md:justify-center lg:justify-start">
      <Logo />
      <div className="flex flex-col ">
        <div className="mt-5 flex flex-col gap-3">
          <H1>
            {" "}
            Qual é a sua altura?
          </H1 >
          <div className="flex justify-center">
            <div>
              <input
                {...register("height", { required: true })}
                maxLength={3}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.height ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="number"
                placeholder="Sua altura "
              />
              {errors?.height && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A altura é obrigatório.{" "}
                </p>
              )}
            </div>
            
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <H1>
            {" "}
            Qual é o seu peso?
          </H1>
          <Paragraph> 
          Não tem problema inserir uma estimativa. <br />
          você pode atualizar posteriormente.
          </Paragraph>
          <div className="flex justify-center">
            <div>
              <input
                {...register("weight", { required: true })}
                maxLength={3}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.weight ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="number"
                placeholder="Peso atual"
              />
              {errors?.weight && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  O peso é obrigatório.{" "}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <H1>
            {" "}
            Qual é a sua <br className="hidden lg:block" /> meta de peso?
          </H1>
          <div className="flex justify-center">
            <div>
              <input
                {...register("goalWeight", { required: true })}
                maxLength={3}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.weight ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="number"
                placeholder="Meta de peso"
              />
              {errors?.goalWeight && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A meta é obrigatória.{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-row lg:relative mt-8  items-center md:items-center gap-6">
        <ButtonBack
        onClick={() => navigate(-1)}

        >
          Voltar
        </ButtonBack>
        <ButtonNext
          onClick={() => handleSubmit(onSubmit)()}
        >
          Continuar
        </ButtonNext>
      </div>
    </div>
  );
}

export default ProfileBodyPage;
