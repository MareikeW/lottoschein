import React, { useContext } from "react";
import { Context } from "../context";
import kreuzchenImage from "../image/mark.png";

const Feld = ({ ziffer }) => {
    const context = useContext(Context);
    
    const disabledFeld = (context.selectedFelder.length === 6 && !context.felder[ziffer-1].selected) ? 'disabledFeld' : null;
    const zifferContainerStyling = `ziffer__container ${disabledFeld}`

    const handleFeldClick = ziffer => {
        if (context.count >= 0 && context.count < 6) {
            context.handleClick(ziffer);
        } 
        
        else if (context.count === 6 && context.felder[ziffer-1].selected) {
            context.handleClick(ziffer);
        }
    }

    return (
        /* Gibt Ziffer vom geklickten Feld an Context zurück  */
        <div className={zifferContainerStyling} onClick={() => handleFeldClick(ziffer)}>
            <label className="ziffer">{ ziffer }</label>
            { context.felder[ziffer-1].selected 
                && context.count <= 6 
                ? <img className="kreuzchen" src={ kreuzchenImage } alt="Kreuzchen" /> 
                : null
            }
       </div>
    )
}

export default Feld;