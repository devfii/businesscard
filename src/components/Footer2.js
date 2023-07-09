import Twitter from '../images/twitter.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';

export default function Footer2() {
    return (
        <footer>
            <div className="socials">
                <img src={Twitter} alt="Twitter" />
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
                <img src={Linkedin} alt="Linkedin" />
                <img src={Github} alt="Github" />
            </div>
        </footer>
    )
}