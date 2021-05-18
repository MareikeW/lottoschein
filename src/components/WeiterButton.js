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
            <button className="weiterButton" onClick={handleSubmit}>Weiter</button>
            <div>{ finalSelectedFelder }</div>
        </div>
    )
}

export default WeiterButton;