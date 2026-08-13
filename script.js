/* =====================================
   DADOS DA NOTÍCIA
===================================== */

const dadosNoticia = {

    colegio: "Colégio Estadual Frederico Guilherme Giese",

    disciplina: "Educação Digital",

    autora: "Janaina Senn",

    data: "12/08/2026"

};


/* =====================================
   INSERINDO OS DADOS NA PÁGINA
===================================== */

document.getElementById("colegio").textContent =
    dadosNoticia.colegio;


document.getElementById("disciplina").textContent =
    dadosNoticia.disciplina;


document.getElementById("autora").textContent =
    dadosNoticia.autora;


document.getElementById("data").textContent =
    dadosNoticia.data;


/* =====================================
   EFEITO NO CARREGAMENTO
===================================== */

window.addEventListener("load", function () {

    document.querySelector(".noticia").classList.add("carregada");

});