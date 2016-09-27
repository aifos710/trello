
window.addEventListener("load", function() { 
	
	var section = document.getElementById("section"); 
	var contenedor = document.getElementById("contenedor"); 
	var lista = document.getElementById("lista"); 
	var formulario = document.getElementById("formulario"); 
	var tInput = document.getElementById("tInput"); 
	var boton = document.getElementById("boton"); 
	var card = document.getElementById("card");

//version 1  creando desde html
lista.addEventListener("click", function(){ // pq al hacer click en lista quiero que  pase algo
	lista.classList.add("none");
	//darle hover en css
	formulario.classList.remove("none");
	contenedor.classList.add("bgContenedor");


});

//version 2

boton.addEventListener("click", function(e){
	e.preventDefault();
	addText()//como es boton se necesita esto para que no se redireccione
	formulario.classList.add("none"); //desparece
	lista.classList.add("none");//desparece
	card.style.display ="block";//aparece card de html
	card.classList.add("gray");
	
	newAdd();
});

function newAdd(){
	var newSpan = document.createElement("div");//creando nuevo span que va al lado
	section.appendChild(newSpan);
	lista.classList.remove("none");
	newSpan.classList.add("bgContenedor");
	newSpan.appendChild(lista);
	
	
}

function addText(){
	var titulo = tInput.value; //titulo de tarjeta nueva
	card1.innerHTML = titulo; // donde se imprimira

}

});



	
