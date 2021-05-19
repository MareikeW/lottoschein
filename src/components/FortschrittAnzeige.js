import React, { useContext } from "react";
import { Context } from "../context";

const FortschrittAnzeige = () => {
    const context = useContext(Context);
    return (
        <div>
            <div id="progressbar">
                <div style={{width: `calc((100% / 6) * ${context.count}) `}}>
                    <label className="progressLabel"><strong>{context.count}/6</strong></label>
                </div>
            </div>
        </div>
    )
}

export default FortschrittAnzeige;