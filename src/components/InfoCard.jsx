import { useState } from "react";
import { Info } from "lucide-react";

function InfoCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full w-[50px] bg-yellowMain text-center items-center justify-center h-[50px] shadow-md hover:scale-105"
      >
        <span className="text-center justify-center items-center ">
          <Info />
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center rounded-lg justify-center bg-darker bg-opacity-50">
          <div className="bg-white w-[500px] md:w-[800px] md:h-[600px] items-center justify-center h-[300px] rounded-lg shadow-lg">
            <div className="bg-yellowMain w-full rounded-b-none rounded-lg h-[100px] ">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl p-4 md:text-4xl lg:text-5xl text-darker text-center font-bold">
                  Titulo
                </h1>
              </div>
            </div>

            <div className="p-5 flex-col justify-center items-center">
              <h1 className="m-5 text-2xl md:text-3xl lg:text-4xl text-darker font-bold text-left ">
                {" "}
                Ex 1{" "}
              </h1>
              <h1 className="m-5 text-2xl md:text-3xl lg:text-4xl text-darker font-bold text-left ">
                {" "}
                Ex 1{" "}
              </h1>
              <h1 className="m-5 text-2xl md:text-3xl lg:text-4xl text-darker font-bold text-left ">
                {" "}
                Ex 1{" "}
              </h1>
              <h1 className="m-5 text-2xl md:text-3xl lg:text-4xl text-darker font-bold text-left ">
                {" "}
                Ex 1{" "}
              </h1>
              <h1 className="m-5 text-2xl md:text-3xl lg:text-4xl text-darker font-bold text-left ">
                {" "}
                Ex 1{" "}
              </h1>
            </div>
            <div className="justify-center relative items-center flex flex-col ">
              <button
                className=" bg-red text-white mt-10 text-2xl rounded-lg  hover:scale-105 transition h-[50px] w-[300px]"
                onClick={() => setIsOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoCard;
