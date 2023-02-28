<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />

    <title>Actualizar Horario</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/sello.png" type="image/x-icon">
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
                <li><a href="#" class="active">Horario</a></li>
                <li class="divider">/</li>
                <li><a href="updateTimeTable.php">Actualizar Horario</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Actualizar horario</h3>


                    </div>



                    <div class="chart">


                        <br>
                        <table class="tableList">
                            <thead>
                                <tr>

                                    <th style="background-color: black;color:white"> #</th>
                                    <th style="background-color: black;color:white">Dia</th>
                                    <th style="background-color: black;color:white">Hora Inicio</th>

                                    <th style="background-color: black;color:white">Hora Fin</th>

                                    <th style="background-color: black;color:white">Ciclo</th>
                                    <th style="background-color: black;color:white">Asignatura</th>



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
                                    <th><a href="updateRowStudent.php?idUsuario=<?php echo $row['idUsuario'] ?>" class="btnEditar">Editar</a></th>
                                    <th><a href="../bd/deleteRegisterStudent.php?idUsuario=<?php echo $row['idUsuario'] ?>" class="btnEliminar">Eliminar</a></th>
                                </tr>



                            </tbody>


                        </table>

                    </div>

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