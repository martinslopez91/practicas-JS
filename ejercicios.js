/* ----------------------------------EJERCICIOS---------------------------------------*/

//EJERCICIOS 1

/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

let persona ={
    nombre:"Esto es un objeto",
    cantidad:100
}
let arreglo = ["cadena numero uno ","cadena numero dos"]

const contarCaracteres = (cadena = "") =>(!cadena) ? console.warn("Debes ingresar algun texto") : console.info(`La cadena ${cadena.toString()} tiene ${cadena.toString().length} caracteres`)

//contarCaracteres(persona) 


function cantidadCaracteres(cadena){
    console.log(cadena.toString().length)
}
//cantidadCaracteres(persona)


//---------------------------------------------------------------------------------

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


const textoContado = (cadena = "",numero) => (!cadena && !numero) ? console.warn("Debes ingresar algun texto y numero") : console.log(cadena.substring(0,numero))

//textoContado("Esto es una cadena",7)

/*
function textoContado(cadena,numero){
   console.log(cadena.substring(0,numero)) 
}
*/
//textoContado("Esto es una cadena de texto",6)

//---------------------------------------------------------------------------------

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
/*
let texto = "este es un texto que tiene que aparecer dividido por palabras"
let espacio = " "
const separarPalabras = (cadena = "",separador) => (!cadena && !separador) ? console.warn("Debes ingresar un texto y un separador") : console.log(cadena.split(separador))
separarPalabras(texto,espacio)
*/

let texto = "este es un texto que tiene que aparecer dividido por palabras"
let espacio = " "

function separarPalabras(cadena,separador){
    console.log(cadena.split(separador))
}
//separarPalabras(texto,espacio)


//---------------------------------------------------------------------------------

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 

const repetirTexto = (cadena = "",numero) => (!cadena && !numero) ? console.warn("Debes ingresar un texto y un numero") : console.log(cadena.repeat(numero))
//repetirTexto("hola mundo",10)




function repeticionTexto(cadena,numero){
    console.log(cadena.repeat(numero))
}
//repeticionTexto("hola mundo",5)



//----------------------------------------------------------------------------------------------------------------------------------------

//EJERCICIOS 2

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirTexto = (cadena = "") =>
    (!cadena) ? console.warn("Debes ingresar un texto")
     :console.info(cadena.split("").reverse().join(' '))


//invertirTexto("esto es una cadena")
//invertirTexto()

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

let textoLargo = "Esto es un texto repetido repetido, hola mundo, mundo"

const contarPalabras = (cadena = "",palabra = undefined) =>{
    if(!cadena) console.warn("Debes ingresar un texto")
    if(palabra === undefined) console.warn("Debes ingresar la palabra a contar")
    let palabrasSeparadas = cadena.split(" ")
    for(i=0;i<=palabrasSeparadas.length;i++){
        let buscarPalabra = palabrasSeparadas[i]
        let acumulador;
        if(buscarPalabra === palabra){
            acumulador++
            console.log(acumulador)
        }

    }

}
//contarPalabras(textoLargo,"repetido")

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

let palinUno = "neuquen"
let palinDos = "es neuquen se"
let validador = false
const palindromo = (frase = "")=>{
    let fraseDividida = frase.substring(0,frase.length / 2 + 1)
    let fraseAlReves = frase.slice(frase.length / 2).split("").reverse().join('')
    if(!frase){
        console.warn("debes ingresar una palabra o frase")
    }if(fraseDividida === fraseAlReves){
        validador = true;
        console.log(validador)
    }if(fraseDividida !== fraseAlReves){
        console.warn(validador)
        console.warn("La frase o palabra no se lee igual al derecho y al reves")
    }
    console.log(fraseDividida)
    console.log(fraseAlReves)
       
}
//palindromo(palinDos)

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


//-----------------------SALTO DE EJERICIOS----------------------------//

//9) Programa una funcion que calcule el factorial de un numero (El factorial de un numero entero positivo n,  se define como el producto de todos los numeros enteros positivos desde 1 hasta n), P.ejemplo : mifuncion(5) DEVUELVE 120

let acumulador = 1;
const factorial = (n = 0) => {
    if(typeof n !== "number") return console.warn("Debes ingresar solamente numeros, tu valor es invalido")
    
    if(!n) return console.error("No has ingresado ningun valor, debes elegir un numero y colocarlo en el casillero")

    else{
        for(i = 1;i <= n;i ++){
          
            acumulador *= i;
            resultado = acumulador   
        }
    }
    console.log(`El factorial de ${n} es ${resultado}`)
}
//factorial()
//factorial("10")
//factorial(4)



//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = 0) =>{
    if (typeof numero !== "number") return console.error("Debes ingresar solamente numeros")
    if (!numero) return console.warn("Debes ingresar algun numero el casillero no puede estar vacio")
    if (numero <= 1) {
        console.error("Los números menores o iguales a 1 no son primos.");
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(`El número ${numero} no es primo.`);
            return false;
        }
    }
    
    console.log(`Felicidades el numero ${numero} es primo` )
}
//numeroPrimo(2)

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = (numero = 0) =>{
    if(typeof numero !== "number") return console.warn("Debes ingresar solo numeros")
    if(numero <= 1) return console.error("Debes ingresar numero a partir de 1")
    if(numero % 2 === 0) return console.log(`Felicidades el numero ${numero} es par`)
    else return console.warn(`Lo lamento el numero ${numero} no es par`)

}
//esPar(9)
//esPar(-5)
//esPar("7")

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const conversionCelcius = (farenheit) =>{
    return Math.round((farenheit - 32) * 0.56)
}
const conversionFarenheit = (celcius) =>{
    return Math.round((celcius * (9 / 5)) + 32)
}
const conversion = (numero,grados = "") =>{
    grados = grados.toLowerCase()
    if(grados === "f") return console.log(`${conversionFarenheit(numero)} grados farenheit`) 
    if(grados === "c") return console.log(`${conversionCelcius(numero)} grados celcius`)
    else{
        console.warn("Debes ingresar dos valores primero los grados a calcular, luego en mayuscula y entre comillas dobles si los quieres en farnheit coloca 'F' si los quieres en celcius coloca 'C', por ejemplo quedari asi : conversion(30,'F') ")
    }
}
//conversion(0,"F")
//conversion(0,"C")
//conversion("c")



//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

let productosValor = [1000,2000,7000]
let descuento = 0.2;
const finalConDescuento = (productos = undefined) => {

    if(productos === undefined) return console.warn("Debes ingresar una lista de precios para poder aplicar el descuento deseado")
    if(descuento === 0) return console.warn("Debes ingresar el descuento que deseas aplicar al precio final de los productos")
    else{     
        productoFinal = productos.reduce((acumulador, numero) => acumulador + numero, 0)
        totalConDescuento = Math.round(productoFinal - (productoFinal * descuento));
        console.log(`El total con descuento es de ${totalConDescuento}`)
    }
       
     

}
finalConDescuento(productosValor)

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
