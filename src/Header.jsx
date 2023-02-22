import logo from "./assets/logo_img.svg";

export function Header () {
    return (
        <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <a href="./index.html" class="header__link">
                    <img src={logo} alt="logo of Coffeeroaster" class="header__logo-img" width="236" height="26"/>
                </a>
                
                <ul class="header__list nav-list">
                    <li class="header__items nav-items">
                        <a href="./index.html" class="nav-link">Home</a>
                    </li>
                    
                    <li class="header__items nav-items">
                        <a href="./about.html" class="nav-link">About us</a>
                    </li>
                    
                    <li class="header__items nav-items">
                        <a href="./subscribe.html" class="nav-link">Create your plan</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}