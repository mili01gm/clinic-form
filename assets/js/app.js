function Pacientes(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
}

function printAll(arr){
  var div = document.createElement('div');
  div.setAttribute('class',"patient");
  var p1 = document.createElement('p');
  p1.innerHTML = "Nombre: " + arr.nombre + " " + arr.apellido
  var p2 = document.createElement('p');
  p2.innerHTML = "Edad: " + arr.edad
  var p3 = document.createElement('p');
  p3.innerHTML = "País: " + arr.pais
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  return div;
}


window.addEventListener('load',function(elem){
  elem.preventDefault();
  var boton = document.getElementById('enviar');
  var nombre = document.getElementById('nombre');
  var apellido = document.getElementById('apellido');
  var edad = document.getElementById('edad');
  var genero = document.getElementById('genero');
  // var soy = genero.option[genero.selectedIndex];
  var ciudad = document.getElementById('ciudad');
  var pais = document.getElementById('pais');
  var error = document.getElementById('error');
  var errorEdad = document.getElementById('errorEdad');
  var mostrar = document.getElementById('mostrar');
  var pattern = /([A-Z]{1}[a-zá-ú]{1,}\s?)/;
  var registros = [];

  function letrasOnly(elem){
    var codeLetra = elem.keyCode;
    if((codeLetra>96&&codeLetra<=122)||(codeLetra>159&&codeLetra<164)||codeLetra==130||(codeLetra>=65&&codeLetra<=90)||codeLetra==32||codeLetra==164||codeLetra==165){
      return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerHTML = "Ingresar solo letras";
      return false;}
  }

  function numOnly(elem){
    var codeNum = elem.keyCode;
    if(codeNum>47&&codeNum<58){
      return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerHTML = "Ingresar solo números";
      return false;}
  }

  nombre.onkeypress = letrasOnly;
  apellido.onkeypress = letrasOnly;
  ciudad.onkeypress = letrasOnly;
  pais.onkeypress = letrasOnly;
  edad.onkeypress = numOnly;

  var ingresos = document.getElementsByClassName('ingresos');
  var validando = function(){
    if(this.value.trim().length == 0){
      this.value="";
      this.nextElementSibling.nextElementSibling.innerHTML = "Este campo es obligatorio"
    } else {
      this.nextElementSibling.nextElementSibling.innerHTML = ""
    }
    var info = this.value.split(" ");
    var modifMayus = "";
    info.forEach(function(e){
      modifMayus +=  e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()+" ";
    });
    this.value = modifMayus;
  }

  for(var i = 0; i <ingresos.length; i++){
    ingresos[i].onblur = validando;
    // boton.removeAttribute('disabled');
  }

  boton.addEventListener('click', function(e){
    e.preventDefault();
    var paciente = new Pacientes(nombre.value,apellido.value,edad.value,genero.value,ciudad.value,pais.value);
    // registros.push(paciente);

    if(nombre.value==" "||apellido.value==" "||edad.value==" "||genero.value==" "||ciudad.value==" "||pais.value==" "){
      error.innerHTML = "Complete todos los campos"
    } else {
      // boton.removeAttribute('disabled');
      error.innerHTML = ""
      console.log(paciente);
      // mostrar.appendChild(printAll(paciente));
      document.getElementById('completa').reset();
      localStorage.setItem("inscrito",JSON.stringify(paciente));
      window.location = "assets/pages/bienvenida.html"
    }

  });


  // boton.addEventListener('click', function(e){
  //   e.preventDefault();
  //   var paciente = new Pacientes(nombre.value,apellido.value,edad.value,genero.value,ciudad.value,pais.value);
  //   registros.push(paciente);
  //   console.log(paciente);
  //   for(var j = 0; j<ingresos.length; j++){
  //     if(ingresos[i].length > 0){
  //
  //     }
  //   }
  //   // if(name.value==""||apellido.value==""||edad.value==""||soy==""||ciudad.value==""||pais.value==""){
  //   //   error.innerHTML = "Debe completar todos los campos para la inscripción"
  //   // } else if(edad.value < 1){
  //   //   errorEdad.innerHTML = "Ingrese una edad válida"
  //   // } else if (!pattern.test(nombre.value)||!pattern.test(apellido.value)||!pattern.test(ciudad.value)||!pattern.test(pais.value)){
  //   //   error.innerHTML = "Complete los campos con la primera letra en mayúscula"
  //   // } else {
  //   //
  //   //   error.innerHTML = ""
  //     //console.log(registros);
  //     //mostrar.innerHTML = paciente.addRegister()
  //     mostrar.appendChild(printAll(paciente));
  //     document.getElementById('completa').reset();
  //   // }
  //
  // });

});
