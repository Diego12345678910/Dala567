var saludoformal = function(nombre){
	return "buenas tardes_ " + nombre + "gusto_ en_saludarlo.";
}

var saludoinformal = function (nombre) {
	return"que tranzas :" + nombre + "?";

}

var saludar = function(saludo,nombre ) {
	return saludo (nombre);
}

var persona="Juan";

if (persona=="Diego"){
	console.log(saludar(saludoinformal, persona));
} else{
	console.log(saludar(saludoformal, persona));
}