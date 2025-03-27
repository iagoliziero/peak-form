import { Eye, EyeClosed, Parentheses } from "lucide-react";
import { stringify } from "postcss";
import { useContext, useState } from "react";
import { set, useForm } from "react-hook-form";
import validator from 'validator'
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { ProfileContexts } from "../contexts/ProfileContexts";
import Logo from "../components/Logo";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";

function LoginPage() {
  const navigate = useNavigate()

  const {setProfile} = useContext(ProfileContexts)

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
    setProfile((prev) => ({
      ...prev, 
      email: data.email,
    }))
    navigate(`/principal`)
  }
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar md:justify-center lg:justify-start">
      <Logo />
      <div className="flex flex-col ">
        <div className="mt-5 flex flex-col gap-3">
          <H1> Quase lá! Crie a sua conta</H1>
          <div className="flex flex-col items-center gap-3">
            <div>
            
                <span className="flex items-start mb-1">
                <Paragraph> Seu email: </Paragraph>
                </span>
             
              <input
                {...register("email", { required: true, validate: (value) => validator.isEmail(value)})}
                className={`mt- w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.email ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type={isShowPassword ? "password" : "text"}
                placeholder="seuemail@exemplo.com "
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
              <span className="flex items-start mb-1 relative left-2">
                <Paragraph> Sua senha: </Paragraph>
                </span>
              <input
                {...register("password", { required: true, minLength: 7 })}

                className={` w-[21.5rem] md:w-[20rem] h-[3.3rem]  relative left-3 md:h-[3.4375rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.password
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type={isShowPassword ? "password" : "text"}
                placeholder="Criar uma senha "
              />
              
              <button 
              onClick={handlePassword}
              className="text-whiteMain relative  m-0 right-[2rem] top-1 bottom-9 "> {isShowPassword && <EyeClosed />} {!isShowPassword && <Eye />}  </button>
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
               
               
              
            </div>
            <div>
            <span className="flex items-start mb-1 mt-2 relative left-2">
                <Paragraph> Confirmar senha: </Paragraph>
                </span>
              <input
                {...register("passwordConfirmation", { required: true, validate: (value) => value ===watchPassword })}
                className={`w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain relative left-3 focus:outline-none focus:ring-3  ${
                  errors?.passwordConfirmation
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type={isShowPasswordConfirmation ? "password" : "text"}
                placeholder="Confirmar senha "
                
              />
              <button 
              onClick={handlePasswordConfirmation}
              className="text-whiteMain relative  m-0 right-[2rem] top-1 bottom-9 "> {isShowPasswordConfirmation && <EyeClosed />} {!isShowPasswordConfirmation && <Eye />}  </button>
              
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
           
          </div>
          <div className="flex justify-start mt-2">
              <Paragraph> 
              Deve ter pelo menos 7 caracteres, <br className="md:hidden" /> sem espaço.
              </Paragraph>
            </div>
          <div className="mt-5 gap-3 flex flex-col items-center "> 
            <button
            
            onClick={() => handleSubmit(onSubmit)()}
            className="w-[18rem] md:w-[19rem] xxl:h-[3.5rem] h-[3.75rem] bg-yellowMain mt-8 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold duration-[400ms]"
          >
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
            <Paragraph> 
             Já tenho uma conta!
            </Paragraph>
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
