import React, { useContext } from "react";
import { Context } from "../context";

const LoeschenContainer = () => {
    const context = useContext(Context);
    
    return (
        <div className="loeschen" onClick={() => context.deleteMarks()}>
            <img src="https://img.icons8.com/color/50/000000/delete.png" alt="Mülleimer"/>
            <h3>Löschen</h3>
        </div>
    )
}

export default LoeschenContainer;
