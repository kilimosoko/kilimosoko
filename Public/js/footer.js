const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Products</li>
                <li><a href="#" class="footer-link">Maize</a></li>
                <li><a href="#" class="footer-link">Wheat</a></li>
                <li><a href="#" class="footer-link">Rice</a></li>
                <li><a href="#" class="footer-link">Beans</a></li>
                <li><a href="#" class="footer-link">Eggs</a></li>
                <li><a href="#" class="footer-link">Milk</a></li>
                <li><a href="#" class="footer-link">Sheep</a></li>
                <li><a href="#" class="footer-link">Cattle</a></li>
                <li><a href="#" class="footer-link">Cabbages</a></li>
                <li><a href="#" class="footer-link">and many more ...</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Regions</li>
                <li><a href="#" class="footer-link">Coastal</a></li>
                <li><a href="#" class="footer-link">NorthRift</a></li>
                <li><a href="#" class="footer-link">SouthRift</a></li>
                <li><a href="#" class="footer-link">Central</a></li>
                <li><a href="#" class="footer-link">Western</a></li>
                <li><a href="#" class="footer-link">Nyanza</a></li>
                <li><a href="#" class="footer-link">Eastern</a></li>
                <li><a href="#" class="footer-link">NorthEastern</a></li>
                <li><a href="#" class="footer-link">Nairobi</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info"></p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 0707118709</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Kilimosoko, discovering farmers countywide</p>
    `;
}

createFooter();
