import React, { useEffect, useState } from 'react';


function App() {
  const [quote, setQuote] = useState(null)
  const [author, setAuthor] = useState(null)
  const [colour, setColour] = useState(null)

  const fetchData = async() => {
    let data, result;
    
    try {
      data = await fetch('https://api.quotable.io/random');
      result = await data.json();
    } catch(e){
      console.log(e)
    }
    return result
  }

  
  const populateData = async() => {
    const result = await fetchData()
    setQuote(result.content);
    setAuthor(result.author);
}

  useEffect(()=>{
    populateData()
  }, [])


  return (
    <div>
    <p>{ quote }</p>
    <p>Author: { author ? author : "Anon"} </p>
    <button onClick ={populateData} >Get Quote</button>
    </div>
  );
}

export default App;
