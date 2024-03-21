import {FiTrash} from 'react-icons/fi'

const Songs = props => {
  const {items, trashId} = props
  const trashBin = () => {
    trashId(items.id)
  }
  return (
    <li className="songs-li-container">
      <div className="songs-image">
        <img src={items.imageUrl} alt="track" />
        <div className="songs-name">
          <p key={items.name}>{items.name}</p>
          <p className="genre">{items.genre}</p>
        </div>
      </div>
      <div className="trash-container">
        <p>{items.duration}</p>
        <button onClick={trashBin} data-testid="delete" className="delete">
          <FiTrash alt="delete" />
        </button>
      </div>
    </li>
  )
}
export default Songs
