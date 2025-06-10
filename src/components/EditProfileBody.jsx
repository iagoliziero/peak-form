import { useState } from "react";
import H2InfoCards from "./H2InfoCards";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiProfileBody } from "../services/profileBody-service";

function EditProfileBody({ userBody, onClose, onSave }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({ ...userBody });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {
    const response = await apiProfileBody.updateProfileBody(data, userBody.id);

    const obesityLevelMapping = {
      NORMAL: "Normal",
      GRADE_1: "Obesidade Grau 1",
      GRADE_2: "Obesidade Grau 2",
      GRADE_3: "Obesidade Grau 3",
    };

    const weightStatusMapping = {
      UNDERWEIGHT: "Abaixo do Peso",
      NORMAL_WEIGHT: "Peso Normal",
      OVERWEIGHT: "Acima do Peso",
      OBESITY: "Obeso",
      SEVERE_OBESITY: "Obesidade Grave",
    };

    if (response) {
      navigate("/perfil-atualizado");
    }
  };

  return (
    <div className="fixed inset-0  flex items-center rounded-lg justify-center bg-darker bg-opacity-50 z-50">
      <div className="bg-white max-w-[30rem] h-[25rem] m-10 md:h-[30rem] md:w-[30rem] items-center justify-center  rounded-lg shadow-lg overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div key={userBody.id}>
          <div className="bg-yellowMain rounded-b-none h-[4.6875rem] rounded-lg md:h-[6.25rem] ">
            <div className="flex justify-center text-center ">
              <h1 className="text-3xl p-6 md:text-4xl  lg:text-5xl items-center   text-darker text-center font-bold">
                Atualizar Perfil
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-5 xl:p-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3">
                <H2InfoCards>Sua altura:</H2InfoCards>
              </div>
              <input
                {...register("height", { required: false, maxLength: 3 })}
                value={form.height}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3`}
                type="number"
                onChange={handleChange}
              />
              {errors?.height?.type === "maxLength" && (
                <p className="text-lightRed mt-1">
                  {" "}
                  Ops! Use no máximo 3 caracteres.{" "}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3">
                <H2InfoCards>Seu peso:</H2InfoCards>
              </div>
              <input
                {...register("weight", { required: false, maxLength: 3 })}
                value={form.weight}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3`}
                type="number"
                onChange={handleChange}
              />
              {errors?.weight?.type === "maxLength" && (
                <p className="text-lightRed mt-1">
                  {" "}
                  Ops! Use no máximo 3 caracteres.{" "}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3">
                <H2InfoCards>Qual sua meta de peso:</H2InfoCards>
              </div>
              <input
                {...register("goalWeight", { required: false, maxLength: 3 })}
                value={form.goalWeight}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3`}
                type="number"
                onChange={handleChange}
              />
              {errors?.goalWeight?.type === "maxLength" && (
                <p className="text-lightRed mt-1">
                  {" "}
                  Ops! Use no máximo 3 caracteres.{" "}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center gap-4 mt-4">
              <button
                className="bg-yellowMain md:w-[22.5rem] h-[3.125rem] w-[15.625rem] text-darker text-2xl rounded-lg font-bold  hover:scale-105 transition  "
                onClick={() => handleSubmit(onSubmit)()}
              >
                Salvar
              </button>
              <div className="justify-center items-center flex flex-col ">
                <button
                  className=" bg-red md:w-[22.5rem] h-[3.125rem] w-[15.625rem] text-whiteMain font-bold  text-2xl rounded-lg  hover:scale-105 transition "
                  onClick={onClose}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileBody;
