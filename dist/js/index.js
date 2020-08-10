let time = 5e3,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    tituloNome = document.getElementById("titulo-nome");
    tituloAdvogado = document.getElementById("titulo-advogado");


// function nextImage() {
//     images[currentImageIndex].classList.remove("active"), bullets[currentImageIndex].classList.remove("active"), ++currentImageIndex >= max && (currentImageIndex = 0), images[currentImageIndex].classList.add("active"), bullets[currentImageIndex].classList.add("active")
// }

function start() {
    // setInterval(() => {
    //     nextImage()
    // }, time)
    tituloNome.classList.add('titulo-activated');
    tituloAdvogado.classList.add('titulo-activated');

}

function selectBullet(e) {
    for (let e = 0; e < 4; e++) images[e].classList.remove("active"), bullets[e].classList.remove("active");
    images[e].classList.add("active"), bullets[e].classList.add("active")
}

function nextSlide() {
    const e = widthSlide[0].offsetWidth - widthSlide[0].scrollWidth;
    if (leftSlide -= 443, e < -443) {
        let e = document.createAttribute("style");
        e.value = "margin-left:" + leftSlide + "px;transition: ease 0.5s;", vacinas[0].setAttributeNode(e)
    } else if (e >= -1185) {
        let e = document.createAttribute("style");
        e.value = "margin-left:" + initSlide + "px;transition: ease 0.5s;", vacinas[0].setAttributeNode(e), leftSlide = 0
    }
}

function prevSlide() {
    const e = widthSlide[0].offsetWidth - widthSlide[0].scrollWidth;
    if (e > -473) {
        let e = document.createAttribute("style");
        e.value = "margin-left:0px;transition: ease 0.5s;", vacinas[0].setAttributeNode(e)
    }
}

function scrollAnchor() {
    document.querySelector('a[href^="#"]').scrollIntoView({
        behavior: "smooth",
        
    })
}

function incorporarVideo() {
    document.querySelector("#video-campanha").innerHTML = '<iframe width="600" height="340" src="https://www.youtube.com/embed/T5KNzePqlCw?autoplay=1"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function menuActive() {
    0 === document.querySelectorAll(".active-menu").length ? activeMenu[0].classList.add("active-menu") : activeMenu[0].classList.remove("active-menu")
}
max = images.length, bullets = document.querySelectorAll("#slider li"), vacinas = document.querySelectorAll("#slide-vacina"), widthSlide = document.querySelectorAll(".info-slide"), initSlide = widthSlide[0].offsetWidth - widthSlide[0].scrollWidth, currentSlideIndex = 0, leftSlide = 0, activeMenu = document.querySelectorAll("#menu"), window.addEventListener("load", start);

