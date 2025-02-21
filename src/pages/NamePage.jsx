import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NameUserContext } from "../contexts/NameUserContexts.jsx";

function NamePage() {
  const navigate = useNavigate()

  const {register, handleSubmit, formState:  {errors}} = useForm()
  const { nameUser, setNameUser } = useContext(NameUserContext);

  const onSubmit = (data) => {
    console.log(data.nameUser)
    navigate(`/metas`)
    console.log(nameUser)
  }

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 lg:justify-center overflow-scroll no-scrollbar ">
      <div className=" flex flex-col justify-center mt-16 lg:mt-0 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div>
        <div className="mt-5 flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Qual é o seu nome?
          </h1>
          <span className="text-center text-xl  text-whiteMain">
            {" "}
            <p>
              {" "}
              Estamos contentes com a sua presença aqui. <br />
              Vamos saber um pouco sobre você.
            </p>{" "}
          </span>
          <div className="flex flex-col justify-center">
            <div>
              <input
              {...register('nameUser', {required: true})}
                maxLength={10}
                value={nameUser}
                onChange={(e) => setNameUser(e.target.value)}
                className={ `mt-10 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${errors?.nameUser ? "border-lightRed" : "focus:border-yellowMain" }`  
                
                }
                type="text"
                placeholder="Nome"
              />
            </div>
            {errors?.nameUser && <p className="text-lightRed mx-4 mt-1"> Digite um nome válido. </p>}
          </div>
        </div>
      </div>
      <div className="flex flex-row relative top-64 lg:top-40 lg:relative mt-8 items-center md:items-center gap-6 ">
        <button
        onClick={() => navigate(-1)}
          className="w-[170px] hidden md:block  md:w-[220px] h-[60px]
                    border border-yellowMain text-yel mb-12 text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold"
        >
          Voltar
        </button>
        <button
        onClick={()=> handleSubmit(onSubmit)()}
          className="w-[300px] md:visible-false md:w-[220px] h-[60px]
        bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
>
          Continuar
        </button>
      </div>
    </div>
  );
}

export default NamePage;
