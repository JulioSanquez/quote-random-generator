const QuoteButton = ({getNewValues, backgroundObject}) => {

  return (
    <button style={backgroundObject} onClick={getNewValues} >
        <i className="bx bx-chevron-right" ></i>
    </button>
  )
}

export default QuoteButton