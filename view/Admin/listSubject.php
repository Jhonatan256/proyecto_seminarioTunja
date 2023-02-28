<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Style Icons -->
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />
    <title>Listado Asignatura</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/Sello.png" type="image/x-icon">
</head>
<!--Auntentación con PHP-->


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
                <li><a href="#" class="active">Asignatura</a></li>
                <li class="divider">/</li>
                <li><a href="listSubject.php">Listar Asignatura</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Listado de Asignatura</h3>


                    </div>




                    <div class="chart">


                        <button type="button" class="btnImprimir"><i class='bx bxs-printer' style='color:#ffffff'></i>&nbsp&nbspImprimir Listado</button>
                        <br>
                        <table class="tableList">
                            <thead>
                                <tr>

                                    <th style="background-color: black;color:white"> #</th>
                                    <th style="background-color: black;color:white">Asignatura</th>
                                    <th style="background-color: black;color:white">Intensidad Horaria</th>

                                    <th style="background-color: black;color:white">Descripción</th>

                                    <th style="background-color: black;color:white">Grupo</th>


                                </tr>
                            </thead>

                            <tbody>

                                <tr>

                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>

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