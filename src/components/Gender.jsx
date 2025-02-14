import { useState } from "react";

function Gender() {
  const [selectedGender, setSelectedGender] = useState("");

  return (
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
  );
}

export default Gender;
