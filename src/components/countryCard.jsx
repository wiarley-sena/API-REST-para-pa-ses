export default function CountryCard({ pais, onSelecionar }) {
  return (
    <article className="card" onClick={() => onSelecionar(pais)}>
      <img className="card__flag" src={pais.flags.png} alt={pais.name} />
      <div className="card__body">
        <h2 className="card__name">{pais.name}</h2>
        <p className="card__info"><span>Population:</span> {pais.population.toLocaleString()}</p>
        <p className="card__info"><span>Region:</span> {pais.region}</p>
        <p className="card__info"><span>Capital:</span> {pais.capital}</p>
      </div>
    </article>
  )
}