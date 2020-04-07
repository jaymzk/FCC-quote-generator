import React, { useEffect, useState } from 'react';
import Container from "./components/Container"
import QuoteBox from "./components/QuoteBox"
import Button from "./components/Button"

function App() {
  const [quote, setQuote] = useState(null)
  const [author, setAuthor] = useState(null)
  const [colour, setColour] = useState(null)
  const [tweetQuote, setTweetquote] = useState(null)


  const getRandomColour = () => {
    let hexDigits = "456789AB";
    let colour = "#"
    for(let i=0; i<6; i++) {
      colour += hexDigits[Math.floor(Math.random() * 8)];
    }
    return colour;
  };


  const fetchData = async() => {
    let data, result;
    
    try {
      data = await fetch('https://api.quotable.io/random');
      result = await data.json();
    } catch(e){
      console.log(e)
    }
    return result
  };

  
const populateData = async() => {
    const result = await fetchData()
    const randColour = getRandomColour()
    setColour(randColour)
    setQuote(result.content);
    setTweetquote('https://twitter.com/intent/tweet?text=' +`'${result.content}'`)
    setAuthor(result.author);
}

  useEffect(()=>{
    populateData()
  }, [])


  return (
   
    <Container colour={colour}>

    <QuoteBox>
    <p id="text">{ quote }</p>
    <p id="author"> { author ? author : "Anon"} </p>
    <div id= "buttons">
    <a style ={{
       transition: "all 500ms",
      border: "none",
      backgroundColor: `${colour}`,
      color: "#fff",
      padding: "10px",
      borderRadius: "10px",
    }}id="tweet-quote" href = {tweetQuote}>Tweet</a>
    <Button onClick={populateData} colour={colour} text = "Get a Quote" />
    </div>
    </QuoteBox>
   </Container>
  );
}

export default App;
