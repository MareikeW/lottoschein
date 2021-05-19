import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = (props) => {
    const [felder, setFelder] = useState([]);
    const [count, setCount] = useState(0);
    const [selectedFelder, setSelectedFelder] = useState([]);
    
    // Erstellt 49 Felder, die nicht angekreuzt sind.
    useEffect(() => {
        for (let i = 1; i <= 49; i++) {
            setFelder(prevFelder => {
                return [
                    ...prevFelder,
                    {
                        id: i,
                        selected: false
                    }
                ]
            })
        }
    }, []);
    
    /* Bei Klick auf ein Feld erfolgt eine Prüfung: Feld ist schon angekreuzt --> nicht mehr ausgewählt, Anzahl geklickter Felder minus 1 und Array 
    mit ausgewählten Felder wird ohne dieses Feld zurückgegeben. Feld noch nicht angekreuzt --> wir oben nur anders herum. */
    const handleClick = ziffer => {
        // eslint-disable-next-line array-callback-return
        felder.map(feld => {
                if (feld.id === ziffer) {
                    if (feld.selected) {
                        feld.selected = false;
                        setCount(prevCount => prevCount - 1);
                        setSelectedFelder(selectedFelder.filter(feld => feld.id !== ziffer));
                    } else {
                        feld.selected = true;
                        setCount(prevCount => prevCount + 1);
                        setSelectedFelder(prevSelectedFelder => {
                            return [
                                ...prevSelectedFelder,
                                {
                                    id: feld.id,
                                    selected: feld.selected
                                }
                            ]
                        })
                    }
                } else {
                    return feld;
                }        
        })  
    }
    
    /* Sämtliche Elemente im felderArray werden auf nicht ausgewählt zurückgesetzt und selectedFelder auf einen leeren Array zurückgesetzt. */
    const deleteMarkierungen = () => {
        setFelder(
            felder.map(feld => {
                return feld.selected === true ? {...feld, selected: false} : feld;
            })
        )
        setCount(0);
        setSelectedFelder([]);
    }
   
    return (
        <Context.Provider value={{ felder, setFelder, count, setCount, handleClick, deleteMarkierungen, selectedFelder, setSelectedFelder }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };