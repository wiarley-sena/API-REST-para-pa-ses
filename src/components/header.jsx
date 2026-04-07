import '../App.css'
import { useState } from 'react'

export default function Hearder(){
  const [temaEscuro, setTemaEscuro] = useState(false)
  function alternarTema(){
    setTemaEscuro(!temaEscuro)
    document.documentElement.setAttribute('data-theme', temaEscuro ? 'light' : 'dark')
  }
    return(
          <header className="header">
    <div className="header__inner">
      <h1 className="header__title">Where in the world?</h1>
      <button className="theme-toggle" onClick={alternarTema} id="themeToggle" aria-label="Toggle dark mode">
        <span className="theme-toggle__icon">{temaEscuro ? '☀️' : '🌙'}</span>
        <span className="theme-toggle__label">{temaEscuro ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </div>
  </header>
    )
}