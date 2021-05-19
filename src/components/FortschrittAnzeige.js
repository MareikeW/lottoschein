import React, { useContext } from "react";
import { Context } from "../context";

const FortschrittAnzeige = () => {
    const context = useContext(Context);
    return (
        <div>
            <div id="progressbar">
                <div style={{width: `calc((100% / 6) * ${context.count}) `}}>
                    <p className="progress-label"><strong>{context.count}/6</strong></p>
                </div>
            </div>
        </div>
    )
}

export default FortschrittAnzeige;