import { useState } from 'react'
import '../App.css'

export default function FilterDropdown({setRegiao}) {
const [aberto, setAberto] = useState(false)
const [regiaoSelecionada, setRegiaoSelecionada] = useState('filter by region')

function selecionarRegiao(regiao) {
setRegiaoSelecionada(regiao || 'filter by region')
setRegiao(regiao)
setAberto(false)
}
  return (
    <div className="filter">
      <button className="filter__btn" onClick={(e) =>{
         e.stopPropagation()
          setAberto(!aberto)
          }}>
        <span>{regiaoSelecionada}</span>
        <span className="filter__arrow">▾</span>
      </button>
      {aberto && (
      <ul className="filter__dropdown">
        <li className="filter__option" onClick={() => selecionarRegiao('')}>All</li>
        <li className="filter__option" onClick={() => selecionarRegiao('Africa')}>Africa</li>
        <li className="filter__option" onClick={() => selecionarRegiao('Americas')}>America</li>
        <li className="filter__option" onClick={() => selecionarRegiao('Asia')}>Asia</li>
        <li className="filter__option" onClick={() => selecionarRegiao('Europe')}>Europe</li>
        <li className="filter__option" onClick={() => selecionarRegiao('Oceania')}>Oceania</li>
      </ul>
      )}
    </div>
  )
}