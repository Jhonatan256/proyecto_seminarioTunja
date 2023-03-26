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
      if (result.cod == "00") {} else {
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
        ReactDOM.unmountComponentAtNode(document.getElementById("navbar"));
        ReactDOM.render( /*#__PURE__*/React.createElement(NavBar, {
          nombre: result.data.nombre
        }), document.getElementById("navbar"));
        ReactDOM.unmountComponentAtNode(document.getElementById("contenedor"));
        ReactDOM.render( /*#__PURE__*/React.createElement(Principal, {
          nombre: result.data.nombre
        }), document.getElementById("contenedor"));
        ReactDOM.unmountComponentAtNode(document.getElementById("sidebar"));
        ReactDOM.render( /*#__PURE__*/React.createElement(Menu, {
          datos: result.data
        }), document.getElementById("sidebar"));
        ReactDOM.unmountComponentAtNode(document.getElementById("route"));
        ReactDOM.render( /*#__PURE__*/React.createElement(Route, null), document.getElementById("route"));
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
function vistaEstudiantes() {
  // $('a.active').removeClass('active')
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "listarEstudiantes"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        actualizarRuta("Lista estudiantes", "vistaEstudiantes");
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("contenedor"));
            ReactDOM.render( /*#__PURE__*/React.createElement(CrudEstudiantes, {
              data: result.data
            }), document.getElementById("contenedor"));
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
    }).fail(function () {
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
        m: "listarDocente"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        actualizarRuta("Lista docentes", "vistaDocentes");
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("contenedor"));
            ReactDOM.render( /*#__PURE__*/React.createElement(CrudDocentes, {
              data: result.data
            }), document.getElementById("contenedor"));
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
    }).fail(function () {
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
        ide: identificacion
      }
    }).done(function (result) {
      if (validarResult(result)) {
        switch (result.cod) {
          case "00":
            console.log(result);
            ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
            ReactDOM.render( /*#__PURE__*/React.createElement(ModalEstudiante, {
              data: result.data,
              invocacion: "actualizacion"
            }), document.getElementById("modal1"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function nuevoUsuario() {
  ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
  ReactDOM.render( /*#__PURE__*/React.createElement(ModalEstudiante, {
    invocacion: "registro",
    data: ""
  }), document.getElementById("modal1"));
  $("#modalAuxiliar").modal("show");
}
function nuevoDocente() {
  ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
  ReactDOM.render( /*#__PURE__*/React.createElement(ModalDocente, {
    invocacion: "registro",
    data: ""
  }), document.getElementById("modal1"));
  $("#modalAuxiliar").modal("show");
}
function eliminarEstudiante(identificacion) {
  swal({
    title: "¡Cuidado!",
    text: "¿Seguró que desear eliminar el registro?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: {
            c: "AdministradorController",
            m: "eliminarEstudiante",
            ide: identificacion,
            modulo: "estudiante"
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                swal("Registro Eliminado.", "", "success").then(value => {
                  vistaEstudiantes();
                });
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  });
}
function eliminarDocente(identificacion) {
  swal({
    title: "¡Cuidado!",
    text: "¿Seguró que desear eliminar el registro?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: {
            c: "AdministradorController",
            m: "eliminarEstudiante",
            ide: identificacion,
            modulo: "docente"
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                swal("Registro Eliminado.", "", "success").then(value => {
                  vistaEstudiantes();
                });
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  });
}
function vistaAsignaturas() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "listarAsignatura"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        actualizarRuta("Lista asignaturas", "vistaAsignaturas");
        switch (result.cod) {
          case "00":
            console.log(result);
            ReactDOM.unmountComponentAtNode(document.getElementById("contenedor"));
            ReactDOM.render( /*#__PURE__*/React.createElement(CrudAsignaturas, {
              data: result.data
            }), document.getElementById("contenedor"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function vistaPlanEstudios() {}
function vistaEstudiante() {}
function vistaCalificaciones() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "DocenteController",
        m: "vistaCalififaciones"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        actualizarRuta("Lista asignaturas", "vistaAsignaturas");
        switch (result.cod) {
          case "00":
            console.log(result);
            ReactDOM.unmountComponentAtNode(document.getElementById("contenedor"));
            ReactDOM.render( /*#__PURE__*/React.createElement(CrudAsignaturas, {
              data: result.data
            }), document.getElementById("contenedor"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function vistaDocente() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "listarDocente"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        actualizarRuta("Lista estudiantes", "vistaEstudiantes");
        switch (result.cod) {
          case "00":
            console.log(result);
            // ReactDOM.unmountComponentAtNode(
            //   document.getElementById("contenedor")
            // );
            // ReactDOM.render(
            //   <CrudEstudiantes data={result.data} />,
            //   document.getElementById("contenedor")
            // );
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function nuevaAsignatura() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "selectGruposAsignatura"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
            ReactDOM.render( /*#__PURE__*/React.createElement(ModalAsignatura, {
              invocacion: "registro",
              data: "",
              select: result.data
            }), document.getElementById("modal1"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function buscarAsignatura(id) {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "buscarAsignatura",
        id: id
      }
    }).done(function (result) {
      if (validarResult(result)) {
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
            ReactDOM.render( /*#__PURE__*/React.createElement(ModalAsignatura, {
              invocacion: "actualizar",
              data: result.data,
              select: result.data.select
            }), document.getElementById("modal1"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function eliminarAsignatura(id) {
  swal({
    title: "¡Cuidado!",
    text: "¿Seguró que desear eliminar el registro?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: {
            c: "AdministradorController",
            m: "eliminarAsignatura",
            ide: id
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                swal("Registro Eliminado.", "", "success").then(value => {
                  vistaAsignaturas();
                });
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  });
}
function vistaHorarios() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "listarHorarios"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        actualizarRuta("Lista horarios", "vistaHorarios");
        switch (result.cod) {
          case "00":
            console.log(result);
            ReactDOM.unmountComponentAtNode(document.getElementById("contenedor"));
            ReactDOM.render( /*#__PURE__*/React.createElement(CrudHorarios, {
              data: result.data
            }), document.getElementById("contenedor"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function nuevoHorario() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "selectGruposHorarios"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
            ReactDOM.render( /*#__PURE__*/React.createElement(ModalHorarios, {
              invocacion: "registro",
              data: "",
              select: result.data
            }), document.getElementById("modal1"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function vistaCiclo() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "listarCiclo"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        actualizarRuta("Lista Ciclo", "vistaCiclo");
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("contenedor"));
            ReactDOM.render( /*#__PURE__*/React.createElement(CrudCiclo, {
              data: result.data
            }), document.getElementById("contenedor"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function nuevoCiclo() {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "selectGruposAsignatura"
      }
    }).done(function (result) {
      if (validarResult(result)) {
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
            ReactDOM.render( /*#__PURE__*/React.createElement(ModalCiclo, {
              invocacion: "registro",
              data: "",
              select: result.data
            }), document.getElementById("modal1"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function buscarCiclo(id) {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "buscarCiclo",
        id: id
      }
    }).done(function (result) {
      if (validarResult(result)) {
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
            ReactDOM.render( /*#__PURE__*/React.createElement(ModalCiclo, {
              invocacion: "actualizar",
              data: result.data,
              select: result.data.select
            }), document.getElementById("modal1"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function actualizarCiclo(id) {
  Pace.track(function () {
    $.ajax({
      url: "../Route.php",
      type: "POST",
      data: {
        c: "AdministradorController",
        m: "actualizarCiclo",
        id: id
      }
    }).done(function (result) {
      if (validarResult(result)) {
        switch (result.cod) {
          case "00":
            ReactDOM.unmountComponentAtNode(document.getElementById("modal1"));
            ReactDOM.render( /*#__PURE__*/React.createElement(ModalCiclo, {
              invocacion: "actualizar",
              data: result.data,
              select: result.data.select
            }), document.getElementById("modal1"));
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
    }).fail(function () {
      console.log("error");
    });
  });
}
function eliminarCiclo(id) {
  swal({
    title: "¡Cuidado!",
    text: "¿Seguró que desear eliminar el registro?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(willDelete => {
    if (willDelete) {
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: {
            c: "AdministradorController",
            m: "eliminarCiclo",
            ide: id
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                swal("Registro Eliminado.", "", "success").then(value => {
                  vistaCiclo();
                });
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  });
}