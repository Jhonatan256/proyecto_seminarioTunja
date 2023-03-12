function validarResult(result) {
  if (result == null) {
    modalError();
    return false;
  } else {
    return true;
  }
}
function modalError() {
  swal("¡Error!", "¡Ocurrió un error al realizar la petición!", "error");
}
function alerta(titulo, msj, tipo = "error") {
  swal(titulo, msj, tipo);
}
function actualizarRuta(nombre, z) {
  var ruta = new Object();
  ruta.nombre = nombre;
  ruta.z = z;
  ReactDOM.unmountComponentAtNode(document.getElementById("route"));
  ReactDOM.render(<Route ruta={ruta} />, document.getElementById("route"));
}
function modalLogout() {
  swal(
    "¡Error!",
    "Sesión expirada, por favor vuelva a iniciar sesión.",
    "error"
  ).then((value) => {
    salir();
  });
}
