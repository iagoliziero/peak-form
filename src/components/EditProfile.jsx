import { useState } from "react";
import {
  BicepsFlexed,
  Dumbbell,
  ListOrdered,
  Repeat,
  Text,
} from "lucide-react";
import H2InfoCards from "./H2InfoCards";
import { useForm } from "react-hook-form";
import { apiFunctions } from "../services/exercise-services";
import { useNavigate } from "react-router-dom";
import { apiProfile } from "../services/profile-service";
import ReactInputMask from "react-input-mask";

function EditProfile({ user, onClose, onSave }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({ ...user });

  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    const response = apiProfile.updateProfile(data, user.id)
    if(response) {
      navigate('/perfil-atualizado');
    }
  };

  return (
    <div className="fixed inset-0  flex items-center rounded-lg justify-center bg-darker bg-opacity-50 z-50">
      <div className="bg-white max-w-[30rem] h-[25rem] m-10 md:h-[30rem] md:w-[30rem] items-center justify-center  rounded-lg shadow-lg overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div key={user.id}>
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
             <H2InfoCards>Seu email:</H2InfoCards>
             </div>
              <input
                {...register("name", { required: false})}
                value={form.name}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3`}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-3">
             <div className="flex flex-row items-center gap-3">
             <H2InfoCards>Seu email:</H2InfoCards>
             </div>
              <input
                {...register("email", { required: false})}
                value={form.email}
                className={`max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3`}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-3">
             <div className="flex flex-row items-center gap-3">
             <H2InfoCards>Data ne nascimento:</H2InfoCards>
             </div>
             <ReactInputMask
              {...register("date", { required: false })}
              className="max-w-[20rem] md:w-[20rem] h-[3.3rem] rounded-md bg-whiteMain border border-gray text-3xl p-4 text-dark focus:outline-none focus:ring-3"
              mask="99/99/9999"
              value={form.date}
              placeholder="Data de nascimento"
              onChange={handleChange}
              maskChar=""
            />
            </div>

            <div className="flex flex-col items-center gap-4 mt-4">
              <button
                className="bg-yellowMain md:w-[22.5rem] h-[3.125rem] w-[15.625rem] text-darker text-2xl rounded-lg font-bold  hover:scale-105 transition  "
                onClick={() => handleSubmit(onSubmit)()
                  
                }
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

export default EditProfile;