<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/js/" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleTimeTable.css" />

    <title>Inicio Estudiante</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/sello.png" type="image/x-icon">
</head>

<body>
    <!-- SIDEBAR -->
    <section id="sidebar">
        <!--Importamos el menú de navegación-->
        <?php
        require_once("MenuStudent.php");
        ?>
        <!-- MAIN -->
        <main>

            <ul class="breadcrumbs">
                <li><a href="HomeStudent.php" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Calificaciones</a></li>
                <li class="divider">/</li>
                <li><a href="viewQualificationStudent.php">Consultar calificaciones</a></li>
            </ul>



            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Reporte de calificaciones</h3>

                    </div>




                    <div class="chart">

                        <button type="button" class="btnImprimir"><i class='bx bxs-printer' style='color:#ffffff'></i>&nbsp&nbspImprimir Listado</button>

                        <br>
                        <table class="tableList">
                            <thead>
                                <tr>
                                    <!-- <th>idUsuario</th>-->
                                    <th style="background-color: black;color:white">#</th>
                                    <th style="background-color: black;color:white">Ciclo</th>
                                    <th style="background-color: black;color:white">Asignatura</th>
                                    <th style="background-color: black;color:white">Documento</th>
                                    <th style="background-color: black;color:white">Nota Habilitación</th>
                                    <th style="background-color: black;color:white">Nota Tutoria</th>
                                    <th style="background-color: black;color:white;">Nota Final</th>




                                </tr>
                            </thead>

                            <tbody>

                                <tr>

                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>



                            </tbody>


                        </table>

                    </div>
                </div>


            </div>
        </main>
        <!-- MAIN -->
    </section>
    <!-- NAVBAR -->

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="../../assets/js/script.js"></script>
</body>

</html>