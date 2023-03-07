<?php
  header("Cache-Control: no-cache, must-revalidate");
  header("Expires: Sat, 1 Jul 2022 05:00:00 GMT");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon.png">
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
    <title>
        LatinCoop
    </title>
    <!--     Fonts and icons     -->
    <!-- <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" /> -->
    <!-- Nucleo Icons -->
    <link href="assets/css/nucleo-icons.css" rel="stylesheet" />
    <link href="assets/css/nucleo-svg.css" rel="stylesheet" />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <!-- Material Icons -->
    <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"> -->
    <!-- CSS Files -->
    <link id="pagestyle" href="assets/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
    <link href="assets/librerias/datepicker/css/datepicker.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/img.css" rel="stylesheet" type="text/css" />
</head>

<body class="b">
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">

            </div>
        </div>
    </div>
    <main class="main-content  mt-0">
        <!-- <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');"> -->
        <div class="page-header align-items-start min-vh-100">
            <!-- <div class="page-header align-items-start min-vh-100" style="background-image: url('assets/img/bg-pricing.png');center center / cover no-repeat fixed
background-size: 100% auto;"> -->
            <span class="mask"></span>
            <div class="container my-auto">
                <div class="text-center">
                    <img src="assets/img/logos/logo.jpg"
                        class="text-center blur mb-1 border boder-secondary border-radius-lg" width="30%"></img>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        </div>
                        <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">

                            <h4 class=" mb-5 mt-3 titulo">Somos parte de tus mejores momentos</h4>
                        </div>
                        <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-8 col-12 mx-auto">
                        <div class="card z-index-0 fadeIn3 fadeInBottom bordera">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="border-radius-lg py-3 pe-1 cardT">
                                    <!-- <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">apoyando y generando oportunidades para cada uno de nuestros Asociados</h4> -->
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <a class="btn btn-link btn-sm m-1 p-1"
                                                href="https://www.facebook.com/latincoop2021/" target="_blank">
                                                <i class="fa fa-facebook text-white text-lg"></i>
                                            </a>
                                            <a class="btn btn-link btn-sm m-1 p-1"
                                                href="https://www.instagram.com/latincoop/?hl=es" target="_blank">
                                                <i class="fab fa-instagram text-white text-lg"></i>
                                            </a>
                                        </div>
                                        <div class="col-12 text-center ms-auto text-white m-2">
                                            Por favor ingrese su fecha de nacimiento y su número de identificación para
                                            realizar la inscripción :
                                        </div>
                                        <!-- <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <!-- <div class="border border-radius-lg p-2 text-justify">Por favor ingrese su fecha de nacimiento y su número de identificación: </div> -->
                                <form role="form" class="text-start" action="" method="POST" id="login">
                                    <label class="form-label">Fecha de nacimiento</label>
                                    <div class="input-group input-group-outline mb-2">
                                        <input type="text" class="form-control datepicker" required
                                            id="fecha_nacimiento" name="fecha_nacimiento" placeholder="dd/mm/yy"
                                            autoComplete="on">
                                    </div>
                                    <label class="form-label">Identificación</label>
                                    <div class="input-group input-group-outline mb-3">
                                        <input type="number" class="form-control" id="identificacion" required
                                            name="identificacion" placeholder="Identificación">
                                    </div>
                                    <!-- <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="rememberMe">
                    <label class="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                  </div> -->
                                    <div class="text-center">
                                        <button class="btn bg-gradient-light w-100 d-none" id="load" type="button"
                                            disabled>
                                            <span class="spinner-border spinner-border-sm" role="status"
                                                aria-hidden="true"></span>
                                            Cargando...
                                        </button>
                                        <button class="g-recaptcha btn gradientAzul w-100" id="load2"
                                            data-sitekey="6LfQtWkdAAAAALRjxOgRHphCXIkW1JryePzzVDeS"
                                            data-callback='onSubmit' data-action='login'>Iniciar</button>
                                        <button type="button" class="btn gradientAmarillo w-100" data-toggle="modal"
                                            data-target="#LoginAdmin">Ingreso Administradores</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="LoginAdmin" data-backdrop="static" data-keyboard="false" tabindex="-1"
                aria-labelledby="LoginAdminLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="LoginAdminLabel">Ingreso Administradores</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="formla" class="text-start" method="POST">
                                <label class="form-label">Identificación:</label>
                                <div class="input-group input-group-outline mb-2">
                                    <input type="number" class="form-control" id="ide" name="ide"
                                        placeholder="Identificación usuario" required autoComplete="on">
                                </div>
                                <label class="form-label">Contraseña:</label>
                                <div class="input-group input-group-outline mb-3">
                                    <input type="password" class="form-control" id="pass" name="pass"
                                        placeholder="Contraseña" required><br></br>
                                </div>
                                <div class="text-center">
                                    <button class="btn gradientAzul w-100" type="button" id="loaderA"
                                        onclick="loginA()">Iniciar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer position-absolute bottom-1 py-1 w-100">
                <div class="container">
                    <div class="row align-items-center justify-content-lg-between">
                        <div class="col-12 text-center">
                            <div class="copyright">
                                <?php include('layout/footer.php'); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    </main>
    <script src="assets/librerias/jquery-3.6.0/dist/jquery.min.js" type="text/javascript"></script>
    <script src="assets/js/core/popper.min.js"></script>
    <script type="text/javascript" src="assets/template/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="assets/js/plugins/smooth-scrollbar.min.js"></script>
    <script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
        var options = {
            damping: '0.5'
        }
        Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
    </script>
    <script src="assets/js/material-dashboard.min.js?v=3.0.0"></script>
    <script src="assets/react/js/login.js"></script>
    <script src="assets/librerias/datepicker/js/bootstrap-datepicker.js" type="text/javascript"></script>
    <script src="assets/librerias/sweetalert/sweetalert.min.js"></script>
    <script src='assets/librerias/valid/dist/jquery.validate.min.js'></script>
    <script>
    $(document).ready(function() {
        $(".datepicker").datepicker({
            language: 'es',
            format: 'dd/mm/yyyy',
            autoclose: true
        });
    });
    </script>
    <script src="https://www.google.com/recaptcha/api.js?render=6LfQtWkdAAAAALRjxOgRHphCXIkW1JryePzzVDeS"></script>
</body>

</html>