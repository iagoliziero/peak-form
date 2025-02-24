import { useContext, useState } from "react";
import { Info, Key } from "lucide-react";
import { ExerciseContext } from "../contexts/ExerciseContext";

function InfoCard({exercise}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-transparent text-center items-center justify-center"
      >
        <span className="text-center justify-center items-center ">
          <Info size={30} />
        </span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center p-4 rounded-lg justify-center bg-darker bg-opacity-50">
          <div className="bg-white w-[600px]  h-[400px] m-10 md:h-[600px] items-center justify-center  rounded-lg shadow-lg overflow-y-scroll overflow-x-hidden no-scrollbar">
                <div key={exercise.id}>
                <div className="bg-yellowMain w-full rounded-b-none h-[75px] rounded-lg md:h-[100px] ">
              <div className="flex justify-center text-center ">
                <h1 className="fetext-3xl p-4 md:text-4xl  lg:text-5xl items-center  text-darker text-center font-bold">
                    {exercise.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8">
                      <h2 className="text-xl text-darker font-bold">
                        Quantidade de séries: {""} {exercise.numberSeries}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Repetições: {exercise.repetitions}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Técnicas avançadas: <br /> {exercise.advancedTechnique}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Intensidade: {exercise.intensity}
                      </h2>
                      <h2 className="text-xl text-darker font-bold max-w-[100%] whitespace-pre-wrap">
                       Descricao: <br /> {exercise.description}
                      </h2>
                      </div>
              <div className="justify-center items-center mb-10 flex flex-col ">
                <button
                  className=" bg-red md:w-[360px] h-[50px] w-[250px] text-white  text-2xl rounded-lg  hover:scale-105 transition "
                  onClick={() => setIsOpen(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoCard;
