import arrowRightLong from '../assets/icons/arrowRightLong.png';

const ReturnPage = () => {
  return (
    <div className="return-container">
      <button type="button">
        <img src={arrowRightLong} alt="Fecha" />
        <p>Volver</p>
      </button>
    </div>
  );
}

export default ReturnPage;
