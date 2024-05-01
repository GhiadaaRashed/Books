import "./Schmitt.css"
import book from './../../assets/images/book.png'
const Schmitt = () => {
  return (
    <div className="Schmitt">
        <div className="SchmittData">
            <button className="Author">Author of august</button>
            <h1>Eric-Emanuel Schmitt </h1>
            <p>Eric-Emmanuel Schmitt has been awarded 
                more than 20 literary prizes and distinctions,
                and in 2001 he received the title of Chevalier des Arts et des Lettres. 
                His books have been translated into over 40 languages.</p>
            <button className="boooks">View his boooks</button>
        </div>
        <img className="Schmittbook" src={book}/>
    </div>
  )
}

export default Schmitt