/* bs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000] */

var días = ("Lunes, Martes, Miércoles, Jueves, Viernes") 
var valoresProductos = [100, 200, 800, 10000] // matriz de precios de los productos del minimarket

/* 1. Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento. */

var martes =("martes") // defino días con oferta
var jueves = ("jueves")
var lunes = ("lunes")
var miércoles = ("miércoles")
var viernes = ("viernes")
var valoresOferta = [] // matriz para nuevos productos 

function ofertasMyJ (día){ // función de ofertas para martes y jueves
    if ( día == martes || día == jueves) { // la oferta se hace tanto martes como jueves
        valoresProductos.forEach(numero=>valoresOferta.push(numero * 0.80)) // bucle para realizar oferta en cada precio incorporado en matriz
            console.log(valoresOferta) // se muestra en consola nuevo precio
    }else{ // cualquier otro día, no hay oferta
        console.log(valoresProductos) // se muestra en consola precios originales
    }
}
ofertasMyJ (viernes)


/* 2. Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento. */

var dcto5 = [] // variable para descuentos del 5%

function descuento (productos) { // función para determinar descuentos 
    for (i = 0; valoresProductos.length > 3; i++) { // for para determinar si hay más de 3 productos *por ahora genera loop*
        console.log("más de tres productos")
    if ( (i > 3) && (valoresProductos >= 1000)) { // si la cantidad de productos es > 3 Y uno de los valores en mayor a 1000 = Verdadero
        productos.forEach(numero=>dcto5.push(numero * 0.95)) } // descuento del 0,5%
        console.log(dcto5)
      }else{
        console.log
      }

}


/* 3. Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.
● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto */



/* 4. Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso.*/

function numeroMayor (valores){
    for ( i = 0; valoresProductos.length < i; i++){
        if (valores < valoresProductos) {
            mayor = valoresProductos
        }
    }
}

