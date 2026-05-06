let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")

for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;
    
    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pinta)
    
}

function pinta (e){
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
console.log(operadores)

for (const key in operadores) {
    if (boton.innerText == "C") {
            boton.addEventListener("click", borrar)
        } else if (boton.innerText == "+") {
            boton.addEventListener("click", sumar)
        } else {

            boton.addEventListener("click", pinta2)
        }

function pinta2 (e){{
    console.log(e.target.innerText)
    }
}

bborrar.addEventListener("click", borrar)

function borrar (){
    resultado.value = ""
}

bmas.addEventListener("click", sumar)

function sumar(e) {
    prm = resultado.value
    operacion = e.target.innerText
    resultado.value = ""
    e.target.style.backgroundColor = "red"
    }

function igual(e) {
    
}

}