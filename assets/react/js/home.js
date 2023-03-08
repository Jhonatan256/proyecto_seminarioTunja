$(document).ready(function () {
  validarSesion();
  home();
  Pace.stop();
});
$(document).ajaxStart(function () {
  Pace.restart();
});
$(document).ajaxComplete(function () {
  Pace.stop();
  setTimeout(() => {
    Pace.stop();
  }, 900);
});
function salir() {
  Pace.track(function () {
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
  });
}
function validarSesion() {
  Pace.track(function () {
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
  });
  Pace.stop();
}
function home() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "LoginController",
        m: "home"
      }
    }).done(function (result) {
      Pace.stop();
      if (result.cod == "00") {
        ReactDOM.unmountComponentAtNode(document.getElementById("menu"));
        ReactDOM.render( /*#__PURE__*/React.createElement(Menu, {
          tipo: data.nombre,
          tipo: data.nombreTipoUsuario,
          genero: data.genero
        }), document.getElementById("header"));
        // renderizarHome(result.data);
        // sessionStorage.setItem("it", result.data.tipoUsuario);
        // menuUsuario();
        // modalEncuesta();
        console.log(result);
      } else {
        swal("¡Error!", result.msj, "error").then(value => {
          $(location).attr("href", "login.php");
        });
      }
    }).fail(function () {
      console.log("error");
    });
  });
}