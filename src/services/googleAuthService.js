import { jwtDecode } from "jwt-decode";

const handleGoogleLogin = (response) => {
  try {
    const user = jwtDecode(response.credential);
    console.log("Usuário logado:", user);
    return user;
  } catch (error) {
    console.error("Erro ao processar o login:", error);
    return null;
  }
};

export default handleGoogleLogin;