import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about'>
        <div className="aboutData">
        <h1>Did you know us? </h1>
        <p>We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one.
            BWorld works with the must popular publishs just for your delight. 
            If you are about books, you must to subscribe to our newsletter. 
        </p>
        <form>
            <input type="text" placeholder='Your name '/>
            <input type="email" placeholder='Your e-mail' />
        </form>
        <button>Subscribe</button>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.53228342715!2d36.36529681447741!3d33.507448225272874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2z2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1706549069870!5m2!1sar!2s" width="600" height="450" style={{border:0}}loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default AboutUs