import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <div className='contact-btn'>
                <button className="email"><FontAwesomeIcon icon={faEnvelope} /><span>Email</span></button>
        </div>
    )
}

export default Contact;