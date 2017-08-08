var triangulo = function (base,altura){
	return "areaTriangulo "+ ((base*altura)/2);
}

var rectangulo = function(base,altura){
	return "areaRectangulo "+ (base*altura);
}

var circulo = function(radio){
	return "circulo "+ (3.14*(radio)^2);
}
var solucion = function (calculo,num1,num2){
	return calculo(num1,num2);
}

console.log(solucion(triangulo,5,6));



