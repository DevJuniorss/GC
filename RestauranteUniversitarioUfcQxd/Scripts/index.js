var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
// Adicionando um listener ao botão
document.addEventListener('DOMContentLoaded', function() {
    const firstBtn = document.getElementById('nextHome');
    const secondBtn = document.getElementById('nextHome2');

    // Adicionando um evento de clique ao botão
    firstBtn.addEventListener('click', function() {
        // Redirecionar para outra página da web
        window.location.href = '../HTML/home.html';
    });
    // Adicionando um evento de clique ao botão
    secondBtn.addEventListener('click', function() {
        // Redirecionar para outra página da web
        window.location.href = '../HTML/home.html';
    });
});
