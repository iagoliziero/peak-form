import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InfoUser() {
  const [selectedGender, setSelectedGender] = useState("");

  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-visible">
      <div className="flex flex-col justify-center mt-16 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <h1 className=" text-5xl leading-relaxed mb-2 md:text-4xl  text-whiteMain text-center font-semibold">
          Qual o seu gênero?
        </h1>
        <div className="flex flex-col justify-center text-whiteMain   items-center ">
          {["Masculino", "Feminino"].map((gender) => (
            <label
              key={gender}
              className="flex-row flex items-center font-bolder  text-xl m-1  gap-5 cursor-pointer"
            >
              <div
                className={`w-[20px] h-[20px] rounded-full  items-center justify-center transition-all duration-400 border-4
                   ${
                     selectedGender === gender
                       ? "bg-yellowMain border-yellowMain"
                       : "bg-darker border-gray-500"
                   }`}
              />
              <span className="text-3xl">{gender}</span>
              {/*input escondido */}
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={selectedGender === gender}
                onChange={() => setSelectedGender(gender)}
                className="hidden"
              />
            </label>
          ))}
        </div>
      </div>
      <div>
        <div className="relative">
          {" "}
          <h1 className=" text-5xl leading-relaxed mb-2 md:text-4xl  text-whiteMain text-center font-semibold">
            Quando você nasceu?{" "}
          </h1>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione uma data"
            className="mt-10 w-[320px] m-20 items-center justify-center md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-white font-medium  "
            showPopperArrow={false}
            portalId="root"
            withPortal
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={102}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
