import {useForm } from "react-hook-form";
import Gender from "../components/Gender";
import LocalInput from "../components/LocalInput";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import H1 from "../components/H1";
import ButtonNext from "../components/ButtonNext";
import ButtonBack from "../components/ButtonBack";

import ReactInputMask from "react-input-mask";
import { useContext } from "react";
import { ProfileContexts } from "../contexts/ProfileContexts";

function InfoUserPage() {

  const {setProfile} = useContext(ProfileContexts)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setProfile((prev) => ({
      ...prev,
      date: data.date,
    }))
    navigate(`/login`);
  };

  const navigate = useNavigate();
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar md:justify-center lg:justify-start">
      <Logo />
      <div className="flex-col flex gap-5">
        <div className="mt-5 flex flex-col gap-5">
          <H1>Qual é o seu gênero?</H1>

          <Gender />
        </div>
        <div>
          <div className=" flex flex-col gap-5 ">
            {" "}
            <H1>Quando você nasceu?</H1>
            <ReactInputMask
              {...register("date", { required: true })}
              className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                errors?.date ? "border-lightRed" : "focus:border-yellowMain"
              }`}
              mask="99/99/9999"
              placeholder="Data de nascimento"
              maskChar=""
            />
            
          </div>
          {errors?.date?.type === "required" && (
              <p className="text-lightRed mx-4 mt-1">
                {" "}
                Digite sua data de nascimento.{" "}
              </p>)}
          <div className=" flex justify-center items-center flex-col gap-5 mt-5">
            <H1>Onde você mora?</H1>

            <LocalInput />
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-row lg:relative mt-8  items-center md:items-center gap-6">
        <ButtonBack onClick={() => navigate(-1)}>Voltar</ButtonBack>
        <ButtonNext onClick={() => handleSubmit(onSubmit)()}>
          Continuar
        </ButtonNext>
      </div>
    </div>
  );
}

export default InfoUserPage;
