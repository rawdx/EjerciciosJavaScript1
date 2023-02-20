function ej6() {
	let num = prompt("Escribe un número:");
	
	var factorial = 1; 
	for (i=2; i<=num; i++) {
		factorial = factorial * i; 
	}
	document.write(factorial); 
}

function ej7(num){
	if(num%2 == 0){
		document.write("El numero " + num + " es par");
	}else
		document.write("El numero " + num + " es impar");
}

function ej8(){
	let txt = prompt("Introduce una palabra:");
	
	if (txt == txt.toLowerCase())
		document.write(txt + " solo contiene minusculas."); 
	else
		if (txt == txt.toUpperCase())
			document.write(txt + " solo contiene mayusculas.");
			else
			document.write(txt + " contiene mayusculas y minusculas.");
}