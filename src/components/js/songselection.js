import React from "react";
import { useNavigate } from "react-router-dom";

import Play from "./play";

function SongSelection() {

    let navigate = useNavigate()

    return (
        <div id="outer-container">
            <div id= "page-wrap" align="center">
                {/* <Header /> */}
                <br />
                <h1>SongSelection</h1>
                <p>
                    88888888888888888888888888888888888888888888888888888
                    888888888888888888888LET'S GO888888888888888888888888
                    88888888888888888888888888888888888888888888888888888

                </p>
                <button onClick={()=> navigate('/Play')}>STARTO!</button>

            </div>
        </div>

    )
}
export default SongSelection