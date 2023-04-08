/* function abrir_login(){
    var fundo_login = document.getElementById("fundo_login")
    fundo_login.classList.add("abrir_login")
} */


var fundo_login = document.getElementById("fundo_login")
var botao_nav_login = document.getElementById("botao_nav_login")
botao_nav_login.onclick = function() {
    fundo_contact.close()
    fundo_login_login.close()
    fundo_login.show()
}

var botao_logo = document.getElementById("logo")
botao_logo.onclick = function (){
    fundo_login.close()
    fundo_contact.close()
}

var botao_nav_home = document.getElementById("botao_nav_home")
botao_nav_home.onclick = function (){
    fundo_login.close()
    fundo_contact.close()
}


var botao_nav_contact = document.getElementById("botao_nav_contact")
var fundo_contact =  document.getElementById("fundo_contact")
botao_nav_contact.onclick = function (){
    fundo_login.close()
    fundo_login_login.close()
    fundo_contact.show()
}

var botao_register_login = document.getElementById("botao_register_login")
var fundo_login_login = document.getElementById("fundo_login_login")
botao_register_login.onclick = function(){
    fundo_login.close()
    fundo_login_login.show()
}


const input_username = document.getElementById("input_username");
input_username.addEventListener("blur", function(){
    if(input_username.value == ""){
        label_username.classList.remove("sumir")
        label_username.classList.add("aparecer")
        console.log("Vazio")
    }else{
        const label_username = document.getElementById("label_username")
        label_username.classList.remove("aparecer")
        label_username.classList.add("sumir")
        console.log("Preenchido")
    }
})

const input_email = document.getElementById("input_email");
input_email.addEventListener("blur", function(){
    if(input_email.value == ""){
        label_email.classList.remove("sumir")
        label_email.classList.add("aparecer")
        console.log("Vazio")
    }else{
        const label_email = document.getElementById("label_email")
        label_email.classList.remove("aparecer")
        label_email.classList.add("sumir")
        console.log("Preenchido")
    }
})

const input_senha = document.getElementById("input_senha");
input_senha.addEventListener("blur", function(){
    if(input_senha.value == ""){
        label_senha.classList.remove("sumir")
        label_senha.classList.add("aparecer")
        console.log("Vazio")
    }else{
        const label_senha = document.getElementById("label_senha")
        label_senha.classList.remove("aparecer")
        label_senha.classList.add("sumir")
        console.log("Preenchido")
    }
})

const input_email_login = document.getElementById("input_email_login");
input_email_login.addEventListener("blur", function(){
    if(input_email_login.value == ""){
        label_email_login.classList.remove("sumir")
        label_email_login.classList.add("aparecer")
        console.log("Vazio")
    }else{
        const label_email_login = document.getElementById("label_email_login")
        label_email_login.classList.remove("aparecer")
        label_email_login.classList.add("sumir")
        console.log("Preenchido")
    }
})

const input_senha_login = document.getElementById("input_senha_login");
input_senha_login.addEventListener("blur", function(){
    if(input_senha_login.value == ""){
        label_senha_login.classList.remove("sumir")
        label_senha_login.classList.add("aparecer")
        console.log("Vazio")
    }else{
        const label_senha_login = document.getElementById("label_senha_login")
        label_senha_login.classList.remove("aparecer")
        label_senha_login.classList.add("sumir")
        console.log("Preenchido")
    }
})
