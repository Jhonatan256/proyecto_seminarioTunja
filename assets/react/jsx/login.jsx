
function loginA (){
  console.log(23);
  if($('#formla').valid()){
    $.ajax({
      url: '../Route.php',
      type: 'POST',
      data: {
        c: 'LoginController',
        m: 'autenticarUsuario',
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
