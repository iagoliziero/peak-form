import { CircleUserRound, Pencil } from "lucide-react";
import DropdownMenu from "../components/DropDownMenu";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProfileBodyContexts } from "../contexts/ProfileBodyContexts";
import { ProfileContexts } from "../contexts/ProfileContexts";
import Nav from "../components/Nav";


function ProfilePage() {
  const { profileBody } = useContext(ProfileBodyContexts);
  const navigate = useNavigate();
  const { profile } = useContext(ProfileContexts)


  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar">
      {/* Logo */}
      <div className="flex mt-16 gap-8">
        <span className="flex relative">
          <img
            onClick={() => navigate(`/principal`)}
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px] cursor-pointer"
            src="src/public/logo.png"
            alt="logo"
          />
          <span className="relative left-28 md:left-72">
            <DropdownMenu />
          </span>
        </span>
      </div>
      <Nav />
      <div className="w-full xxl:h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5 ">
        <div className="flex mt-10 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            {" "}
            Seu perfil
          </h1>
        </div>
        <div className="mt-10 mb-10 flex justify-center flex-col lg:flex-row gap-10 ">
          <div className="flex justify-center items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5">
            
              <div className="flex flex-col items-center gap-3">
                <div className="flex mt-10">
                  <button className="relative left-56 lg:left-60 bottom-16">
                    <Pencil size={34} strokeWidth={2} />
                  </button>
                  <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative right-4">
                    <CircleUserRound size={150} />
                  </div>
                </div>
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  {profile.name}
                </h1>
                <h2 className="text-xl lg:text-2xl">{profile.email}</h2>
                <h2 className="text-xl lg:text-2xl">10/04/2007</h2>
              </div>
          </div>
          <div className="flex items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar ">
          {profileBody.length > 0 && (
              <div className="flex flex-col items-center gap-3">
                <div className="flex">
                  <button className="relative left-56 lg:left-60 bottom-16">
                    <Pencil size={34} strokeWidth={2} />
                  </button>
                  <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative right-4">
                    <div className="flex flex-col items-center">
                      <h2 className="text-2xl">IMC</h2>
                      <h1 className="text-3xl font-semibold">{profileBody[0].imc}</h1>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl lg:text-3xl font-semibold">
                {profileBody[0].weightStatus}
                </h1>
                <h2 className="text-xl lg:text-2xl">{profileBody[0].obesityLevel}</h2>
                <h2 className="text-xl lg:text-2xl font-semibold">Altura:</h2>
                <h2 className="text-xl lg:text-2xl">{profileBody[0].height} cm</h2>
                <h2 className="text-xl lg:text-2xl font-semibold">Peso:</h2>
                <h2 className="text-xl lg:text-2xl">{profileBody[0].weight} kg</h2>
                <h2 className="text-xl lg:text-2xl font-semibold">
                  Meta de peso:
                </h2>
                <h2 className="text-xl lg:text-2xl">{profileBody[0].goalWeight} kg</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
