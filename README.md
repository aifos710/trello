# TRELLO

### VERSIÓN 0.0.1

- Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.

```html
<header>
		<h1>TRELLO</h1>
	</header>
	<div id="content">
		<span id="lista">Añadir una lista</span>
	</div>
</header>
```
```javascript
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
```
	
![uno](http://i66.tinypic.com/wkqp3c.jpg)
![dos](http://i63.tinypic.com/2zptem9.jpg)
![tres](http://i66.tinypic.com/2jg88e8.jpg)

### VERSIÓN 0.0.2

- Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).

```javascript
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
```

![cuatro](http://i65.tinypic.com/z0jk9.jpg)
![cinco](http://i66.tinypic.com/o6fafa.png)

- Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjea".

![seis](http://i67.tinypic.com/161kmdz.png)

### VERSIÓN 0.0.3

- Una vez agregada la lista, mostrar el mensaje clickeable de "Añadir una lista" al lado de la lista agregada.

### VERSIÓN 0.0.4

- Al dar click en "Añadir una lista", asegurarse que el input del formulario tenga el focus para poder escribir directamente el nombre de la lista.

- Dar click al mensaje "Añadir una tarjeta" y mostrar e formulario para agregar la tarjeta (Nota: El ingreso de texto es mediante un textarea).

### VERSIÓN 0.0.5

- Al dar click en el botón de guardar al momento de añadir tarjeta, mostrar el mensaje de "Añadir tarjeta" debajo de la tarjeta añadida.

### VERSIÓN 0.0.6 (EXTRA)

- Asegurar la funcionalidad de poder agregar múltiples listas y tarjetas.



