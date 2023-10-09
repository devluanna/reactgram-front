import React from 'react';



function Logo(props) {

  const logoStyle = {
    width: props.widthLogo || "220px",
    height: 'auto', 
  };


  return (
    <img src={process.env.PUBLIC_URL + '/logoReactGram.png'}
    alt="Logo da empresa"
    style={logoStyle}
    widthLogo={props.widthLogo}
   />
  );
}

export default Logo;