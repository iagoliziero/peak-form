import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../global.css'



function Calendar() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Selecione uma data"
      className="mt-5 w-[320px] m-10 items-center justify-center md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl p-4 text-white font-medium  "
      showPopperArrow={false}
      portalId="root"
      withPortal
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={70}
      maxDate={new Date()}
    />
  );
}

export default Calendar;
