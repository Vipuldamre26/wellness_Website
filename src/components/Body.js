import './body.css';
import img from '../assests/hero-img.png'
// import './header.css'

const Body = () => {
    return (
        <div className='body-main'>
            <img src={img}></img>
            <div className='hero'>
                <h2>Think Health. Think Massage</h2>
                <p>we are open 9am to 6pm; Monday to Saturday. If you would like to book an appointment with us, please call us at 987-6554-321 today!</p>
                <div className='btn-section'>
                    <button>LEARN MORE ABOUT US</button>
                    <button>CONTACT US TODAY</button>
                </div>
            </div>
            <div className='details'>

                <strong>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</strong>

                <p className='para'>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>

                <p className='para'>We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
            </div>

            <hr></hr>

            <div className='contact-us'>

                <p className='contact-para'>Family Wellness Massage Therapy</p>
                <p>888 Griffiths Way, Mainland ML 12345</p>
                <p>Tel: 987.654.3210</p>
                <p>Email: info@yoursite.com</p>
            </div>


        </div>
    )
}

export default Body;