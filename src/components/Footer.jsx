import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";


const Footer = () => {
 return <footer>

<div className="footer-links">
<li className="footer-link">Get in touch</li>
<li className="footer-link">T&Cs</li>
<li className="footer-link">Privacy Policy</li>
</div>

<div className="footer-icon-container">
<FaFacebookF className='footer-icon' size={30}/>
<FaInstagram className='footer-icon' size={30}/>
<FaTiktok className='footer-icon' size={30}/>
</div>


 </footer>
}

export default Footer

