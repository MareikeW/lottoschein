import React, { useContext } from "react";
import { Context } from "../context";

const LoeschenContainer = () => {
    const context = useContext(Context);
    
    return (
        <div className="loeschenButton" onClick={() => context.deleteMarkierungen()}>
            <img src="https://img.icons8.com/color/50/000000/delete.png" alt="Mülleimer"/>
            <label><strong>Löschen</strong></label>
        </div>
    )
}

export default LoeschenContainer;
