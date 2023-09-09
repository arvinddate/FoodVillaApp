import React from "react";
import "./footer.css";
import AppStore from "../../Images/AppStore.png"
import PlatStore from "../../Images/Playstore.png"
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="site-footer" >
            <div className="footer-container">
                <div className="footer-columns">
                    <h4>COMPANY</h4>
                    <ul>
                        <li> <Link to= "/" >About us</Link></li>
                        <li><Link to= "/" >Team</Link></li>
                        <li> <Link to= "/" >Careers</Link></li>
                        <li> <Link to= "/" >Bug Bounty</Link></li>
                    </ul>
                </div>
                <div className="footer-columns">
                    <h4>CONTACT</h4>
                    <ul>
                        <li> <Link to= "/" >Help & Support</Link></li>
                        <li> <Link to ="/" >Partner us</Link></li>
                        <li> <Link to ="/" >Community</Link></li>
                        <li> <Link to ="/" >Blog</Link></li>


                    </ul>
                </div>
                <div className="footer-columns">

                    <h4>LEGAL</h4>
                    <ul>
                        <li> <Link to="/">Conditions</Link></li>
                        <li> <Link to="/">Refund</Link></li>
                        <li> <Link to="/">Phishing </Link></li>
                        <li> <Link to="/">Frauds</Link></li>
                    </ul>
                </div>
                <div className="footer-columns">
                    <h4>RATE US</h4>
                    <ul>
                        
                    <li><Link to="/"><i className="fab fa-instagram">Instagram</i></Link>
                    </li>

                    <li><Link to="/"><i className="fab fa-twitter"> Twitter</i> </Link>

                    </li>
                    <li> <Link to="/"><i className="fab fa-facebook">Facebook</i></Link></li>
                    <li> <Link to="/"><i className="fab fa-linkedin">Linkedin</i></Link> </li>
                     
                    </ul>
                </div> 
                <div className="footer-columns">
                    <h4>Free Apps</h4>
                    <ul>
                        <li> <Link to="/"><img src={AppStore} alt="img" /></Link></li>
                        <li> <Link to="/"> <img src={PlatStore} alt="img" /></Link></li>
                    </ul>
                </div>

            </div>
        </div>

    )
}
export default Footer;