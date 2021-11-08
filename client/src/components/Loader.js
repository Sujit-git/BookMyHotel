import React, { useState } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";


function Loader() {

    let [loading, setLoading] = useState(true);

    return (
        <div style={{ marginTop: "200px" }}>
            <div className="sweet-loading text-center">
                <PacmanLoader color='#000' loading={loading} css={''} size={30} />
            </div>

        </div>
    )
}

export default Loader
