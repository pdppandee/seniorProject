import React from "react";
import { useNavigate } from "react-router-dom";

import SongSelection from "./songselection";

function DeviceConnection() {

    let navigate = useNavigate()

    return (
        <div id="fullscreen">
            <div id= "page-wrap" align="center">
                {/* <Header /> */}
                <br />
                <h1>DeviceConnection</h1>
                <p>
                    88888888888888888888888888888888888888888888888888888
                    888888888888888888888LET'S GO888888888888888888888888
                    88888888888888888888888888888888888888888888888888888

                </p>
                <button onClick={()=> navigate('/Song')}>STARTO!</button>

            </div>
        </div>

    )
}
export default DeviceConnection