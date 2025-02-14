import { useState, useEffect } from "react";
import axios from "axios";

const LocalInput = () => {
  const [uf, setUf] = useState("");
  const [local, setLocal] = useState([]);
  const [selectedLocal, setSelectedLocal] = useState("");

  useEffect(() => {
    if (uf) {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
        )
        .then((res) => setLocal(res.data))
        .catch((err) => console.error("Erro ao buscar cidades:", err));
    }
  }, [uf]);

  return (
    <div className="flex  justify-center items-center flex-col  gap-5 p-6 bg-darker rounded-md w-[320px] md:w-[350px] text-white">
      <label className="text-white text-4xl  md:text-3xl font-semibold">
        Estado (UF)
      </label>
      <select
        className="w-full p-4 border border-gray rounded-md bg-darker text-white text-xl focus:outline-none focus:ring-2 focus:ring-yellowMain"
        value={uf}
        onChange={(e) => setUf(e.target.value)}
      >
        <option value="">Selecione um estado</option>
        {[
          "AC",
          "AL",
          "AP",
          "AM",
          "BA",
          "CE",
          "DF",
          "ES",
          "GO",
          "MA",
          "MT",
          "MS",
          "MG",
          "PA",
          "PB",
          "PR",
          "PE",
          "PI",
          "RJ",
          "RN",
          "RS",
          "RO",
          "RR",
          "SC",
          "SP",
          "SE",
          "TO",
        ].map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>
      {uf && (
        <>
          <label className="text-white text-4xl  md:text-3xl font-semibold">
            Cidade
          </label>
          <select
            className="w-full p-4 border border-gray rounded-md md:items-center md:justify-center bg-darker text-white text-xl focus:outline-none focus:ring-2 focus:ring-yellowMain appearance-none"
            value={selectedLocal}
            onChange={(e) => setSelectedLocal(e.target.value)}
          >
            <option value="">Selecione uma cidade</option>
            {local.map((city) => (
              <option key={city.id} value={city.nome}>
                {city.nome}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default LocalInput;
