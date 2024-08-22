import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-4">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-2">© 2024 KAM Hackathon</p>
                <div className="flex justify-center space-x-4 mb-2">
                    <FontAwesomeIcon icon={faFacebookF} className="text-white text-xl" />
                    <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
                </div>
                <p className="text-xs">Kenya Association of Manufacturers</p>
            </div>
        </footer>
    );
};

export default Footer;
