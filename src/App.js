import React, { useContext } from "react";
import { Context } from "./context"
import Feld from "./components/Feld";
import LoeschenContainer from "./components/LoeschenContainer";
import WeiterButton from "./components/WeiterButton";

const App = () => {
    const context = useContext(Context);
   
    // Für jedes Element im felderArray wird eine Komponente erstellt.
    const felder = context.felderArray.map(feld => <Feld key={feld.id} ziffer={feld.id} selected={feld.selected} />);
    
    return (
        <main>
            <h1>Ihr Spielfeld</h1>
            <div className="spielfeld">
                { felder }
            </div>
            <LoeschenContainer />
            { context.selectedFelder.length === 6 ? <WeiterButton /> : null }
        </main>
    )
}

export default App;
