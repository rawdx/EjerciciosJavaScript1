class Vehiculo{
	constructor(marca, modelo, cilindrada){
		this._marca = marca;
		this._modelo = modelo;
		this._cilindrada = cilindrada;
	}
	
	get marca(){
		return this._marca;
	}
	
	get modelo(){
		return this._modelo;
	}
	
	get cilindrada(){
		return this._cilindrada;
	}
}

class Coche extends Vehiculo{
	constructor(marca, modelo, cilindrada, numPuertas, numOcupantes){
		super(marca, modelo, cilindrada);
		this._numPuertas = numPuertas;
		this.numOcupantes = numOcupantes;
	}
	
	get numPuertas(){
		return this._numPuertas;
	}
	
}

class Moto extends Vehiculo{
	constructor(marca, modelo, cilindrada, anioDisenio, carnet){
		super(marca, modelo, cilindrada);
		this._anioDisenio = anioDisenio;
		this.carnet = carnet;
	}
	
	get anioDisenio(){
		return this._anioDisenio;
	}
	
}

let miCarro = new Coche("Peugeot", "nose", 100, 4, 4);
let miMoto = new Moto("Carro", "si", 200, 2000, 1233456)
document.write(miCarro.marca + "<br>" + miCarro.numPuertas)
document.write("<br>" + miMoto.marca + "<br>" + miMoto.carnet)
