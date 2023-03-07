$(document).ready(function() {
  validarSesion()
  $("#pass").on('keyup', function (e) {
  var keycode = e.keyCode || e.which;
    if (keycode == 13) {
        loginA()
    }
});
});
function onSubmit(token) {
  if($('#login').valid()){
    $('#load').removeClass('d-none')
    $('#load2').addClass('d-none')
    var formdata = $('#login').serialize() + '&c=LoginController' + '&m=autenticarUsuario'
    $.ajax({
      url: '../Route.php',
      type: 'POST',
      data: formdata
    }).done(function(result) {
      if(result.cod == '00'){
        $(location).attr('href', 'home.php');
      }else{
        $('#load').addClass('d-none')
        $('#load2').removeClass('d-none')
        swal("¡Error!", result.msj, "error");
      }
    }).fail(function() {
      console.log('error')
    })
  }else{
    $('#login').valid()
  }
}
function validarSesion() {
  $.ajax({
    url: '../Route.php',
    type: 'POST',
    data: {
      c: 'LoginController',
      m: 'validarSesionLogin'
    }
  }).done(function(result) {
    if (result.cod == '00') {
      $(location).attr('href', 'home.php');
    }
  }).fail(function() {
    console.log('error')
  })
}
