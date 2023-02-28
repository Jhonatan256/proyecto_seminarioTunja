<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />

    <title>Actualizar Docente</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/Sello.png" type="image/x-icon">
</head>

<!--Auntentación con PHP-->


<body>
    <!-- SIDEBAR -->
    <section id="sidebar">

        <!--Importamos el menú de navegación-->
        <?php
        include("../Admin/MenuAdmin.php");
        ?>

        <!-- MAIN -->
        <main>

            <ul class="breadcrumbs">
                <li><a href="#" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active"> Docente</a></li>
                <li class="divider">/</li>
                <li><a href="updateTeacher.php"> Actualizar Docente</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Actualizar registro de docente</h3>


                    </div>



                    <div class="chart">


                        <br>
                        <table class="tableList">
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

                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th><a href="" class="btnEditar">Editar</a></th>
                                    <th><a href="" class="btnEliminar">Eliminar</a></th>
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