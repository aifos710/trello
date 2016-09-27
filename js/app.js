window.addEventListener("load", function() { 
	
	var section = document.getElementById("section"); 
	var contenedor = document.getElementById("contenedor"); 
	var lista = document.getElementById("lista"); 
	var formulario = document.getElementById("formulario"); 
	var tInput = document.getElementById("tInput"); 
	var boton = document.getElementById("boton"); 
	
	lista.addEventListener("click", function() { 
		this.style.display = "none"; 
		formulario.style.display = "block"; 
		this.parentElement.classList.add("caja"); 
		tInput.focus();
	});

	boton.addEventListener("click", function(e) { 
		e.preventDefault(); 

		addText(); 
		addSection(); 
	}); 

	function addText() { 
		
		formulario.style.display = "none"; 
		
		var texto = tInput.value; 
		var titulo = document.createElement("div"); 
		
		titulo.innerHTML = texto; 
		lista.parentElement.insertBefore(titulo, lista.parentElement.childNodes[0]); 
		titulo.classList.add("titulo"); 
		tInput.value = ""; 
		
		var link = document.createElement("a"); 
		var aText = document.createTextNode("Añadir una tarjeta..."); 
		
		link.appendChild(aText); 
		lista.parentElement.insertBefore(link, lista.parentElement.childNodes[1]); 
		link.classList.add("link"); 
		link.setAttribute("href", "#"); 

		link.addEventListener("click", function(){
			addTextArea(this);
		});
	} 

	function addSection() { 
		
		var nextRight = document.createElement("div"); 
		
		section.appendChild(nextRight); 
		nextRight.classList.add("nextRight"); 
		nextRight.appendChild(lista); 
		lista.style.display = "block"; 
		nextRight.insertBefore(formulario, nextRight.childNodes[0]); 
		}

	function addTextArea(link){
		
		link.style.display = "none";

		var formularioTextArea = document.createElement("form");
		link.parentElement.appendChild(formularioTextArea);

		var TextArea = document.createElement("TextArea");
		formularioTextArea.insertBefore("textArea", formularioTextArea.childNodes[0]);
		TextArea.classList.add("targetText");

		var tBoton = document.createElement("button");
		formularioTextArea.insertBefore(TbOTON, formularioTextArea.childNodes[1]);

		var tBoton = document.createTextNode("Añadir");
		tBoton.appendChild(tBoton);
		tBoton.classList.add("button");
		tBoton.setAttribute("type", "submit");
		TextArea.focus();
	}

	});  