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

  export default fetchData 
 


