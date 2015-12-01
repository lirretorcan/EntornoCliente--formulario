
// Clase persona
function Persona(nombre_in, apellido_in, tlf_in, fnac_in){
	this.nombre = nombre_in;
	this.apellido = apellido_in;
	this.telefono = tlf_in;
	this.fnac = fnac_in;
}


var arrPersona = [];

persona = new Persona("Antonio","López Corvas","959438264","25/03/1968");
arrPersona.push(persona);
	
persona = new Persona("Manolo","Perez Rodríguez","959687165","27/05/1969");
arrPersona.push(persona);
	
persona = new Persona("Javier","Ruiz Gómez","959253364","01/12/1996");
arrPersona.push(persona);

persona = new Persona("Francisco","González Campos","959789654","5/06/1946");
arrPersona.push(persona);

persona = new Persona("Paco","González Martínez","959565656","13/02/1951");
arrPersona.push(persona);

var arrPosicion = 0;



function Alta_registro(){
	var nombre = document.getElementById("cajaNombre").value;
	var apellido = document.getElementById("cajaApellidos").value;
	var tlf = document.getElementById("cajaTelefono").value;
	var fnac = document.getElementById("cajaFnac").value;
	persona = new Persona(nombre, apellido, tlf, fnac);
	arrPersona.push(persona);
	
	document.getElementById("cajaNombre").value = "";
	document.getElementById("cajaApellidos").value = "";
	document.getElementById("cajaTelefono").value= "";
	document.getElementById("cajaFnac").value= "";
	Refrescar();
}

function Baja_registro(){
		
}

function Modificar_registro(){
		
}

function Buscar_registro_id(){
		
}

function Buscar_registro_nombre(){
		
}

function Buscar_registro_apellido(){
		
}

function Guardar(){
		
}

// Función que muestra la lista completa del array Persona
function Genera_lista(){
	for(var i = 0; i<arrPersona.length; i++)
	{
	   document.write("<h2>Registro de personas</h2><br />");
	   document.write("<p>---------------------------------</p>");
	   document.write("Persona " + (i + 1) + "<br />");
	   document.write("---------------<br />");
	   document.write("Nombre: " + arrPersona[i].nombre + "<br />");
	   document.write("Apellidos: " + arrPersona[i].apellido + "<br />");
	   document.write("Teléfono: " + arrPersona[i].telefono + "<br />");
	   document.write("Fecha de nacimiento: " + arrPersona[i].fnac + "<br />");
	   document.write("---------------");
	}
}

function Pagina_Siguiente(){
	if(arrPosicion < arrPersona.length)
	{
	  arrPosicion++;
	  Refrescar();
	}
}

function Pagina_Anterior(posicion){
	if(arrPosicion > 1)
	{
		arrPosicion--;
		Refrescar();
	}
}


function Ultima_pagina(){
	arrPosicion = arrPersona.length;
	Refrescar();
}

function Primera_pagina(){
	arrPosicion = 1;
	Refrescar();
}

// Refresca los datos visibles del formulario (nº registros, campos vacíos, etc...)
function Refrescar() {
	document.getElementById("registro_actual").innerHTML = arrPosicion;
	document.getElementById("registro_maximo").innerHTML = arrPersona.length;
}

