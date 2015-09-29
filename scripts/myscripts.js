$(document).ready(function(){

function obtenerFactorial(no, resultado){
		if (no==0){
		return 1;
		}else{
			return no*obtenerFactorial(no-1);
		 }
}

$("form").on("submit",function(event){
	event.preventDefault();

	var no = parseInt($("input#numero").val());
	var resultado= parseInt($("input#numero").val());
	var result = obtenerFactorial(no, resultado);
	console.log(result);

		$("#tabla").append("<tr><td>" + no + "</td><td>" + result + "</td></tr>");
		})
	})

