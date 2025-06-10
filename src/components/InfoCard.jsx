import { useState } from "react";
import {
  BicepsFlexed,
  Dumbbell,
  Info,
  Key,
  ListOrdered,
  Repeat,
  Text,
} from "lucide-react";
import { ExerciseContext } from "../contexts/ExerciseContext";
import H2InfoCards from "./H2InfoCards";
import H2 from "./H2";

function InfoCard({ exercise }) {
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

              <div className="flex  flex-col gap-6 p-5 xl:p-8">
                <div className="flex items-center">
                  <div className="xxl:flex xxl:gap-3">
                    <div className="flex items-center">
                      <span className="text-xl text-orange ">
                        <ListOrdered />
                      </span>
                      <H2InfoCards> Quantidade de séries: </H2InfoCards>
                    </div>
                    <H2>{exercise.numberSeries}</H2>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-xl text-orange ">
                    <Repeat />
                  </span>
                  <div className="flex items-center gap-3">
                    <H2InfoCards> Repetições: </H2InfoCards>
                    <H2 className="text-xl text-darker  relative left-3">
                      {exercise.repetitions}
                    </H2>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="xxl:flex xxl:gap-3">
                    <div className="flex  items-center">
                      <span className="text-xl text-orange ">
                        <Dumbbell />
                      </span>
                      <H2InfoCards> Técnicas avançadas: </H2InfoCards>
                    </div>
                    <H2 className="text-xl text-darker xxl:relative xxl:left-3">
                      {exercise.advancedTechnique}
                    </H2>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-xl text-orange ">
                    <BicepsFlexed />
                  </span>
                  <div className="flex items-center gap-3">
                    <H2InfoCards> Intensidade: </H2InfoCards>
                    <H2 className="text-xl text-darker  relative left-3">
                      {exercise.intensity}
                    </H2>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className=" ">
                    <div className="flex  items-center">
                      <span className="text-xl text-orange ">
                        <Text />
                      </span>
                      <H2InfoCards> Descrição: </H2InfoCards>
                    </div>
                    <h2 className="text-xl lg:text-2xl  xxl:relative  text-darker  max-w-[100%] whitespace-pre-wrap">
                      {exercise.description}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="justify-center items-center mb-10 flex flex-col ">
                <button
                  className=" bg-red md:w-[22.5rem] h-[3.125rem] w-[15.625rem] text-white  text-2xl rounded-lg  hover:scale-105 transition "
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
