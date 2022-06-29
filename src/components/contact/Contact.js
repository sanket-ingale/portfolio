import './Contact.css';

export default function Contact() {
    return (
        <div className="footer">
            <div id="links">
                <div className="contact" id="phone">
                    <img src={require('./telephone-call.png')} alt="Phone"/>
                    +91 9404-26-4995
                </div>
                <div className="contact" id="email">
                    <img src={require('./gmail.png')} alt="GMail"/>
                    sanket.ingale1998@gmail.com
                </div>
                <a href="https://github.com/sanket-ingale" className="contact" id="github">
                    {/* GitHub */}
                    <img src={require('./github.png')} alt="GitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/sanket-ingale1998/" className="contact" id="linkedin">
                    {/* LinkedIn */}
                    <img src={require('./linkedin.png')} alt="LinkedIn"/>
                </a>
                {/* <a href="#" id="naukri">Naukri Profile</a> */}
                <a href="https://www.instagram.com/lightbuster_/" className="contact" id="insta">
                    {/* Instagram */}
                    <img src={require('./instagram.png')} alt="Instagram"/>
                </a>                
            </div>
            <div id="copyright">
                Created by Sanket Ingale &copy; 2021
            </div>
        </div>
    );
}