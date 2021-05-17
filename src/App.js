import React, { useContext } from "react";
import { Context } from "./context"
import Feld from "./components/Feld";
import LoeschenContainer from "./components/LoeschenContainer";

const App = () => {
    const context = useContext(Context);
    /*const feldContainer = document.getElementsByClassName("ziffer__container");
    
    if (context.count === 6 && !context.felderArray[ziffer-1].selected) {  
        feldContainer[ziffer-1].classList.add("disabledFeld");
    } 
    
    else if (context.count > 0 && context.count < 6) {
        feldContainer[ziffer-1].classList.remove("disabledFeld");
    }*/
    // Für jedes Element im felderArray wird eine Komponente erstellt.
    const felder = context.felderArray.map(feld => <Feld key={feld.id} ziffer={feld.id} selected={feld.selected} />);
    
    return (
        <main>
            <h1>Ihr Spielfeld</h1>
            <div className="spielfeld">
                { felder }
            </div>
            <LoeschenContainer />
        </main>
    )
}

export default App;
