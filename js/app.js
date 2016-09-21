window.addEventListener("load", function() {
	var content = document.getElementById("content");
	var lista = document.getElementById("lista");

	lista.addEventListener("click",function(){
		lista.style.display = "none";

		var form = document.createElement("form");
		content.insertBefore(form, content.childNodes[0]);

		var input = document.createElement("input");
		form.insertBefore(input, form.childNodes[0]).classList.add("input");

		var boton = document.createElement("button");
		var texto = document.createTextNode("Guardar");
		boton.appendChild(texto);
		var boton2 = form.insertBefore(boton, form.childNodes[1]);

		boton2.classList.add("btn-success");
		boton2.classList.add("btn");

		content.classList.add("content2")
	});
});