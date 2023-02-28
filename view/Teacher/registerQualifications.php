<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <title>Registro Asignatura</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/Sello.png" type="image/x-icon">
</head>

<body>
    <!-- SIDEBAR -->
    <section id="sidebar">
        <!--Importamos el menú de navegación-->
        <?php
        include("MenuTeacher.php");
        ?>


        <!-- MAIN -->
        <main>

            <ul class="breadcrumbs">
                <li><a href="HomeTeacher.php" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Calificaciones</a></li>
                <li class="divider">/</li>
                <li><a href="registerQualifications.php">Registrar Calificaciones</a></li>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Registrar Calificación</h3>


                    </div>
                    <div class="chart">
                        <!--Formulario de registro-->
                        <form action="" method="Post" class="registerStyle">



                            <label style="margin-right: 2%;">Ciclo:</label>
                            <select name="ciclo" id="opcGrupo">
                                <option value="selecciona"> ------</option>
                                <option value="activo">Teologico</option>
                                <option value="inactivo">Filosofico</option>

                            </select>

                            <br>
                            <label>Asignatura:</label>
                            <select name="ciclo" id="opcGrupo" style="margin-right: 2%;">
                                <option value="selecciona"> ------</option>
                                <option value="activo">Introduccion a al fe</option>
                                <option value="inactivo">Filosofia I</option>
                                <option value="inactivo">Humanidades</option>
                                <option value="inactivo">Etica</option>

                            </select>
                            <br>
                            <label>Documento:</label>

                            <input style="margin-right: 2%;" type="number" placeholder="Identificación del estudiante" name="docEstudiante" id="opcGrupo">
                            <br>
                            <label>Nombre:</label>
                            <input type="text" placeholder="Nombre estudiante" name="nombreEstudiante" id="opcGrupo" disabled>
                            <br>
                            <label>Apellido:</label>
                            <input type="text" placeholder="Apellido" name="apellidoEstudiante" id="opcGrupo" disabled>
                            <br>
                            <u><label style="margin-right: 1%;">Nota Habilitación:</label></u>
                            <input type="text" name="apellidoEstudiante">
                            <br>
                            <u><label style="margin-right: 3%;">Nota Tutoria:</label></u>
                            <input type="text" name="apellidoEstudiante">
                            <br>
                            <u style="color:blue"> <label style="color:blue;margin-right: 4%;">Nota Final:</label> </u>
                            <input type="text" name="apellidoEstudiante">


                            <br><br>
                            <button type="button" class="btnRegistrar">Registrar</button>


                        </form>

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