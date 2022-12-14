import quoteDB from './db/quote.json'
import QuoteBox from './components/QuoteBox.jsx'
import colors from './db/colors.js'
import { useState } from 'react'

function App() {
  const getRandom = (array, elemento) => {
    let randomIndex = Math.floor(array.length*Math.random())
    while(array[randomIndex] == elemento){
        randomIndex = Math.floor(array.length*Math.random())
    }
    return array[randomIndex]
  }
  // console.log(quoteDB)
  const [quote, setQuote] = useState(getRandom(quoteDB))  
  const [color, setColor] = useState(colors)

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB, quote)
    const newColor = getRandom(colors, color)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject = {
    background: color
  }

  const colorObject = color.includes("gradient")?{
    backgroundImage:`${color}`,
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text"
  }:{
    backgroundImage:`white`,
    WebkitTextFillColor: `${color}`,
    WebkitBackgroundClip: "text"
  }

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox
        quote={quote} 
        getNewValues={getNewValues} 
        backgroundObject={backgroundObject} 
        colorObject={colorObject}
      />
    </div>
  )
}

export default App
