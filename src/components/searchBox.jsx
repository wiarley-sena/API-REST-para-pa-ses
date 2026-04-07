import '../App.css'

export default function Searchbox({busca, setBusca}) {
    return(
            <div className="search-box">
      <span className="search-box__icon">🔍</span>
      <input
        className="search-box__input"
        type="text"
        placeholder="Search for a country..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
    </div>
    )
}