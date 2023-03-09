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
        m: "salir",
      },
    })
      .done(function (result) {
        $(location).attr("href", "login.php");
      })
      .fail(function () {
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
        m: "validarSesionLogin",
      },
    })
      .done(function (result) {
        Pace.stop();
        if (result.cod == "00") {
        } else {
          swal("¡Error!", result.msj, "error").then((value) => {
            $(location).attr("href", "login.php");
          });
        }
      })
      .fail(function () {
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
        m: "home",
      },
    })
      .done(function (result) {
        Pace.stop();
        if (result.cod == "00") {
          ReactDOM.unmountComponentAtNode(document.getElementById("navbar"));
          ReactDOM.render(
            <NavBar nombre={result.data.nombre} />,
            document.getElementById("navbar")
          );
          ReactDOM.unmountComponentAtNode(
            document.getElementById("contenedor")
          );
          ReactDOM.render(
            <Principal nombre={result.data.nombre} />,
            document.getElementById("contenedor")
          );
          ReactDOM.unmountComponentAtNode(document.getElementById("sidebar"));
          ReactDOM.render(
            <Menu datos={result.data} />,
            document.getElementById("sidebar")
          );
          ReactDOM.unmountComponentAtNode(document.getElementById("route"));
          ReactDOM.render(<Route />, document.getElementById("route"));
        } else {
          swal("¡Error!", result.msj, "error").then((value) => {
            $(location).attr("href", "login.php");
          });
        }
      })
      .fail(function () {
        console.log("error");
      });
  });
}
function vistaEstudiantes() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "listarEstudiantes",
      },
    })
      .done(function (result) {
        if (validarResult(result)) {
          actualizarRuta("Lista estudiantes", "vistaEstudiantes");
          switch (result.cod) {
            case "00":
              ReactDOM.unmountComponentAtNode(
                document.getElementById("contenedor")
              );
              ReactDOM.render(
                <CrudEstudiantes data={result.data} />,
                document.getElementById("contenedor")
              );
              break;
            case "88":
              modalLogout();
              break;
            case "99":
              alerta("¡Error!", result.msj);
              break;
            default:
              alerta("¡Error!", "Error de codificación");
          }
        }
      })
      .fail(function () {
        console.log("error");
      });
  });
}
function vistaDocentes() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "listarEstudiantes",
      },
    })
      .done(function (result) {
        if (validarResult(result)) {
          switch (result.cod) {
            case "00":
              console.log(result);
              break;
            case "88":
              modalLogout();
              break;
            case "99":
              alerta("¡Error!", result.msj);
              break;
            default:
              alerta("¡Error!", "Error de codificación");
          }
        }
      })
      .fail(function () {
        console.log("error");
      });
  });
}
function editarUsuario(identificacion) {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "buscarEstudiante",
        ide: identificacion,
      },
    })
      .done(function (result) {
        if (validarResult(result)) {
          switch (result.cod) {
            case "00":
              console.log(result);
              ReactDOM.unmountComponentAtNode(
                document.getElementById("modal1")
              );
              ReactDOM.render(
                <ModalEstudiante data={result.data} />,
                document.getElementById("modal1")
              );
              $("#modalAuxiliar").modal("show");
              break;
            case "88":
              modalLogout();
              break;
            case "99":
              alerta("¡Error!", result.msj);
              break;
            default:
              alerta("¡Error!", "Error de codificación");
          }
        }
      })
      .fail(function () {
        console.log("error");
      });
  });
}
function vistaAsignaturas() {}
function vistaHorarios() {}
function vistaPlanEstudios() {}
