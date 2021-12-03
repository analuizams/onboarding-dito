import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ storeName, storeId, excelente, muitoBom,
  razoavel, ruim, horrivel }) => {

  const surveyTotal = (excelente + muitoBom + razoavel + ruim + horrivel)

  const calculateSat = () => (((excelente + muitoBom) / surveyTotal) * 100)

  return (
    <div className="productCard">
      <p> cheguei aqui </p>
      <h1>{ storeId }</h1>
      <h1>{ storeName }</h1>
      <h3>{`Satisfação: ${calculateSat()}%`}</h3>
      <h3>{`Avaliações: ${surveyTotal}`}</h3>
      <p>{`Excelente: ${excelente}`}</p>
      <p>{`Muito Bom: ${muitoBom}`}</p>
      <p>{`Razoável: ${razoavel}`}</p>
      <p>{`Ruim: ${ruim}`}</p>
      <p>{`Horrível: ${horrivel}`}</p>
    </div>
  );
};

Card.propTypes = {
    storeName: PropTypes.string,
    storeId: PropTypes.number,
    excelente: PropTypes.number,
    muitoBom: PropTypes.number,
    razoavel: PropTypes.number,
    ruim: PropTypes.number,
    horrivel: PropTypes.number,
}.isRequired;

export default Card;