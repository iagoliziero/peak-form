import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProfileContexts } from "../contexts/ProfileContexts.jsx";
import H1 from "../components/H1.jsx";
import Paragraph from "../components/Paragraph.jsx";
import ButtonBack from "../components/ButtonBack.jsx";
import Logo from "../components/Logo.jsx";
import ButtonNext from "../components/ButtonNext.jsx";

function NamePage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {setProfile } = useContext(ProfileContexts);

  const onSubmit = (data) => {
    setProfile((prev) => ({
      ...prev,
      name: data.name,
    })),
    navigate(`/metas`);
  };

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 md:justify-center overflow-scroll no-scrollbar ">
      <Logo />
      <div>
        <div className="mt-5 flex flex-col gap-5">
          <H1>
            {" "}
            Qual é o seu nome?
          </H1>
          <Paragraph> 
          Estamos contentes com a sua presença aqui. <br />
          Vamos saber um pouco sobre você.
          </Paragraph>
          <div className="flex flex-col justify-center">
            <div>
              <input
                {...register("name", { required: true })}
                maxLength={10}
                onChange={(e) => setName(e.target.value)}
                className={`mt-10 w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3 focus:border-yellowMain ${
                  errors?.name
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Nome"
              />
            </div>
            {errors?.name && (
              <p className="text-lightRed mx-4 mt-1">
                {" "}
                Digite um nome válido.{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-12 flex flex-row lg:relative mt-8 items-center md:items-center gap-6">
        <ButtonBack onClick={() => navigate(-1)}> 
          Voltar
        </ButtonBack>
        <ButtonNext
          onClick={() => handleSubmit(onSubmit)()}
        >
          Continuar
        </ButtonNext>
      </div>
    </div>
  );
}

export default NamePage;
