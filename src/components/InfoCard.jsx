import { useContext, useState } from "react";
import { Info, Key } from "lucide-react";
import { ExerciseContext } from "../contexts/ExerciseContext";

function InfoCard() {
  const [isOpen, setIsOpen] = useState(false);
  const { exercise } = useContext(ExerciseContext);
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
            {exercise?.map((exer) => (
                <div key={exer.id}>
                <div className="bg-yellowMain w-full rounded-b-none h-[75px] rounded-lg md:h-[100px] ">
              <div className="flex justify-center text-center items-center">
                <h1 className="text-3xl p-4 md:text-4xl  lg:text-5xl text-darker text-center font-bold">
                    {exer.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-5">
                      <h2 className="text-xl text-darker font-bold">
                        Quantidade de séries: {""} {exer.numberSeries}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Repetições: {exer.repetitions}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Técnicas avançadas: <br /> {exer.advancedTechnique}
                      </h2>
                      <h2 className="text-xl text-darker font-bold">
                        Intensidade: {exer.intensity}
                      </h2>
                      <h2 className="text-xl text-darker font-bold max-w-[100%] whitespace-pre-wrap">
                       Descricao: <br /> {exer.description}
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

            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default InfoCard;
