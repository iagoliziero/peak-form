import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="absolute right-2 md:right-[5rem] lg:right-[9.375rem] xl:right-[18.75rem] lg:hidden z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-transparent rounded-md"
      >
        <Menu className="text-whiteMain w-14 h-10 md:h-14" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-whiteMain border-2 border-yellowMain rounded-lg shadow-lg flex justify-center">
          <ul className="py-2">
            <li>
              <button
                onClick={() => navigate(`/principal`)}
                className="block p-5 text-xl md:text-2xl  "
              >
                Seu treino
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate(`/criarexercicio`)}
                className="block p-5 text-xl md:text-2xl  "
              >
                Criar exercício
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate(`/tempodepausa`)}
                className="block p-5 text-xl md:text-2xl  "
              >
                Tempo de pausa
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate(`/tmb`)}
                className="block p-5 text-xl md:text-2xl  "
              >
                TMB
              </button>
            </li>
            <button
              onClick={() => navigate(`/perfil`)}
              className="block p-5 text-xl md:text-2xl  "
            >
              Perfil
            </button>
            <li>
              <button
                onClick={() => navigate(`/sobre`)}
                className="block p-5 text-xl md:text-2xl  "
              >
                Sobre nós
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
