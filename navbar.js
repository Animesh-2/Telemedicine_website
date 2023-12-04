function navbar() {

    return `
    <ul class="navbar-left">

        <a href="index.html">
                <img src="home_image/Blue, white and green Medical care logo (2).png">
        </a>
        <a href="./Product_page/product.html">
            <li> Medicines </li>
        </a>
        <a href="">
            <li> Doctor </li>
        </a>
        <a href="">
            <li> Pharmacy </li>
        </a>
        <a href="">
            <li> Other Services </li>
        </a>
    </ul>

    <ul class="navbar-right">
        <a href="cart.html">
            <li> <i class="fa-solid fa-cart-shopping"></i> </li>
        </a>
        
        <a href="login.html">

            <li>  Consult Now </li>
        </a>
    </ul>`

}

export { navbar }
