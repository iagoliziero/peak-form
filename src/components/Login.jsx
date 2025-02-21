import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import handleGoogleLogin from "../services/googleAuthService";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  return (
    <div className="flex items-center  ">
      {!user ? (
        <GoogleLogin
          onSuccess={(response) => {
            const userData = handleGoogleLogin(response);
            setUser(userData);
            navigate(`/principal`)
          }}
          onError={() => console.log("Erro ao fazer login")}
          useOneTap
          width={310}
          shape="square"
        theme="outline"
        />
      ) : (
        alert(JSON.stringify(user))
      
      )}
    </div>
  );
}
