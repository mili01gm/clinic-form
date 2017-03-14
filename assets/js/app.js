function Pacientes(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;

  this.addRegister = function(){
    return  "Nombre: "+this.nombre+" "+this.apellido + "<br />"+
            "Edad: "+this.edad + "<br />"+
            "País: "+this.pais
    }
}

function printAll(arr){
  var div = document.createElement('div');
  div.setAttribute('class',"patient");
  var p1 = document.createElement('p');
  p1.innerHTML = "Nombre:" + arr.nombre + " " + arr.apellido
  var p2 = document.createElement('p');
  p2.innerHTML = "Edad: " + arr.edad
  var p3 = document.createElement('p');
  p3.innerHTML = "País: " + arr.pais
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  return div;
}

window.addEventListener('load',function(){
  var boton = document.getElementById('enviar');
  var nombre = document.getElementById('nombre');
  var apellido = document.getElementById('apellido');
  var edad = document.getElementById('edad');
  var genero = document.getElementById('genero');
  var ciudad = document.getElementById('ciudad');
  var pais = document.getElementById('pais');
  var error = document.getElementById('error');
  var mostrar = document.getElementById('mostrar');
  var pattern = /([A-Z]{1}[a-zá-ú]{1,}\s?)/;
  var registros = [];


  boton.addEventListener('click', function(e){
    e.preventDefault();
    var paciente = new Pacientes(nombre.value,apellido.value,edad.value,genero.value,ciudad.value,pais.value);
    registros.push(paciente);

    if(name.value==""||apellido.value==""||edad.value==""||genero.value=="genero"||ciudad.value==""||pais.value==""){
      error.innerHTML = "Debe completar todos los datos requeridos"
    } else if (!pattern.test(nombre.value)||!pattern.test(apellido.value)||!pattern.test(ciudad.value)||!pattern.test(pais.value)){
      error.innerHTML = "Complete los campos con la primera letra en mayúscula"
    } else {
      error.innerHTML = ""
      //console.log(registros);
      //mostrar.innerHTML = paciente.addRegister()
      mostrar.appendChild(printAll(paciente));}
  });

});
