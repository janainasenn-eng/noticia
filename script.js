* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f2f5f8;
    color: #222;
    line-height: 1.6;
    transition: 0.3s;
}

/* CABEÇALHO */

header {
    background: linear-gradient(135deg, #123b63, #1877b7);
    color: white;
    padding: 25px 8%;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.topo {
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

.escola {
    text-align: right;
    font-size: 14px;
}

/* MENU */

nav {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

nav ul {
    max-width: 1100px;
    margin: auto;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    gap: 35px;
    list-style: none;
}

nav a {
    color: #123b63;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: #1877b7;
}

/* NOTÍCIA */

main {
    max-width: 900px;
    margin: 45px auto;
    padding: 0 20px;
}

article {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.conteudo {
    padding: 40px;
}

.categoria {
    display: inline-block;
    background: #1877b7;
    color: white;
    padding: 7px 15px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 15px;
}

h1 {
    color: #123b63;
    font-size: 42px;
    line-height: 1.15;
    margin-bottom: 15px;
}

.subtitulo {
    color: #666;
    font-size: 20px;
    margin-bottom: 20px;
}

/* INFORMAÇÕES */

.info {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 12px 0;
    margin-bottom: 25px;
    color: #666;
    font-size: 14px;
}

.info strong {
    color: #123b63;
}

.info span {
    margin: 0 8px;
}

/* IMAGEM */

.imagem {
    height: 330px;
    background: linear-gradient(135deg, #dcefff, #edf8ff);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.icone {
    font-size: 130px;
    background: #123b63;
    width: 230px;
    height: 160px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.texto-imagem {
    position: absolute;
    bottom: 25px;
    text-align: center;
    color: #123b63;
}

.texto-imagem h2 {
    font-size: 25px;
}

.texto-imagem p {
    color: #1877b7;
}

.elemento {
    position: absolute;
    right: 15%;
    top: 25%;
    font-size: 45px;
    color: #1877b7;
}

.elemento2 {
    left: 15%;
    right: auto;
    top: 20%;
}

.legenda {
    text-align: center;
    color: #777;
    font-size: 13px;
    padding: 10px 20px;
}

/* TEXTO */

.texto p {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: justify;
}

.destaque {
    background: #eaf5fc;
    border-left: 5px solid #1877b7;
    padding: 20px;
    margin: 25px 0;
    font-size: 18px;
    color: #123b63;
    font-weight: bold;
}

/* BOTÕES */

.acoes {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
}

button {
    border: none;
    padding: 12px 22px;
    border-radius: 8px;
    background: #1877b7;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #123b63;
    transform: translateY(-2px);
}

/* RODAPÉ */

footer {
    margin-top: 50px;
    background: #123b63;
    color: white;
    text-align: center;
    padding: 30px 20px;
}

footer p {
    margin: 5px;
}

/* MODO ESCURO */

body.escuro {
    background: #101820;
    color: #eee;
}

body.escuro article,
body.escuro nav {
    background: #1c2933;
}

body.escuro h1 {
    color: #7bc8ff;
}

body.escuro .subtitulo,
body.escuro .info {
    color: #c5c5c5;
}

body.escuro .info strong {
    color: #7bc8ff;
}

body.escuro .destaque {
    background: #243b4a;
    color: #d8efff;
}

body.escuro nav a {
    color: #7bc8ff;
}

/* RESPONSIVO */

@media (max-width: 700px) {

    .topo {
        flex-direction: column;
        text-align: center;
    }

    .escola {
        text-align: center;
    }

    nav ul {
        gap: 15px;
        flex-wrap: wrap;
    }

    h1 {
        font-size: 32px;
    }

    .subtitulo {
        font-size: 18px;
    }

    .conteudo {
        padding: 25px;
    }

    .texto p {
        font-size: 16px;
    }

    .imagem {
        height: 280px;
    }

    .icone {
        width: 190px;
        height: 135px;
        font-size: 100px;
    }
}

/* IMPRESSÃO */

@media print {

    nav,
    .acoes {
        display: none;
    }

    body {
        background: white;
    }

    article {
        box-shadow: none;
    }
}