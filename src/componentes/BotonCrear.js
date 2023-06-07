import React from "react";
import '../styles/BotonClear.css';

const BotonClear=(props)=>(
<div className="boton-clear" onClick={props.clear}>
    {props.children}
</div>
);

export default BotonClear;