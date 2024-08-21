import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                        <h5 className="font-bold mb-2">Contact Us</h5>
                        <ul>
                            <li>About</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">For Developers</h5>
                        <ul>
                            <li>Get Started</li>
                            <li>Documentation</li>
                            <li>API Explorer</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Open Data Initiatives</h5>
                        <ul>
                            <li>AfDB Executive Monitor</li>
                            <li>Africa Infrastructure Knowledge Program</li>
                            <li>Country Open Data Platforms</li>
                            <li>Monitoring Sustainable Development Goals in Africa</li>
                            <li>Operations Database</li>
                            <li>Power Africa</li>
                            <li>Tourism Portal</li>
                        </ul>
                    </div>
                    <div className="flex justify-end items-start sm:justify-start sm:items-center">
                        <div>
                            <p>© 2024 KAM Hackathon</p>
                            <div className="flex space-x-4 mt-2">
                                <FontAwesomeIcon icon={faApple} className="text-white text-2xl" />
                                <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl" />
                                <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
