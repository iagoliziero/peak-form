import { useContext } from "react";
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

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const heightInMeters = data.height / 100;
    const imc = (data.weight / (heightInMeters * heightInMeters)).toFixed(2);

    const weightStatusMapping = {
      UNDERWEIGHT: "UNDERWEIGHT",
      NORMAL_WEIGHT: "NORMAL_WEIGHT",
      OVERWEIGHT: "OVERWEIGHT",
      OBESITY: "OVERWEIGHT",
      SEVERE_OBESITY: "SEVERE_OBESITY",
    };

    const obesityLevelMapping = {
      NORMAL: "NORMAL",
      GRADE_1: "GRADE_1",
      GRADE_2: "GRADE_2",
      GRADE_3: "GRADE_3",
    };

    let weightStatus = "";
    let obesityLevel = "";

    if (imc < 18.5) {
      weightStatus = weightStatusMapping.UNDERWEIGHT;
      obesityLevel = obesityLevelMapping.NORMAL;
    } else if (imc < 24.9) {
      weightStatus = weightStatusMapping.NORMAL_WEIGHT;
      obesityLevel = obesityLevelMapping.NORMAL;
    } else if (imc < 29.9) {
      weightStatus = weightStatusMapping.OVERWEIGHT;
      obesityLevel = obesityLevelMapping.GRADE_1;
    } else if (imc < 34.9) {
      weightStatus = weightStatusMapping.OBESITY;
      obesityLevel = obesityLevelMapping.GRADE_2;
    } else {
      weightStatus = weightStatusMapping.SEVERE_OBESITY;
      obesityLevel = obesityLevelMapping.GRADE_3;
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
          <H1> Qual é a sua altura?</H1>
          <div className="flex justify-center">
            <div>
              <input
                {...register("height", { required: true, maxLength: 3 })}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.height ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="number"
                placeholder="Sua altura "
              />
              {errors?.height?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A altura é obrigatório.{" "}
                </p>
              )}

              {errors?.height?.type === "maxLength" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  Ops! Use no máximo 3 caracteres.{" "}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <H1> Qual é o seu peso?</H1>
          <Paragraph>
            Não tem problema inserir uma estimativa. <br />
            você pode atualizar posteriormente.
          </Paragraph>
          <div className="flex justify-center">
            <div>
              <input
                {...register("weight", { required: true, maxLength: 3 })}
                maxLength={3}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.weight ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="number"
                placeholder="Peso atual"
              />

              {errors?.weight?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  O peso é obrigatório. {""}
                </p>
              )}

              {errors?.weight?.type === "maxLength" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  Ops! Use no máximo 3 caracteres. {""}
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
                {...register("goalWeight", { required: true, maxLength: 3 })}
                maxLength={3}
                className={`mt-5 w-[21.5rem] md:w-[20rem] h-[3.3rem]  rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.weight?.type == "required"
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="number"
                placeholder="Meta de peso"
              />

              {errors?.goalWeight?.type == "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A meta de peso é obrigatório.{" "}
                </p>
              )}

              {errors?.goalWeight?.type == "maxLength" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  Ops! Use no máximo 3 caracteres.{" "}
                </p>
              )}
            </div>
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

export default ProfileBodyPage;
