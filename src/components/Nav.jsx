import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="hidden lg:block  ">
      <ul className="flex gap-8 text-center text-2xl xl:text-2xl text-whiteMain ">
        <li
          onClick={() => navigate(`/principal`)}
          className="hover:text-yellowMain cursor-pointer transition-all "
        >
          {" "}
          Seu treino{" "}
        </li>
        <li
          onClick={() => navigate(`/criarexercicio`)}
          className="hover:text-yellowMain cursor-pointer transition-all"
        >
          {" "}
          Criar exercício{" "}
        </li>
        <li
          onClick={() => navigate(`/tempodepausa`)}
          className="hover:text-yellowMain cursor-pointer transition-all "
        >
          {" "}
          Tempo de Pausa{" "}
        </li>
        <li
          onClick={() => navigate(`/tmb`)}
          className="hover:text-yellowMain cursor-pointer transition-all "
        >
          {" "}
          Taxa Metabólica Basal{" "}
        </li>
        <li
          onClick={() => navigate(`/perfil`)}
          className="hover:text-yellowMain cursor-pointer transition-all "
        >
          {" "}
          Perfil
        </li>
        <li
          onClick={() => navigate(`/sobre`)}
          className="hover:text-yellowMain cursor-pointer transition-all "
        >
          {" "}
          Sobre Nós{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
