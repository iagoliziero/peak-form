import { useState } from "react";
import { Menu } from "lucide-react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-2 md:right-[80px] lg:right-[150px] xl:right-[300px] lg:hidden z-50">
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
              <button className="block p-5 text-xl md:text-2xl  ">
                Seu treino
              </button>
            </li>
            <li>
              <button className="block p-5 text-xl md:text-2xl  ">
                Criar exercício
              </button>
            </li>
            <li>
              <button className="block p-5 text-xl md:text-2xl  ">TMB</button>
            </li>
            <li>
              <button className="block p-5 text-xl md:text-2xl  ">
                Tempo de pausa
              </button>
            </li>
            <button className="block p-5 text-xl md:text-2xl  ">Perfil</button>
            <li>
              <button className="block p-5 text-xl md:text-2xl  ">
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
