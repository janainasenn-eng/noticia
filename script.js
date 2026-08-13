document.addEventListener("DOMContentLoaded", function () {

const noticia = document.querySelector(".noticia");

noticia.style.opacity = "0";
noticia.style.transform = "translateY(20px)";

setTimeout(function () {
noticia.style.transition = "opacity 0.8s ease, transform 0.8s ease";
noticia.style.opacity = "1";
noticia.style.transform = "translateY(0)";
}, 150);

});