import { data } from "autoprefixer";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProfileBodyContexts } from "../contexts/ProfileBodyContexts";

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
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar">
      <div className="flex flex-col justify-center mt-16 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div className="flex flex-col ">
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é a sua altura?
          </h1>
          <div className="flex justify-center">
            <div>
              <input
                {...register("height", { required: true })}
                maxLength={3}
                className={`mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é o seu peso?
          </h1>
          <span className="mt-2 text-center text-xl  text-whiteMain">
            <p>
              Não tem problema inserir uma estimativa. <br />
              você pode atualizar posteriormente.
            </p>
          </span>
          <div className="flex justify-center">
            <div>
              <input
                {...register("weight", { required: true })}
                maxLength={3}
                className={`mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é a sua <br className="hidden lg:block" /> meta de peso?
          </h1>
          <div className="flex justify-center">
            <div>
              <input
                {...register("goalWeight", { required: true })}
                maxLength={3}
                className={`mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
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
      <div className="flex flex-row  lg:relative items-center md:items-center gap-6 ">
        <button
        onClick={() => navigate(-1)}
          className="w-[170px] hidden md:block  md:w-[220px] h-[60px]
                        border border-yellowMain text-yel mb-12 text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold"
        >
          Voltar
        </button>
        <button
          onClick={() => handleSubmit(onSubmit)()}
          className="w-[300px] md:visible-false md:w-[220px] h-[60px]
                        bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default ProfileBodyPage;
