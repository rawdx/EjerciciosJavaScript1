class Punto {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this._nombre = "punto";
	}

	set nombre(valorNombre) {
		if (valorNombre == "hola") {
			valorNombre = "adios";
		}
		this._nombre = valorNombre;
	}

	get nombre() {
		return this._nombre;
	}

	distancia(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;

		return Math.sqrt(dx * dx + dy * dy);
	}
}

let punto = new Punto(2, 4)

//Set (Aunque pide parametro asi es como se utiliza)
punto.nombre = "hola"

//Get
document.write(punto.nombre)

//Tecnicamente se puede hacer pero el _ indica que no debemos
document.write(punto._nombre)