import footerLogo from "./assets/f_logo.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";


export function Footer () {
    return (
        <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__similarities">
                    <a href="./index.html" class="footer__logo-link">
                        <img src={footerLogo} alt="logo of coffee roasters" class="footer_logo-img" width="236" height="26"/>
                    </a>
                    
                    <ul class="footer__list nav-list">
                        <li class="footer__items nav-items">
                            <a href="./index.html" class="nav-link">Home</a>
                        </li>
                        
                        <li class="footer__items nav-items">
                            <a href="./about.html" class="nav-link">About us</a>
                        </li>
                        
                        <li class="footer__items nav-items">
                            <a href="./subscribe.html" class="nav-link">Create your plan</a>
                        </li>
                    </ul>
                </div>
                
                <ul class="footer__posts-list footer__similarities">
                    <li class="footer__posts-items">
                        <a href="https://www.facebook.com/" class="footer__post-links">
                            <img src={facebook} alt="icon" class="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                    
                    <li class="footer__posts-items">
                        <a href="https://www.twitter.com/" class="footer__post-links">
                            <img src={twitter} alt="icon" class="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                    
                    <li class="footer__posts-items">
                        <a href="https://www.instagram.com/" class="footer__post-links">
                            <img src={instagram} alt="icon" class="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    )
}