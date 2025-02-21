import { Eye, EyeClosed } from "lucide-react";
import { stringify } from "postcss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from 'validator'
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowPasswordConfirmation, setIsShowPasswordConfirmation] = useState(false)

  const handlePassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handlePasswordConfirmation = () => {
    setIsShowPasswordConfirmation(!isShowPasswordConfirmation)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const watchPassword = watch('password')

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    navigate(`/principal`)
  }
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar lg:justify-center">
      <div className=" flex flex-col justify-center mt-12 gap-8">
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
            Quase lá! Crie a sua conta
          </h1>
          <div className="flex flex-col items-center mt-10">
            <div>
              <input
                {...register("email", { required: true, validate: (value) => validator.isEmail(value)})}
                
                className={`mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.email ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Endereço de e-mail "
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
            <div>
              <input
                {...register("password", { required: true, minLength: 7 })}

                className={`mt-5 w-[320px] relative left-3 md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.password
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type={isShowPassword ? "password" : "text"}
                placeholder="Criar uma senha "
              />
              <button 
              onClick={handlePassword}
              className="text-whiteMain relative  m-0 right-[50px] top-1 bottom-9 "> {isShowPassword && <EyeClosed />} {!isShowPassword && <Eye />}  </button>
              {errors?.password?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A senha é obrigatória.{" "}
                </p> )}
                {errors?.password?.type === "minLength" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A senha deve ter pelo menos 7 caracteres.{" "}
                </p> )}
                
            </div>
            <div>
              <input
                {...register("passwordConfirmation", { required: true, validate: (value) => value ===watchPassword })}
                className={`mt-5 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain relative left-3 focus:outline-none focus:ring-3  ${
                  errors?.passwordConfirmation
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type={isShowPasswordConfirmation ? "password" : "text"}
                placeholder="Confirmar senha "
                
              />
              <button 
              onClick={handlePasswordConfirmation}
              className="text-whiteMain relative  m-0 right-[50px] top-1 bottom-9 "> {isShowPasswordConfirmation && <EyeClosed />} {!isShowPasswordConfirmation && <Eye />}  </button>
              
              {errors?.passwordConfirmation?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A confirmação é obrigatória.{" "}
                </p>
              )}
              {errors?.passwordConfirmation?.type === "validate" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  As senhas não se coincidem.{" "}
                </p>
              )}
            </div>
            <div className="flex justify-start mt-3">
                <p className="text-center text-xl  text-whiteMain">Deve ter pelo menos 7 caracteres, <br className="md:hidden" /> sem espaço. </p>
            </div>
          </div>
          <div className="mt-8 gap-3 flex flex-col items-center ">
            <button
            
            onClick={() => handleSubmit(onSubmit)()}
            className="w-[300px] md:w-[360px] h-[60px] bg-yellowMain mt-8 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold">
              Continuar
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
            <h2> Já tenho uma conta!</h2>
            <button 
            onClick={() => navigate(`/signin`)}
            className="text-yellowMain hover:text-orange"> Entrar.</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
