import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    return (
        <div className='contact-btn'>
                <button className="email"><FontAwesomeIcon icon={faEnvelope} /><span>Email</span></button>
                <button className="linkedin"><FontAwesomeIcon icon={faLinkedin} /><span>Linkedin</span></button>
        </div>
    )
}

export default Contact;