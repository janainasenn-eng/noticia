document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("aumentarTexto");


    botao.addEventListener("click", function () {

        document.body.classList.toggle("texto-grande");


        if (document.body.classList.contains("texto-grande")) {

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

});