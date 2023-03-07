$(document).ready(function () {
  validarSesion();
  Pace.stop();
});
$(document).ajaxStart(function () {
  Pace.restart();
});
$(document).ajaxComplete(function () {
  Pace.stop();
});
function salir() {
  $.ajax({
    url: "../Route.php",
    type: "POST",
    data: {
      c: "LoginController",
      m: "salir"
    }
  }).done(function (result) {
    $(location).attr("href", "login.php");
  }).fail(function () {
    console.log("error");
  });
}
function validarSesion() {
  $.ajax({
    url: "../Route.php",
    type: "POST",
    data: {
      c: "LoginController",
      m: "validarSesionLogin"
    }
  }).done(function (result) {
    Pace.stop();
    if (result.cod == "00") {
      // renderizarHome(result.data);
      // sessionStorage.setItem("it", result.data.tipoUsuario);
      // menuUsuario();
      // modalEncuesta();
    } else {
      swal("¡Error!", result.msj, "error").then(value => {
        $(location).attr("href", "login.php");
      });
    }
  }).fail(function () {
    console.log("error");
  });
  Pace.stop();
}