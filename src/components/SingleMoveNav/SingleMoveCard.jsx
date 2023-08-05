import '../SingleMoveNav/SingleMoveCard.css'

// needs additional styling
export const SingleMoveCard = ({ move }) => {
  return (
    <div className="card" style={{ margin: "15px" }}>
      <img src={move.moveImage} alt={move.moveName}/>
      <div style={{ backgroundColor: '#bcd5cf', textAlign: "center" }}>
        {move.moveName}
      </div>
      <p>{move.moveAlternativeName}</p>
      <p>{move.moveCategory}</p>
      </div>
  )
}