$(document).ready(function() {
  validarSesion()
  $('#pass').on('change', function(){
    $('#pass').val(btoa($('#pass').val()))
  })
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
    var formdata = $('#login').serialize() + '&c=UsuariosController' + '&m=consultarUsuario'
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
function loginA (){
  if($('#formla').valid()){
    $.ajax({
      url: '../Route.php',
      type: 'POST',
      data: {
        c: 'UsuariosController',
        m: 'consultarAdmin',
        ide: $('#ide').val(),
        pass: $('#pass').val()
      }
    }).done(function(result) {
      if(result.cod == '00'){
        $(location).attr('href', 'home.php');
      }else{
        swal("¡Error!", result.msj, "error");
      }
    }).fail(function() {
      console.log('error')
    })
  }else{
    $('#formla').valid()
  }
}
function validarSesion() {
  $.ajax({
    url: '../Route.php',
    type: 'POST',
    data: {
      c: 'UsuariosController',
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
