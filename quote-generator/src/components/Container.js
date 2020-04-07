import React from "react";

const Container = ( { children , colour}) => {

    return( <div style={{
        transition: "all 500ms",
        backgroundColor: `${colour}`,
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}
        >
        { children }
        </div>
        );
} 

export default Container