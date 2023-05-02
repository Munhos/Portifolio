const botao_D_medicamentos = document.getElementById("botao_D_medicamentos")
const botao_E_medicamentos = document.getElementById("botao_E_medicamentos")
const container_slider_medicamentos = document.getElementById("container_slider_medicamentos")
let cont_medicamentos = 0
botao_D_medicamentos.addEventListener('click', () => {
    if(cont_medicamentos == 0){
        container_slider_medicamentos.style.transform="translateX(-440px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos += 1
        console.log(cont_medicamentos)
    }else if(cont_medicamentos == 1){
        container_slider_medicamentos.style.transform="translateX(-760px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos += 1
        console.log(cont_medicamentos)
    }else if(cont_medicamentos == 2){
        container_slider_medicamentos.style.transform="translateX(-1080px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos += 1
        console.log(cont_medicamentos)
    }
    else if(cont_medicamentos == 3){
        container_slider_medicamentos.style.transform="translateX(-1400px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos += 1
        console.log(cont_medicamentos)
    }
    
})
botao_E_medicamentos.addEventListener('click', () => {
    if(cont_medicamentos == 0){
        container_slider_medicamentos.style.transform="translateX(0px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
    }else if(cont_medicamentos == 1){
        container_slider_medicamentos.style.transform="translateX(-100px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos -= 1
        console.log(cont_medicamentos)
    }else if(cont_medicamentos == 2){
        container_slider_medicamentos.style.transform="translateX(-440px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos -= 1
        console.log(cont_medicamentos)
    }else if( cont_medicamentos == 3){
        container_slider_medicamentos.style.transform="translateX(-760px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos -= 1
        console.log(cont_medicamentos)
    }
    else if( cont_medicamentos == 4){
        container_slider_medicamentos.style.transform="translateX(-1080px)"
        container_slider_medicamentos.style.transition="0.5s ease-in-out"
        cont_medicamentos -= 1
        console.log(cont_medicamentos)
    }
    
})










const botao_D_cosmeticos = document.getElementById("botao_D_cosmeticos")
const botao_E_cosmeticos = document.getElementById("botao_E_cosmeticos")
const container_slider_cosmeticos = document.getElementById("container_slider_cosmeticos")
let cont_cosmeticos = 0
botao_D_cosmeticos.addEventListener('click', () => {
    if(cont_cosmeticos == 0){
        container_slider_cosmeticos.style.transform="translateX(-440px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos += 1
        console.log(cont_cosmeticos)
    }else if(cont_cosmeticos == 1){
        container_slider_cosmeticos.style.transform="translateX(-760px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos += 1
        console.log(cont_cosmeticos)
    }else if(cont_cosmeticos == 2){
        container_slider_cosmeticos.style.transform="translateX(-1080px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos += 1
        console.log(cont_cosmeticos)
    }
    else if(cont_cosmeticos == 3){
        container_slider_cosmeticos.style.transform="translateX(-1400px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos += 1
        console.log(cont_cosmeticos)
    }
    
})
botao_E_cosmeticos.addEventListener('click', () => {
    if(cont_cosmeticos == 0){
        container_slider_cosmeticos.style.transform="translateX(0px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
    }else if(cont_cosmeticos == 1){
        container_slider_cosmeticos.style.transform="translateX(-100px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos -= 1
        console.log(cont_cosmeticos)
    }else if(cont_cosmeticos == 2){
        container_slider_cosmeticos.style.transform="translateX(-440px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos -= 1
        console.log(cont_cosmeticos)
    }else if( cont_cosmeticos == 3){
        container_slider_cosmeticos.style.transform="translateX(-760px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos -= 1
        console.log(cont_cosmeticos)
    }
    else if( cont_cosmeticos == 4){
        container_slider_cosmeticos.style.transform="translateX(-1080px)"
        container_slider_cosmeticos.style.transition="0.5s ease-in-out"
        cont_cosmeticos -= 1
        console.log(cont_cosmeticos)
    }
    
})








const botao_D_ofertas = document.getElementById("botao_D_ofertas")
const botao_E_ofertas = document.getElementById("botao_E_ofertas")
const container_slider_ofertas = document.getElementById("container_slider_ofertas")
let cont_ofertas = 0
botao_D_ofertas.addEventListener('click', () => {
    if(cont_ofertas == 0){
        container_slider_ofertas.style.transform="translateX(-440px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas += 1
        console.log(cont_ofertas)
    }else if(cont_ofertas == 1){
        container_slider_ofertas.style.transform="translateX(-760px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas += 1
        console.log(cont_ofertas)
    }else if(cont_ofertas == 2){
        container_slider_ofertas.style.transform="translateX(-1080px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas += 1
        console.log(cont_ofertas)
    }
    else if(cont_ofertas == 3){
        container_slider_ofertas.style.transform="translateX(-1400px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas += 1
        console.log(cont_ofertas)
    }
    
})
botao_E_ofertas.addEventListener('click', () => {
    if(cont_ofertas == 0){
        container_slider_ofertas.style.transform="translateX(0px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
    }else if(cont_ofertas == 1){
        container_slider_ofertas.style.transform="translateX(-100px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas -= 1
        console.log(cont_ofertas)
    }else if(cont_ofertas == 2){
        container_slider_ofertas.style.transform="translateX(-440px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas -= 1
        console.log(cont_ofertas)
    }else if( cont_ofertas == 3){
        container_slider_ofertas.style.transform="translateX(-760px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas -= 1
        console.log(cont_ofertas)
    }
    else if( cont_ofertas == 4){
        container_slider_ofertas.style.transform="translateX(-1080px)"
        container_slider_ofertas.style.transition="0.5s ease-in-out"
        cont_ofertas -= 1
        console.log(cont_ofertas)
    }
    
})







const botao_D_conveniencia = document.getElementById("botao_D_conveniencia")
const botao_E_conveniencia = document.getElementById("botao_E_conveniencia")
const container_slider_conveniencia = document.getElementById("container_slider_conveniencia")
let cont_conveniencia = 0
botao_D_conveniencia.addEventListener('click', () => {
    if(cont_conveniencia == 0){
        container_slider_conveniencia.style.transform="translateX(-440px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia += 1
        console.log(cont_conveniencia)
    }else if(cont_conveniencia == 1){
        container_slider_conveniencia.style.transform="translateX(-760px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia += 1
        console.log(cont_conveniencia)
    }else if(cont_conveniencia == 2){
        container_slider_conveniencia.style.transform="translateX(-1080px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia += 1
        console.log(cont_conveniencia)
    }
    else if(cont_conveniencia == 3){
        container_slider_conveniencia.style.transform="translateX(-1400px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia += 1
        console.log(cont_conveniencia)
    }
    
})
botao_E_conveniencia.addEventListener('click', () => {
    if(cont_conveniencia == 0){
        container_slider_conveniencia.style.transform="translateX(0px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
    }else if(cont_conveniencia == 1){
        container_slider_conveniencia.style.transform="translateX(-100px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia -= 1
        console.log(cont_conveniencia)
    }else if(cont_conveniencia == 2){
        container_slider_conveniencia.style.transform="translateX(-440px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia -= 1
        console.log(cont_conveniencia)
    }else if( cont_conveniencia == 3){
        container_slider_conveniencia.style.transform="translateX(-760px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia -= 1
        console.log(cont_conveniencia)
    }
    else if( cont_conveniencia == 4){
        container_slider_conveniencia.style.transform="translateX(-1080px)"
        container_slider_conveniencia.style.transition="0.5s ease-in-out"
        cont_conveniencia -= 1
        console.log(conveniencia)
    }
    
})





const boinfantil = document.getElementById("botao_D_infantil")
const botao_E_infantil = document.getElementById("botao_E_infantil")
const container_slider_infantil = document.getElementById("container_slider_infantil")
let cont_infantil = 0
botao_D_infantil.addEventListener('click', () => {
    if(cont_infantil == 0){
        container_slider_infantil.style.transform="translateX(-440px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil += 1
        console.log(cont_infantil)
    }else if(cont_infantil == 1){
        container_slider_infantil.style.transform="translateX(-760px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil += 1
        console.log(cont_infantil)
    }else if(cont_infantil == 2){
        container_slider_infantil.style.transform="translateX(-1080px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil += 1
        console.log(cont_infantil)
    }
    else if(cont_infantil == 3){
        container_slider_infantil.style.transform="translateX(-1400px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil += 1
        console.log(cont_infantil)
    }
    
})
botao_E_infantil.addEventListener('click', () => {
    if(cont_infantil == 0){
        container_slider_infantil.style.transform="translateX(0px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
    }else if(cont_infantil == 1){
        container_slider_infantil.style.transform="translateX(-100px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil -= 1
        console.log(cont_infantil)
    }else if(cont_infantil == 2){
        container_slider_infantil.style.transform="translateX(-440px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil -= 1
        console.log(cont_infantil)
    }else if( cont_infantil == 3){
        container_slider_infantil.style.transform="translateX(-760px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil -= 1
        console.log(cont_infantil)
    }
    else if( cont_infantil == 4){
        container_slider_infantil.style.transform="translateX(-1080px)"
        container_slider_infantil.style.transition="0.5s ease-in-out"
        cont_infantil -= 1
        console.log(cont_infantil)
    }
    
})