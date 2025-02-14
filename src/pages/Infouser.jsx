import CalendarPK from "../components/CalendarPK";
import Gender from "../components/Gender";
import LocalInput from "../components/LocalInput";
import TextBolderFive from "../components/TextBolderFive";

function InfoUser() {
  return (
    <div className="h-full bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-visible">
      <div className="flex flex-col justify-center mt-16 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div className="flex-col flex gap-5">
        <div className="mt-3 flex flex-col gap-5">
          <TextBolderFive>Qual o seu gênero?</TextBolderFive>
          <Gender />
        </div>
        <div>
          <div className="mt-3 flex flex-col gap-5">
            {" "}
            <TextBolderFive>Quando você nasceu? </TextBolderFive>
            <CalendarPK />
          </div>
          <div className=" flex mt-3 justify-center items-center flex-col gap-5">
            <TextBolderFive>Onde você mora?</TextBolderFive>
            <LocalInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
