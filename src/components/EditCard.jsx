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

function EditCard({ exercise, onClose, onSave }) {
  const [form, setForm] = useState({ ...exercise });

  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="fixed inset-0  flex items-center rounded-lg justify-center bg-darker bg-opacity-50 z-50">
      <div className="bg-white w-[40rem] h-[25rem] m-10 md:h-[30rem] md:w-[30rem] items-center justify-center  rounded-lg shadow-lg overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div key={exercise.id}>
          <div className="bg-yellowMain rounded-b-none h-[4.6875rem] rounded-lg md:h-[6.25rem] ">
            <div className="flex justify-center text-center ">
              <h1 className="text-3xl p-6 md:text-4xl  lg:text-5xl items-center   text-darker text-center font-bold">
                {exercise.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-5 xl:p-8">
            <div className="flex items-center gap-3">
              <ListOrdered className="text-orange" />
              <H2InfoCards>Quantidade de séries:</H2InfoCards>
              <input
                {...register("numberSeries", { required: false })}
                type="text"
                name="numberSeries"
                value={form.numberSeries}
                onChange={handleChange}
                className="input-style border-darker"
              />
            </div>

            <div className="flex items-center gap-3">
              <Repeat className="text-orange" />
              <H2InfoCards>Repetições:</H2InfoCards>
              <input
                {...register("repetitions", { required: false })}
                type="text"
                name="repetitions"
                value={form.repetitions}
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div className="flex items-center gap-3">
              <Dumbbell className="text-orange" />
              <H2InfoCards>Técnicas avançadas:</H2InfoCards>
              <input
                {...register("advancedTechnique", { required: false })}
                type="text"
                name="advancedTechnique"
                value={form.advancedTechnique}
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div className="flex items-center gap-3">
              <BicepsFlexed className="text-orange" />
              <H2InfoCards>Intensidade:</H2InfoCards>
              <input
                {...register("intesity", {
                  validate: (value) => {
                    return value !== "0";
                  },
                })}
                type="text"
                name="intensity"
                value={form.intensity}
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Text className="text-orange" />
                <H2InfoCards>Descrição:</H2InfoCards>
              </div>
              <input
                {...register("description", { required: false })}
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="input-style resize-none"
              />
            </div>

            <div className="flex flex-col items-center gap-4 mt-4">
              <button
                className="bg-yellowMain text-darker text-xl w-[15.625rem] h-[3.125rem] rounded-lg hover:scale-105 transition"
                onClick={() => handleSubmit(onSubmit)()}
              >
                Salvar
              </button>
              <button
                className="bg-red text-white text-xl w-[15.625rem] h-[3.125rem] rounded-lg hover:scale-105 transition"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCard;