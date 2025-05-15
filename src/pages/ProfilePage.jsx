import { CircleUserRound, Pencil } from "lucide-react";
import DropdownMenu from "../components/DropDownMenu";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProfileBodyContexts } from "../contexts/ProfileBodyContexts";
import { ProfileContexts } from "../contexts/ProfileContexts";
import Nav from "../components/Nav";
import { NameContext } from "../contexts/NameContexts";
import H2 from "../components/H2";
import H2Bold from "./H2Bold";
import { api } from "../services/api";


function ProfilePage() {
  const { profileBody } = useContext(ProfileBodyContexts);
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(ProfileContexts)
  const { name } = useContext(NameContext)
  useEffect(() => {
    console.log("Profile Data:", profile); // Verifique se name está atualizado
  }, [profile]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/users');
      setProfile(response.data);
    }

    getData();
  })

  return (
    
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar">
      {/* Logo */}
      <div className="flex mt-16 gap-8">
        <span className="flex relative">
        <img
          onClick={() => navigate(`/principal`)}
            className="w-[9rem] md:w-[11rem] xl:w-[12rem] cursor-pointer"
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
          <div className="flex justify-center items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar">
            
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
                {name.name}
                </h1>
                <H2>{profile.email}</H2>
                <H2>{profile.date}</H2>
              </div>
              <div>
              <button className="w-[18rem] md:w-[19rem] xxl:h-[3.5rem] h-[3.75rem] bg-red text-2xl rounded-lg hover:scale-105 transition-all font-semibold duration-[400ms]">
                  Sair
              </button>
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
                <H2>{profileBody[0].obesityLevel}</H2>
                <H2Bold>Altura:</H2Bold>
                <H2>{profileBody[0].height} cm</H2>
                <H2Bold>Peso:</H2Bold>
                <H2>{profileBody[0].weight} kg</H2>
                <H2Bold className="text-xl lg:text-2xl font-semibold">
                  Meta de peso:
                </H2Bold>
                <H2 className="text-xl lg:text-2xl">{profileBody[0].goalWeight} kg</H2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
