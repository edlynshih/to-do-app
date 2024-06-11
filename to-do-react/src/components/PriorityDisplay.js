const PriorityDisplay = ({ priority }) => {
  return (
    <div className="priority-display">
      <div className="star-container">
        <h3 style={{ color: priority >= 1 ? '#FFDF00' : '#33363d4e' }}>★</h3>
        <h3 style={{ color: priority >= 2 ? '#FFDF00' : '#33363d4e' }}>★</h3>
        <h3 style={{ color: priority >= 3 ? '#FFDF00' : '#33363d4e' }}>★</h3>
        <h3 style={{ color: priority >= 4 ? '#FFDF00' : '#33363d4e' }}>★</h3>
        <h3 style={{ color: priority >= 5 ? '#FFDF00' : '#33363d4e' }}>★</h3>
      </div>
    </div>
  )
}

export default PriorityDisplay;