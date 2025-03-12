import { useForm } from "react-hook-form";
import DropdownMenu from "../components/DropDownMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import H1 from "../components/H1";

function BasalPage() {

  const navigate = useNavigate()

  const [result, setResult] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const {height, currentWeight, age, gender} = data
    let tmb = 0
    switch(gender) {
      case 'masculino': 
      tmb = 88.36 + (13.4 * currentWeight) + (4.8 * height) - (5.7 * age)
      break;
      case 'feminino': tmb = 447.6 + (9.2 * currentWeight) + (3.1 * height) - (4.3 * age)
      break;
      default: 'Inválido'
    }

    setResult(tmb.toFixed(2))
    reset({
      height: '',
      currentWeight: '',
      age: '',
      gender: 'selecionar'
    });
  };

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar">
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
      <div className="w-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5 ">
        <div className="flex mt-10 flex-col gap-3 ">
          <H1>
            {" "}
            Taxa metabólica basal
          </H1>
          <Paragraph>
            {" "}
            A Taxa Metabólica Basal (TMB) representa{" "}
            <br className="block md:hidden" /> o total de calorias que o corpo
            gasta para <br /> manter funções vitais, como batimentos{" "}
            <br className="block md:hidden" /> cardíacos, respiração, pressão
            arterial <br className="" /> e temperatura corporal, mesmo estando
            em <br className="block md:hidden" /> repouso absoluto.{" "}
          </Paragraph>
        </div>
        <div className="flex flex-col mb-12 justify-center items-center ">
          <div className="flex flex-col">
            <input
    
              {...register("height", { required: true })}
              maxLength={10}
              className={`mt-5 w-[20rem] md:w-[21.875rem] md:h-[3.4375rem] h-[3.125rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                errors?.height ? "border-lightRed" : "focus:border-yellowMain"
              }`}
              type="number"
              placeholder="Altura"
            />
            {errors?.height?.type === "required" && (
              <p className="text-lightRed mx-4 mt-1">
                {" "}
                A altura é obrigatório.{" "}
              </p>
            )}
            <div></div>
          </div>
          <div className="flex flex-col">
            <input
            
              {...register("currentWeight", { required: true })}
              maxLength={10}
              className={`mt-5 w-[20rem] md:w-[21.875rem] md:h-[3.4375rem] h-[3.125rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                errors?.currentWeight
                  ? "border-lightRed"
                  : "focus:border-yellowMain"
              }`}
              type="number"
              placeholder="Peso atual"
            />
            {errors?.currentWeight?.type === "required" && (
              <p className="text-lightRed mx-4 mt-1">
                {" "}
                O peso atual é obrigatório.{" "}
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <input
              {...register("age", { required: true })}
              maxLength={10}
              className={`mt-5 w-[20rem] md:w-[21.875rem] md:h-[3.4375rem] h-[3.125rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                errors?.age ? "border-lightRed" : "focus:border-yellowMain"
              }`}
              type="number"
              placeholder="Idade"
            />
            {errors?.currentWeight?.type === "required" && (
              <p className="text-lightRed mx-4 mt-1">
                {" "}
                A idade é obrigatório.{" "}
              </p>
            )}
          </div>
          <div className="flex mt-10 flex-col gap-3">
            <H1>
              {" "}
              Qual é o seu gênero?{" "}
            </H1>
          </div>
          <div className="mt-8">
            <select
              {...register('gender', {validate: (value) => {
                return value !== 'selecionar'
              }})}
              className={`w-[18.75rem] p-4 border border-gray rounded-md bg-darker text-white text-xl focus:outline-none focus:ring-2 focus:ring-yellowMain ${errors?.gender ?"border-lightRed" : "focus:border-yellowMain" }`}
            >
              <option value="selecionar"> Selecionar </option>
              <option value="masculino"> Masculino </option>
              <option value="feminino"> Feminino </option>
            </select>
            {errors?.gender?.type === "validate" && <p className="text-lightRed mx-4 mt-1"> O gênero está inválido. </p>}
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="mt-5">
              <Button
                onClick={() => handleSubmit(onSubmit)()}
              >
                {" "}
                Calcular{" "}
              </Button>

            </div>
            <h2 className="text-2xl text-whiteMain font-semibold">
              {" "}
              Resultado:{" "}
            </h2>
            <h1 
            
            className="text-3xl md:text-4xl font-semibold text-yellowMain">
              {result ? `${result } kcal/dia` : ''}
              
            </h1>
          </div>
          <div className="flex justify-center mt-8">
            <Paragraph>
              {" "}
              É importante entender que a TMB não é{" "}
              <br className="block md:hidden" /> um número exato. Ela é apenas
              uma estimativa, <br />
              pois fatores como genética, hormônios e rotina{" "}
              <br className="block md:hidden" /> influenciam o gasto real de
              calorias.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasalPage;
