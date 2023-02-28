<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Style Icons -->
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/CSS/style.css" />
    <link rel="stylesheet" href="assets/CSS/styleforms.css" />
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="assets/images/Sello.png" type="image/x-icon">
    <!-- DATATABLES -->
    <!--  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css"> -->
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">


    <style>
        th,
        td {
            padding: 0.4rem !important;
        }
    </style>

    <title>Listado Estudiantes</title>

</head>
<!--Auntentación con PHP-->




<?php

//Instanciación clase -- model
require_once 'model/userModel.php';
$methodList = new Usuario();


?>

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
                <li><a href="#" class="active">Estudiantes</a></li>
                <li class="divider">/</li>
                <li><a href="listStudent.php">Listar Estudiante</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Listado de estudiantes</h3>
                    </div>
                    <!--Contenedor-->

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
                                    <?php foreach ($methodList->listUserStudents() as $row) : ?>

                                        <td><?php echo $row['tipoDocumento'] ?></td>
                                        <td><?php echo $row['numeroDocumento'] ?></td>
                                        <td><?php echo $row['primerNombre'] ?></td>
                                        <td><?php echo $row['primerApellido'] ?></td>
                                        <td><?php echo $row['telefono'] ?></td>
                                        <td><?php echo $row['direccion'] ?></td>
                                        <td><?php echo $row['email'] ?></td>
                                        <td><?php echo $row['clave'] ?></td>
                                        <td><?php echo $row['estado'] ?></td>
                                </tr>


                            <?php

                                    endforeach;
                            ?>
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
    <script src="assets/js/script.js"></script>


</body>

</html>