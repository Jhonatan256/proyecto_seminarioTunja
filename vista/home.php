<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 1 Jul 2022 05:00:00 GMT");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="LatinCoop">
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon.png">
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
    <title>Latincoop</title>
    <!-- Custom fonts for this template-->
    <link href="assets/template/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <link rel="stylesheet" href="assets/librerias/pace/center-radar.css">
    <link rel="stylesheet" href="assets/librerias/select/dist/css/select2.min.css">
    <script data-pace-options='{ "ajax": true }' src="assets/librerias/pace/pace.js"></script>
    <!-- Custom styles for this template-->
    <link href="assets/librerias/jquery-smartwizard-master/dist/css/smart_wizard_all.min.css" rel="stylesheet"
        type="text/css" />
    <link href="assets/template/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="assets/css/home.css" rel="stylesheet">
    <link href="assets/librerias/datepicker/css/datepicker.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/librerias/noty-master/lib/noty.css">
    <link rel="stylesheet" href="assets/librerias/noty-master/lib/themes/mint.css">
    <link rel="stylesheet" href="assets/librerias/noty-master/lib/themes/metroui.css">
</head>

<body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
        <div id="menu">
        </div>
        <!-- End of Sidebar -->
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <div id="header"></div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div id="cuerpo" class="pl-3 pr-3">
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                </div>
                <!-- End of Topbar -->
                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <?php include('layout/footer.php'); ?>
                </div>
                <!-- End of Content Wrapper -->
            </div>
            <!-- End of Page Wrapper -->
            <!-- Scroll to Top Button-->
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fas fa-angle-up"></i>
            </a>
            <!-- Logout Modal-->
            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">¿Seguro que deseas salir?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">Selecciona salir para finalizar la sesión.</div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <a class="btn btn-primary" href="javascript:void(0);" onclick="salir()">Salir</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal1">
            </div>
</body>
<!-- Bootstrap core JavaScript-->
<script src="assets/template/vendor/jquery/jquery.min.js"></script>
<script src="assets/template/vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="assets/librerias/jquery-3.6.0/dist/jquery.min.js" type="text/javascript"></script>
<script src="assets/librerias/select/dist/js/select2.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/template/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"> -->
<!-- Core plugin JavaScript-->
<!-- Custom scripts for all pages-->
<script src="assets/react/lib/react.min.js"></script>
<script src="assets/react/lib/react-dom.min.js"></script>
<script src="assets/template/js/sb-admin-2.min.js"></script>
<script src="assets/react/js/home.js"></script>
<script src="assets/react/js/template.js"></script>
<script src="assets/react/js/componentes.js"></script>
<script src="assets/react/js/elementos.js"></script>
<script src="assets/react/js/utilitarias.js"></script>
<script src="assets/react/js/eventos.js"></script>
<script src="assets/librerias/bootbox/bootbox.all.min.js"></script>
<script src="assets/librerias/sweetalert/sweetalert.min.js"></script>
<link href='assets/librerias/fullcalendar/lib/main.css' rel='stylesheet' />
<script src='assets/librerias/fullcalendar/lib/main.js'></script>
<script src='assets/librerias/fullcalendar/lib/locales/es.js'></script>
<script src='assets/librerias/valid/dist/jquery.validate.min.js'></script>
<link rel="stylesheet" type="text/css"
    href="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.css" />
<script src="assets/librerias/jquery-smartwizard-master/dist/js/jquery.smartWizard.min.js" type="text/javascript">
</script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script type="text/javascript"
    src="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.js">
</script>
<script src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
<script src="assets/librerias/datepicker/js/bootstrap-datepicker.js" type="text/javascript"></script>
<script src="assets/librerias/canvas-confetti/confetti.browser.min.js" type="text/javascript"></script>
<script src="assets/librerias/noty-master/lib/noty.min.js"></script>

</html>