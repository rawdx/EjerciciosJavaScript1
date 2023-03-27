class Poligono {
	constructor(altura, ancho) {
		this.altura = altura;
		this.ancho = ancho;
		this.nombre = "Polígono";
	}

	leerNombre() {
		return this.nombre;
	}
}

let pol = new Poligono(100, 200);

console.log(pol.leerNombre());
document.write(pol.altura + "<br>" + pol.ancho);


class Cuadrado extends Poligono {
	constructor(lado) {
		super(lado, lado);
		this.nombre = "Cuadrado";
	}

	area() {
		return this.altura * this.ancho;
	}
}

var cua = new Cuadrado(20);