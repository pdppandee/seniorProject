import React from "react";
import { useNavigate } from "react-router-dom";

import DeviceConnection from "./deviceconnection";

function SelectPlayers() {

    let navigate = useNavigate()

    return (
        <div id="outer-container">
            <div id= "page-wrap" align="center">
                {/* <Header /> */}
                <br />
                <h1>SelectPlayers</h1>
                <p>
                    88888888888888888888888888888888888888888888888888888
                    888888888888888888888LET'S GO888888888888888888888888
                    88888888888888888888888888888888888888888888888888888

                </p>
                <button onClick={()=> navigate('/DeviceConnection')}>STARTO!</button>

            </div>
        </div>

    )
}
export default SelectPlayers