import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import handleGoogleLogin from "../services/googleAuthService";


export default function Login() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex items-center  ">
      {!user ? (
        <GoogleLogin
          onSuccess={(response) => {
            const userData = handleGoogleLogin(response);
            setUser(userData);
          }}
          onError={() => console.log("Erro ao fazer login")}
          useOneTap
          width={370}
          shape="square"
        theme="outline"
        />
      ) : (
        alert(JSON.stringify(user))
      
      )}
    </div>
  );
}
