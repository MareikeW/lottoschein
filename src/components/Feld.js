import React, { useContext } from "react";
import { Context } from "../context";
import kreuzchenImage from "../image/mark.png";

const Feld = ({ ziffer }) => {
    const context = useContext(Context);
    const feldContainer = document.getElementsByClassName("ziffer__container");
    
    if (context.count === 6 && !context.felderArray[ziffer-1].selected) {  
        feldContainer[ziffer-1].classList.add("disabledFeld");
    } 
    
    else if (context.count > 0 && context.count < 6) {
        feldContainer[ziffer-1].classList.remove("disabledFeld");
    }
    
    const handleFeldClick = ziffer => {
        if (context.count >= 0 && context.count < 6) {
            context.handleClick(ziffer);
        } 
        
        else if (context.count === 6 && context.felderArray[ziffer-1].selected) {
            context.handleClick(ziffer);
        }
    }

    return (
        /* Gibt Ziffer vom geklickten Feld an Context zurück  */
        <div className="ziffer__container" onClick={() => handleFeldClick(ziffer)}>
            <div className="ziffer">{ ziffer }</div>
            { context.felderArray[ziffer-1].selected && context.count <= 6 ? <img className="kreuzchen" src={ kreuzchenImage } alt="Kreuzchen" /> : null }
       </div>
    )
}

export default Feld;