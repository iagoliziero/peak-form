import { CircleUserRound, Pencil } from "lucide-react";
import DropdownMenu from "../components/DropDownMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import H2 from "../components/H2";
import Loader from "../components/Loader";
import H2Bold from "./H2Bold";
import { api } from "../services/api";
import EditProfile from "../components/EditProfile";
import EditProfileBody from "../components/EditProfileBody";

function ProfilePage() {
  const [showProfile, setShowProfile] = useState(false);

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const [isEditProfileBodyOpen, setIsEditProfileBodyOpen] = useState(false);
  const [selectedProfileBody, setSelectedProfileBody] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [userBody, setUserBody] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/users");
      const userData = response.data;
      const userBodyData = userData.profileBodyData[0];

      const obesityLevelMapping = {
        NORMAL: "Normal",
        GRADE_1: "Obesidade Grau 1",
        GRADE_2: "Obesidade Grau 2",
        GRADE_3: "Obesidade Grau 3",
      };

      const weightStatusMapping = {
        UNDERWEIGHT: "Abaixo do Peso",
        NORMAL_WEIGHT: "Peso Normal",
        OVERWEIGHT: "Acima do Peso",
        OBESITY: "Obeso",
        SEVERE_OBESITY: "Obesidade Grave",
      };

      const translateUserBody = {
        ...userBodyData,
        weightStatus:
          weightStatusMapping[userBodyData.weightStatus] ||
          userBodyData.weightStatus,
        obesityLevel:
          obesityLevelMapping[userBodyData.obesityLevel] ||
          userBodyData.obesityLevel,
      };

      setUser(userData);
      setUserBody(translateUserBody);
    };

    getData();
  }, []);

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 custom-scrollbar">
      {/* Logo */}
      <div className="flex mt-16 gap-8">
        <span className="flex relative">
          <img
            onClick={() => navigate(`/principal`)}
            className="w-[9rem] md:w-[11rem] xl:w-[12rem] cursor-pointer"
            src="../../logo.png"
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
        {showProfile ? (
          <div className="mt-10 mb-10 flex justify-center flex-col lg:flex-row gap-10 ">
            <div className="flex justify-center items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar overflow-x-clip">
              <div className="flex flex-col items-center gap-3">
                <div className="flex mt-10">
                  <button
                    onClick={() => {
                      setIsEditProfileOpen(!isEditProfileOpen);
                      setSelectedProfile(user);
                    }}
                    className="relative left-56 lg:left-60 bottom-16"
                  >
                    <Pencil size={34} strokeWidth={2} />
                  </button>
                  <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative right-4">
                    <CircleUserRound size={150} />
                  </div>
                </div>
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  {user.name}
                </h1>
                <H2>{user.email}</H2>
                <H2>{user.date}</H2>
              </div>
              <div>
                <button
                  onClick={() => navigate(`/`)}
                  className="w-[18rem] md:w-[19rem] xxl:h-[3.5rem] h-[3.75rem] bg-red text-2xl rounded-lg hover:scale-105 transition-all font-semibold duration-[400ms] text-whiteMain"
                >
                  Sair
                </button>
              </div>
            </div>

            <div className="flex items-center flex-col w-[350px] lg:w-[400px] h-[370px] lg:h-[450px] xl:w-[400px] bg-yellowMain rounded-lg p-6 gap-5 overflow-scroll no-scrollbar overflow-x-clip">
              {userBody && (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex">
                    <button
                      onClick={() => {
                        setIsEditProfileBodyOpen(!isEditProfileBodyOpen);
                        setSelectedProfileBody(userBody);
                      }}
                      className="relative left-56 lg:left-60 bottom-16"
                    >
                      <Pencil size={34} strokeWidth={2} />
                    </button>
                    <div className="w-44 h-44 rounded-full items-center bg-whiteMain flex justify-center relative right-4">
                      <div className="flex flex-col items-center">
                        <h2 className="text-2xl">IMC</h2>
                        <h1 className="text-3xl font-semibold">
                          {userBody.imc}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-semibold">
                    {userBody.weightStatus}
                  </h1>
                  <H2>{userBody.obesityLevel}</H2>
                  <H2Bold>Altura:</H2Bold>
                  <H2>{userBody.height} cm</H2>
                  <H2Bold>Peso:</H2Bold>
                  <H2>{userBody.weight} kg</H2>
                  <H2Bold className="text-xl lg:text-2xl font-semibold">
                    Meta de peso:
                  </H2Bold>
                  <H2>{userBody.goalWeight} kg</H2>
                </div>
              )}
            </div>
            {isEditProfileOpen && selectedProfile && (
              <EditProfile
                user={user}
                onClose={() => setIsEditProfileOpen(false)}
              />
            )}

            {isEditProfileBodyOpen && selectedProfileBody && (
              <EditProfileBody
                userBody={userBody}
                onClose={() => setIsEditProfileBodyOpen(false)}
              />
            )}
          </div>
        ) : (
          <div className="w-full h-screen xxl:h-full bg-main-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-5">
            <div className="flex justify-center items-center flex-col mt-10 mb-10">
              <Loader />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
