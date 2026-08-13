document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        ".hero-conteudo, .foto-moldura, .materia, .lateral"
    );

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("aparecer");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });


    /* BOTÃO LER NOTÍCIA */

    const botaoLer = document.getElementById("botaoLer");
    const noticia = document.getElementById("noticia");

    botaoLer.addEventListener("click", () => {

        noticia.scrollIntoView({
            behavior: "smooth"
        });

    });


    /* BARRA DE LEITURA */

    const barra = document.getElementById("barraProgresso");

    window.addEventListener("scroll", () => {

        const altura =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progresso =
            (window.scrollY / altura) * 100;

        barra.style.width = `${progresso}%`;

    });


    /* VALIDAÇÃO DOS LIMITES DA ATIVIDADE */

    const titulo = document.querySelector("h1");
    const subtitulo = document.querySelector(".subtitulo");
    const materia = document.querySelector(".materia");

    console.log("Título:", titulo.innerText.length, "/ 70 caracteres");
    console.log("Subtítulo:", subtitulo.innerText.length, "/ 80 caracteres");
    console.log("Conteúdo:", materia.innerText.replace(/\n/g, "").length, "/ 1200 caracteres");

});