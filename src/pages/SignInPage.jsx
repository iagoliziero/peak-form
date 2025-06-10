import { Eye, EyeClosed } from "lucide-react";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import H1 from "../components/H1";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import { api } from "../services/api";

function SignIn() {

  const [isShowPasswordSignIn, setIsShowPasswordSignIn] = useState(false);
  useState(false);

  const handlePasswordSignIn = () => {
    setIsShowPasswordSignIn(!isShowPasswordSignIn);
  };

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    const token = localStorage.getItem(`token`)

    const response = await api.get('/users', {
      email: data.email,
      password: data.password,
      token
    });
    
    if(response) {
      navigate(`/principal`)
    }
  };

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar md:justify-center lg:justify-start">
      <Logo />
      <div className="flex flex-col ">
        <div className="mt-5 flex flex-col gap-3">
          <H1>
            {" "}
            Entrar em sua conta
          </H1>
          <div className="flex flex-col items-center gap-3">
            <div>
            <span className="flex items-start mb-1 ">
                <Paragraph> Seu email: </Paragraph>
                </span>
              <input
                {...register("email", {
                  required: true,
                  validate: (value) => validator.isEmail(value),
                })}
                className={` w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 ${
                  errors?.email ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="seuemail@exemplo.com"
              />
              {errors?.email?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  O e-mail é obrigatório.{" "}
                </p>
              )}
              {errors?.email?.type === "validate" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  Digite um e-mail válido.{" "}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center">
              
              <div>
              <span className="flex items-start mb-1 relative left-3">
                <Paragraph> Sua senha: </Paragraph>
                </span>
              <input
                {...register("password", {
                  required: true,
                  minLength: 7,
                })}
                className={`w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain relative left-3 focus:outline-none focus:ring-3  ${
                  errors?.password
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type={isShowPasswordSignIn ? "text" : "password"}
                placeholder="Digite sua senha "
              />
              <button
                onClick={handlePasswordSignIn}
                className="text-whiteMain relative  m-0 right-[2rem] top-1 bottom-9 "
              >
                {" "}
                {isShowPasswordSignIn && <EyeClosed />}{" "}
                {!isShowPasswordSignIn && <Eye />}{" "}
              </button>
              {errors?.passwordSignIn?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A senha é obrigatória.{" "}
                </p>
              )}
              {errors?.passwordSignIn?.type === "minLength" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A senha deve ter pelo menos 7 caracteres.{" "}
                </p>
              )}
              </div>
              
            </div>
          </div>
          <div className="mt-8 gap-3 flex flex-col items-center ">
            <button
              onClick={() => handleSubmit(onSubmit)()}
              className="w-[18rem] md:w-[19rem] xxl:h-[3.5rem] h-[3.75rem] bg-yellowMain mt-8 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold duration-[400ms]"
            >
              Entrar
            </button>
            <h2 className="text-2xl lg:text-3xl font-darker text-whiteMain font-semibold text-center">
              {" "}
              Ou
            </h2>
            <div>
              <Login />
            </div>
          </div>
          <div className="flex gap-1 mt-2 mb-12 text-xl font-darker text-whiteMain justify-center">
            <h2> Não tenho uma conta!</h2>
            <button
              onClick={() => navigate(`/nome`)}
              className="text-yellowMain hover:text-orange"
            >
              {" "}
              Criar agora.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
