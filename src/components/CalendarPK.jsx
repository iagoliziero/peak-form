import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarPK() {
  const [selectedDate, setSelectedDate] = useState("");
  // const [error, setError] = useState("");

  // const hoje = new Date();
  // const minIdade = new Date(
  //   today.getFullYear() - 13,
  //   today.getMonth(),
  //   today.getDate()
  // );
  return (
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
      maxDate={new Date()}
    />
  );
}

export default CalendarPK;
