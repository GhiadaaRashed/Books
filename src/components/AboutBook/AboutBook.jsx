
import Counter from "../counter/Counter"
import "./AboutBook.css"

const AboutBook = ({ image_url, title, authors, description, num_pages, rating_count, review_count, theme }) => {
  return (
    <div className="bookcontain">
      <div className='AboutBook'>
        <div className="bookimg">
          <img src={image_url} />
        </div>
        <div className="AboutBookContainer">
          <div>
            <h1>{title}</h1>
            <span>{authors}</span>
          </div>
          <h3>About Book:</h3>
          <p>{description}</p>
          <Counter theme={theme} />
          <div className="aboutBookbutton">
            <button className='btn1'>Add to cart</button>
            <button className='btn2'>Favorite</button>
          </div>
          <div className="details">
            <p style={{ color: '#C689C6' }}>Pages Number:    <span>{num_pages}</span></p>
            <p style={{ color: '#C689C6' }}>Rating Count: <span>{rating_count}</span></p>
            <p style={{ color: '#C689C6' }}>Reviews: <span>{review_count}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBook