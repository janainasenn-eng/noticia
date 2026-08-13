document.addEventListener("DOMContentLoaded", function () {
    // Garantindo a consistência da exibição de metadados
    const dataElemento = document.getElementById("data-publicacao");
    
    // Verificação de carregamento da imagem para diagnóstico no console
    const imgElemento = document.getElementById("imagem-noticia");
    imgElemento.onerror = function () {
        console.warn("Atenção: A imagem 'images.jpeg' precisa estar na mesma pasta dos arquivos HTML/CSS/JS.");
    };
});