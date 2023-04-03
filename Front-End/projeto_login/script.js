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