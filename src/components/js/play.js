import React from "react";
import { useNavigate } from "react-router-dom";


function Play() {

    let navigate = useNavigate()

    return (
        <div id="fullscreen">
            <div id= "page-wrap" align="center">
                {/* <Header /> */}
                <br />
                <h1>Play</h1>
                <p>
                    88888888888888888888888888888888888888888888888888888
                    888888888888888888888LET'S GO888888888888888888888888
                    88888888888888888888888888888888888888888888888888888

                </p>
                {/* <button onClick={()=> navigate('/SongSelection')}>STARTO!</button> */}

            </div>
        </div>

    )
}
export default Play