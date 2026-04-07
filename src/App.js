import "./App.css";
import { useState, useEffect } from "react";
import data from "./data.json";
import Header from "./components/header";
import SearchBox from "./components/searchBox";
import FilterDropdown from "./components/filterDropdown";
import CountryCard from "./components/countryCard";
import Detailpage from "./pages/detailpage";

export default function App() {
  const [paises, setPaises] = useState([]);
  const [busca, setBusca] = useState("");
  const [regiao, setRegiao] = useState("");
  const [paisSelecionado, setPaisSelecionado] = useState(null);


  useEffect(() => {
    setPaises(data);
  }, []);

  useEffect(() => {
    console.log('regiao mudou para:', regiao);
  }, [regiao]);

    const paisesFiltrado = paises.filter((pais) => {
    const matchBusca = pais.name.toLowerCase().includes(busca.toLowerCase());
    const matchRegiao = !regiao || pais.region === regiao;
    return matchBusca && matchRegiao;
  });

  return (
    <div>
      <Header />
      <main className="page">
        {paisSelecionado ?(
          <Detailpage pais={paisSelecionado}  onVoltar={() => setPaisSelecionado(null)}/>
        ) : (
        <div className="controls">
          <SearchBox busca={busca} setBusca={setBusca} />
          <FilterDropdown setRegiao={setRegiao} />
        </div>
        )}
        <div className="country-grid">
          {!paisSelecionado && paisesFiltrado.map((pais) => (
            <CountryCard key={pais.alpha3Code} pais={pais} onSelecionar={setPaisSelecionado} />
          ))}
        </div>
      </main>
    </div>
  );
}
