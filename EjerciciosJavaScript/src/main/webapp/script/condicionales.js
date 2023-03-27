let edad = Number(prompt("Introduce tu edad: "))

if (edad < 18 && edad >= 1)
	document.write("No se permite acceso a menores de edad.")
else if (edad > 100 || edad < 1 || isNaN(edad))
	document.write("La edad introducida no es correcta.")
else {
	let categ = prompt("Introduce la categoría de ropa: ").toLowerCase()
	let precio = Number(prompt("Introduce el precio: "))

	switch (categ) {
		case "camisetas":
			document.write("El precio en rebaja en " + categ + " es de " + precio * 95 / 100 + "$.")
			break
		case "pantalones":
			document.write("El precio en rebaja en " + categ + " es de " + precio * 90 / 100 + "$.")
			break
		case "ropa interior":
			document.write("El precio en rebaja en " + categ + " es de " + precio + "$.")
			break
		case "chaquetones":
			document.write("El precio en rebaja en " + categ + " es de " + precio / 2 + "$.")
			break
		default:
			document.write("El precio en rebaja es de " + precio * 98 / 100 + "$.")
			break
	}
}

