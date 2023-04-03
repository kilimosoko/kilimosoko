const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search Region, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="signup.html"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">cerials</a></li>
            <li class="link-item"><a href="#" class="link">vegetables</a></li>
            <li class="link-item"><a href="#" class="link">Poultry</a></li>
            <li class="link-item"><a href="#" class="link">Dairy</a></li>
        </ul>
    `;
}

createNav();
