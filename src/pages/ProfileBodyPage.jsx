import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ProfileBodyPage() {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/login')
  };

  return (
    <div className="h-full bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-auto">
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
