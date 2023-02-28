<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Style Icons -->
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />
    <title>Listado Docentes</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/Sello.png" type="image/x-icon">
</head>






<body>
    <!-- SIDEBAR -->
    <section id="sidebar">
        <!--Importamos el menú de navegación-->
        <?php
        include("MenuAdmin.php");
        ?>
        <!-- MAIN -->
        <main>
            <ul class="breadcrumbs">
                <li><a href="HomeAdmin.php" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Docente</a></li>
                <li class="divider">/</li>
                <li><a href="listStudent.php">Listar Docentes</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>
            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Listado de docentes</h3>
                    </div>
                    <div class="chart">
                        <button type="button" class="btnImprimir"><i class='bx bxs-printer' style='color:#ffffff'></i>&nbsp&nbspImprimir Listado</button>
                        <br>
                        <!-- <table class="tableList">-->
                        <table id="tablax" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <!-- <th>idUsuario</th>-->
                                    <th style="background-color: black;color:white">Tipo</th>
                                    <th style="background-color: black;color:white">#Documento</th>
                                    <th style="background-color: black;color:white">Nombre</th>
                                    <!--  <th>segundoNombre</th>-->
                                    <th style="background-color: black;color:white">Apellido</th>
                                    <!--  <th>segundoApellido</th>-->
                                    <th style="background-color: black;color:white">Teléfono</th>
                                    <th style="background-color: black;color:white">Dirección</th>
                                    <th style="background-color: black;color:white">Correo</th>
                                    <th style="background-color: black;color:white">Contraseña</th>
                                    <th style="background-color: black;color:white">Estado</th>


                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                        
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                </tr>


                         
                            </tbody>


                        </table>
                        <br>
                        <!--paginador-->
                        <div class="paginacion">
                            <a href="#">&laquo;</a>
                            <a href="#">1</a>
                            <a href="#" class="activo">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">&raquo;</a>
                        </div>
        </main>
        <!-- MAIN -->
    </section>
    <!-- NAVBAR -->

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="../../assets/js/script.js"></script>

</body>

</html>