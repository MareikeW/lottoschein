import React, { useContext, useState } from "react";
import { Context } from "../context";

const WeiterButton = () => {
    const context = useContext(Context);
    const [finalSelectedFelder, setFinalSelectedFelder] = useState([]);

    const handleSubmit = () => {
        context.selectedFelder.forEach(selectedFeld => {
            setFinalSelectedFelder(prevState => [...prevState, selectedFeld.id]);
        });
    }
      
    return (
        <div>
            {finalSelectedFelder.length < 6 
                ? <button className="weiterButton" onClick={handleSubmit}>Weiter</button> 
                : <div className="outputAnzeige">Ihre Zahlen: { finalSelectedFelder.join(" ") }</div>
            }
        </div>
    )
}

export default WeiterButton;