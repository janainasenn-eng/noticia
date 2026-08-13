document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("fontButton");

    const body = document.body;


    /* =========================
       AUMENTAR TEXTO
    ========================= */

    botao.addEventListener("click", function () {

        body.classList.toggle("texto-grande");


        if (body.classList.contains("texto-grande")) {

            botao.textContent = "A−";

            botao.setAttribute(
                "aria-label",
                "Diminuir tamanho do texto"
            );

        } else {

            botao.textContent = "A+";

            botao.setAttribute(
                "aria-label",
                "Aumentar tamanho do texto"
            );

        }

    });



    /* =========================
       ANIMAÇÃO AO ROLAR
    ========================= */

    const article = document.querySelector(".article-card");


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    article.style.opacity = "0";

    article.style.transform =
        "translateY(35px)";

    article.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";


    observer.observe(article);



    /* =========================
       EFEITO PARALLAX NA IMAGEM
    ========================= */

    const heroImage =
        document.querySelector(".hero-image img");


    window.addEventListener("scroll", function () {

        const scroll =
            window.scrollY;


        if (scroll < 700) {

            heroImage.style.transform =
                `scale(1.04) translateY(${scroll * 0.08}px)`;

        }

    });

});