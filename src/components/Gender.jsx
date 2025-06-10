import { useState } from "react";

function Gender({ setValue, errors }) {
  const [selectedGender, setSelectedGender] = useState("");
  const handleSelect = (gender) => {
    setSelectedGender(gender);
    setValue("gender", gender, { shouldValidate: true });
  };
  return (
    <div className="flex flex-col justify-center text-whiteMain   items-center ">
      {["Masculino", "Feminino"].map((gender) => (
        <label
          key={gender}
          className="flex-row flex items-center font-bolder  text-xl m-2  gap-5 cursor-pointer"
        >
          <div
            className={`w-[1.25rem] h-[1.25rem] rounded-full  items-center justify-center transition-all duration-400 border-4
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
      {errors?.gender && (
        <p className="text-lightRed mx-4 mt-1"> O gender é obrigatório. </p>
      )}
    </div>
  );
}

export default Gender;
