import React, { useContext, useState } from "react";
import { Context } from "../context";

const WeiterButton = () => {
    const context = useContext(Context);
    const [finalSelectedFelder, setFinalSelectedFelder] = useState([]);

    const handleSubmit = () => {
        context.selectedFelder.forEach(selectedFeld => {
            setFinalSelectedFelder(prevFinalSelectedFelder => [...prevFinalSelectedFelder, selectedFeld.id]);
        });
    }

    /* Arraydestrukturierung mit compare-function, um die Zahlen zu sortieren */
    let [zahl1, zahl2, zahl3, zahl4, zahl5, zahl6] = finalSelectedFelder.sort((a, b) => a - b);
      
    return (
        <div>
            {finalSelectedFelder.length < 6 
                ? <button className="weiterButton" onClick={handleSubmit}>Weiter</button> 
                : <div className="outputAnzeige">Ihre Zahlen: 
                    <ul id="finalZahlenContainer">
                        <li className="ziffer">{zahl1}</li>
                        <li className="ziffer">{zahl2}</li>
                        <li className="ziffer">{zahl3}</li>
                        <li className="ziffer">{zahl4}</li>
                        <li className="ziffer">{zahl5}</li>
                        <li className="ziffer">{zahl6}</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default WeiterButton;