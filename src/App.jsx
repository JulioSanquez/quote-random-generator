import quoteDB from './db/quote.json'
import QuoteBox from './components/QuoteBox.jsx'
import colors from './db/colors.js'
import { useState } from 'react'

function App() {
  const getRandom = array => {
    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }
  console.log(quoteDB)
  const [quote, setQuote] = useState(getRandom(quoteDB))  
  const [color, setColor] = useState(colors)

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB)
    const newColor = getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject = {
    backgroundColor: color
  }

  const colorObject = {
    color
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
