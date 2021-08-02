import './index.css'

const ContactItem = props => {
  const {contactDetails, onToggleFavoriteButton} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const onClickFav = () => {
    onToggleFavoriteButton(id)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button type="button" className="favorite-icon-container">
          <img
            src={starImgUrl}
            className="favorite-icon"
            alt="star"
            onClick={onClickFav}
          />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
