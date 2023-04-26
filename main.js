// Calculadora IMC 

let seguirCalculando = true 
let imcArray = []

function calcularIMC(peso, altura) {
    let indiceMasaCorporal = peso / (altura * altura) * 10000;
    imcArray.push(indiceMasaCorporal)
    return indiceMasaCorporal
}

class Persona {
    constructor(peso, altura) {
        this.peso = peso
        this.altura = altura
    }
}

while (seguirCalculando) {

const peso = parseInt(prompt("Ingrese su peso en kilogramos: "))
const altura = parseInt(prompt("Ingrese su altura en centimetros: "))
const persona1 = new Persona(peso, altura)

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

imcArray.forEach((imc, index) => {
    console.log(`Persona ${index + 1}: Peso ${persona1.peso}kg, Altura ${persona1.altura}cm, IMC ${imc.toFixed(2)}`);
    });

seguirCalculando = confirm("Desea calcular otro IMC?")
}

if (!seguirCalculando) {
    console.log("Programa finalizado");
}


