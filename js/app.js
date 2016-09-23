window.addEventListener("load", function() {
	var content = document.getElementById("content");
	var lista = document.getElementById("lista");

	lista.addEventListener("click",function(){
		lista.style.display = "none";

		var form = document.createElement("form");
		content.insertBefore(form, content.childNodes[0]);

		var input = document.createElement("input");
		form.insertBefore(input, form.childNodes[0]).classList.add("form-control");
		input.placeholder = "Añadir una lista..."

		var boton = document.createElement("button");
		var texto = document.createTextNode("Guardar");
		boton.appendChild(texto);
		form.insertBefore(boton, form.childNodes[1]);

		boton.classList.add("btn-success", "btn-block", "btn", "btn-sm", "pull-left");
		boton.style.display = "inline-block";

		var icon = document.createElement("icon");
		form.insertBefore(icon, form.childNodes[2]).classList.add("close");
		icon.classList.add("icon-cross");
		icon.classList.add("cross");

		content.classList.add("content2");

	boton.addEventListener("click", function(e) {
		e.preventDefault();
		var valorInput = input.value;
		//ocultar todo display none
		boton.style.display = "none";
		input.style.display = "none";
		icon.style.display = "none";

		//crear otro div
		var titulo = document.createElement("div");
		titulo.innerHTML = valorInput;
		content.insertBefore(titulo, content.childNodes[0]);
		
		var link = document.createElement("a");
		var aText = document.createTextNode("Añadir una lista...")
		link.appendChild(aText);
		content.insertBefore(link, content.childNodes[1]);

	})
		
	});
});
