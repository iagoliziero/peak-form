
import { GoogleLogin } from "@react-oauth/google";
import handleGoogleLogin from "../services/googleAuthService";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProfileContexts } from "../contexts/ProfileContexts";



export default function Login() {
  const [user, setUser] = useState(null);
  const {setProfile} = useContext(ProfileContexts)
  const navigate = useNavigate()

  return (
    <div className="flex items-center  ">
      {!user ? (
        <GoogleLogin
          onSuccess={(response) => {
            const userData = handleGoogleLogin(response);
            setUser(userData);
            setProfile((prev) => ({
              ...prev,
              email: userData.email
            }))
            navigate(`/principal`)
          }}
          onError={() => console.log("Erro ao fazer login")}
          useOneTap
          width={310}
          shape="square"
        theme="outline"
        />
      ) : (
       alert(user.email)
      
      )}
    </div>
  );
}
