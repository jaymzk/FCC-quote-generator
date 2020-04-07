import React from "react";

const QuoteBox = ( { children}) => {
    return(
        <div id="quote-box" style={{
            backgroundColor: '#fff',
            maxWidth: "600px",
            padding: "30px",
            borderRadius: "10px",
            width: "auto",
            display: "flex",
            flexDirection: "column",
            margin: "20px",
          }}
          >
        {children}
        </div>
    );
}

export default QuoteBox