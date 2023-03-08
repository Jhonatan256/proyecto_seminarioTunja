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