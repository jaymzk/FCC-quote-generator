const getRandomColour = () => {
    let hexDigits = "456789AB";
    let colour = "#"
    for(let i=0; i<6; i++) {
      colour += hexDigits[Math.floor(Math.random() * 8)];
    }
    return colour;
  };

export default getRandomColour