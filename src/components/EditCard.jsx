import { useState } from "react";
import {
  BicepsFlexed,
  Dumbbell,
  ListOrdered,
  Repeat,
  Text,
} from "lucide-react";
import H2InfoCards from "./H2InfoCards";
import H2 from "./H2";
import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { api } from "../services/api";
import { apiFunctions } from "../services/exercise-services";
import { useNavigate } from "react-router-dom";

function EditCard({ exercise, onClose, onSave }) {
  const [form, setForm] = useState({ ...exercise });

  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    const response = apiFunctions.updateExercise(data, exercise.id);
    if(response) {
      window.location.reload()
    }
  };

  return (
    <div className="fixed inset-0  flex items-center rounded-lg justify-center bg-darker bg-opacity-50 z-50">
      <div className="bg-white max-w-[30rem] h-[25rem] m-10 md:h-[30rem] md:w-[30rem] items-center justify-center  rounded-lg shadow-lg overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div key={exercise.id}>
          <div className="bg-yellowMain rounded-b-none h-[4.6875rem] rounded-lg md:h-[6.25rem] ">
            <div className="flex justify-center text-center ">
              <h1 className="text-3xl p-6 md:text-4xl  lg:text-5xl items-center   text-darker text-center font-bold">
                {exercise.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-5 xl:p-8">
            <div className="flex flex-col gap-3">
             <div className="flex flex-row items-center gap-3">
             <ListOrdered className="text-orange" />
             <H2InfoCards>Quantidade de séries:</H2InfoCards>
             </div>
              <input
                {...register("numberSeries", { required: false})}
                value={form.numberSeries}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3`}
                type="text"
                onChange={handleChange}
              />
  
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3">
              <Repeat className="text-orange" />
              <H2InfoCards>Repetições:</H2InfoCards>
              </div>
              <input
                {...register("repetitions", { required: false })}
                type="text"
                name="repetitions"
                value={form.repetitions}
                onChange={handleChange}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3`}
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3">
              <Dumbbell className="text-orange" />
              <H2InfoCards>Técnicas avançadas:</H2InfoCards>
              </div>
              <input
                {...register("advancedTechnique", { required: false })}
                type="text"
                name="advancedTechnique"
                value={form.advancedTechnique}
                onChange={handleChange}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl tig p-4 text-dark focus:outline-none focus:ring-3`}
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3"> 
                <BicepsFlexed className="text-orange" />
                <H2InfoCards>Intensidade:</H2InfoCards>
              </div>
              <select
              value={form.intensity}
              {...register('intensity')}
              className={`max-w-[20rem] md:w-[20rem] p-2 rounded-md bg-whiteMain border right-10 border-gray text-3xl text-dark focus:outline-none focus:ring-3`}
            >
              <option value="HEAVY"> Pesado </option>
              <option value="MODERATE"> Moderado </option>
              <option value="LIGHT"> Leve </option>
            </select>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3">
              <Text className="text-orange" />
              <H2InfoCards>Descrição</H2InfoCards>
              </div>
              <input
                {...register("description", { required: false })}
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl tig p-4 text-dark focus:outline-none focus:ring-3`}
              />
            </div>

            <div className="flex flex-col items-center gap-4 mt-4">
              <button
                className="bg-yellowMain md:w-[22.5rem] h-[3.125rem] w-[15.625rem] text-white  text-2xl rounded-lg  hover:scale-105 transition "
                onClick={() => handleSubmit(onSubmit)()
                  
                }
              >
                Salvar
              </button>
              <div className="justify-center items-center flex flex-col ">
                <button
                  className=" bg-red md:w-[22.5rem] h-[3.125rem] w-[15.625rem] text-white  text-2xl rounded-lg  hover:scale-105 transition "
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

export default EditCard;