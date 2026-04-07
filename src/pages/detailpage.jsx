import "../App.css";
import CountryCard from "../components/countryCard.jsx";

export default function Detailpage({ pais, onVoltar }) {
  return (
    <div className="page" id="detailPage">
      <div className="detail-wrapper">
        <button className="back-btn" onClick={onVoltar} id="backBtn">
          <span className="back-btn__arrow">←</span> Back
        </button>

        <div className="detail-content" id="detailContent">
            <CountryCard pais={pais} />
        </div>
      </div>
    </div>
  );
}