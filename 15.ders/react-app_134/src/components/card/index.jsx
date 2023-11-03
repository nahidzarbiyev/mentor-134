import './card.css'
// eslint-disable-next-line react/prop-types
const Card = ({cat}) => {
  return (
  // eslint-disable-next-line react/prop-types
  <div className="cat"><img src={cat.url} alt="" /></div>
  )
}

export default Card