// Calculadora IMC 

let seguirCalculando = true 

while (seguirCalculando) {

function calcularIMC(peso, altura) {
    let indiceMasaCorporal = peso / (altura * altura) * 10000;
    return indiceMasaCorporal
}

let peso = parseInt(prompt("Ingrese su peso en kilogramos: "))
let altura = parseInt(prompt("Ingrese su altura en centimetros: "))

let indiceMasaCorporal = calcularIMC(peso, altura);
let indiceMasaCorporal2cifras = indiceMasaCorporal.toFixed(2)
console.log("Su IMC es de " + indiceMasaCorporal2cifras)

if (indiceMasaCorporal2cifras < 18) {
    console.log("Indice inferior al normal");
} else if (indiceMasaCorporal2cifras >= 18 && indiceMasaCorporal2cifras < 25) {
    console.log("Indice normal");
} else if (indiceMasaCorporal2cifras >= 25 && indiceMasaCorporal2cifras < 30) {
    console.log("Indice superior al normal");
} else if (indiceMasaCorporal2cifras >= 30) {
    console.log("Obesidad");
}

seguirCalculando = confirm("Desea calcular otro IMC?")
}

console.log("Programa finalizado")