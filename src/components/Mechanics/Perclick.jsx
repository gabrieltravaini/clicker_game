// Score.js
import React from 'react';

const Perclick = ({ score, alt, mult}) => {
  let perclick= (1+alt)*mult
  
    return <>{parseFloat(perclick)+' Points per click'}</>;
};

export default Perclick;
