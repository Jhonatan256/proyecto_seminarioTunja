$(document).ready(function () {
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    }
    ;
  });
  validarSesion();
  Pace.stop();
});
$(document).ajaxStart(function () {
  Pace.restart();
});
$(document).ajaxComplete(function () {
  Pace.stop();
});
function buscarImagenes(nombre, id) {
  $.ajax({
    url: '../Route.php',
    type: 'POST',
    data: {
      c: 'SedesController',
      m: 'buscarImagenes',
      sede: id
    }
  }).done(function (result) {
    if (validarResult(result)) {
      switch (result.cod) {
        case '00':
          ReactDOM.unmountComponentAtNode(document.getElementById('modal1'));
          ReactDOM.render( /*#__PURE__*/React.createElement(ModalImagenes, {
            nombre: nombre,
            data: result.data
          }), document.getElementById('modal1'));
          $('#modalAuxiliar').modal('show');
          break;
        case '88':
          modalLogout();
          break;
        case '99':
          alerta('¡Error!', result.msj);
          break;
        default:
          alerta('¡Error!', 'Error de codificación');
      }
    }
  }).fail(function () {
    console.log('error');
  });
}
function mensajeInicio() {
  if (!sessionStorage.getItem('modalInicio') && sessionStorage.getItem('it') == 1) {
    swal('¡NUEVO EVENTO DISPONIBLE!', '', 'warning', {
      buttons: ["En otro momento!", "Ver ahora!"]
    }).then(value => {
      if (value) {
        modelEventos();
        sessionStorage.setItem('modalInicio', true);
      }
    });
  }
}
function modelEventosAdmin() {
  eventosAdmin();
}