console.log("Hola Mundo!");
alert("Cuidado, tu navegador podria ser incompatible con JavaScript.");

//Esta función coge el id de un elemento y le añade a éste código html
function ej1(){
	document.getElementById('a').innerHTML = "Soy el primer script";
}

//Se muestra una alerta con un mensaje dado por una variable
function ej2(){
	let mensaje = "Soy el primer script";
	alert(mensaje);
}

function ej3(){
	let meses =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre","diciembre"];
	
	//Recorre el array e imprime en consola sus valores
	for(let i = 0; i < meses.length; i++)
		console.log(meses[i]);
}

function ej4(){
	var valores = [true, 5, false, "hola", "adios", 2];
	
	//Lo siguente es como un if/else pero con sintaxis diferente, si es true la comparación devuelve valores[3]
	//y si es false devuelve valores[4], el valor con mayor longitud se imprime en pantalla.
	document.write((valores[3].length > valores[4].length) ? valores[3] : valores[4]);
	
	document.write("<br>true && false: ");
	document.write(valores[0] && valores[2]);
	document.write("<br>true || false: " + valores[0] || valores[2]);
	
	//Se incluye entre parentesis la operación para que no surja error de concatenación
	document.writeln("<br>Suma: " + (valores[1] + valores[5]));
	document.write("<br>Resta: " + (valores[1] - valores[5]));
	document.write("<br>Multiplicación: " + valores[1] * valores[5]);
	document.write("<br>División: " + valores[1] / valores[5]);
	document.write("<br>Resto: " + valores[1] % valores[5]);
	
	let inc = valores[1];
	let dec = valores[1];
	inc++;
	dec--;
	document.write("<br><br>Incremento: " + inc);
	document.write("<br>Decremento: " + dec);
	
	document.write("<br><br>Exponente: " + valores[5] ** valores[1]);
}

function ej5() {
	var numero1 = 5;
	var numero2 = 8;

	if (numero1 < numero2)
		console.log("numero1 no es mayor que numero2");
		
	if (numero2 > 0)
		console.log("numero2 es positivo");
		
	if (numero1 < 0)
		console.log("numero1 es negativo o distinto de cero");
		
	if (!(numero1++ >= numero2))
		console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}