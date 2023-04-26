const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passawordInput = document.querySelector("#passaword");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome esta vazio
     if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
     }



     //verifica se o email esta preenchido e se é valido 
     if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
     }

     //verifica se esta preenchido
     if(validatePassaword(passawordInput.value)) {
         alert("A senha precisa ter no minimo 8 digitos");
         return;
     }

     // verifica se a situaçao foi selecionada
     if(jobSelect.value === "") {
        alert("Por favor, selecione a sua situaçao");
        return;
     }
     //verifica se a mensagem esta preenchida
     if(messageTextarea.value === "") {
        alert("Escreva uma mensagem");
        return;

     }


     // se todos os campos estiverem corretamente preenchido envie o form
     form.submit();

 });


// funçao que valida email 

function isEmailValid(email) {
    //criar uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
       /ˆ[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
     );

    if (emailRegex.test(email)) {
        return true;
    }
    return false;

}

// funçao que valida a senha

function validatePassaword(passaword, minDigits) {
    if (passaword.length >= minDigits) {
        // senha valida
        return true
    }  
    return false
}