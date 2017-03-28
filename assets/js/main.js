window.addEventListener('load',function(){
  var nombre = document.getElementById('ingreso-nombre');
  var apellido = document.getElementById('ingreso-apellido');
  var edad = document.getElementById('ingreso-edad');
  var genero = document.getElementById('ingreso-genero');
  var ciudad = document.getElementById('ingreso-ciudad');
  var pais = document.getElementById('ingreso-pais');

  var newPatient = JSON.parse(localStorage.getItem('inscrito'));

  nombre.innerHTML = newPatient.nombre;
  apellido.innerHTML = newPatient.apellido;
  edad.innerHTML = newPatient.edad;
  genero.innerHTML = newPatient.genero;
  ciudad.innerHTML = newPatient.ciudad;
  pais.innerHTML = newPatient.pais;

  var editar = document.getElementById('editar');
  editar.setAttribute('data-edit-mode',false);
  editar.addEventListener('click',function(e){
    e.preventDefault();
    if(editar.getAttribute('data-edit-mode')===false){
      editar.innerHTML = "Guardar";
      var infoEdit1 = document.createElement('input');
      infoEdit1.value = nombre.innerHTML;
      console.log(infoEdit1);
      var padre = nombre.parentNode;
      padre.replaceChild(infoEdit1,nombre);
    }
  });

});
