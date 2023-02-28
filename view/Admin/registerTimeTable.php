<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <title>Registro Horario</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/sello.png" type="image/x-icon">
</head>
<!--Auntentación con PHP-->
<?php
session_start();
$email = $_SESSION['email'];
//Guardar en una variable el email de la sesiòn
$dato = $email;
if (!isset($email)) {
    $dato = '';
    header("location:../login.php");
} else {
    $dato;
}
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
                <li><a href="#" class="active">Horario</a></li>
                <li class="divider">/</li>
                <li><a href="registerTimeTable.php">Registrar Horario</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Datos Horario</h3>


                    </div>
                    <div class="chart">
                        <!--Formulario de registro-->
                        <form action="" method="Post" class="registerStyle">

                            <label>Dia:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select name="dia" id="opcGrupo">
                                <option value="selecciona"> ------</option>
                                <option value="activo">Lunes</option>
                                <option value="inactivo">Martes</option>
                                <option value="activo">Miércoles</option>
                                <option value="inactivo">Jueves</option>
                                <option value="activo">Viernes</option>
                            </select>
                            <br>
                            <label>Hora Inicio :</label>
                            <input type="time" placeholder="" name="horaInicio" id="opcGrupo">

                            <br>
                            <label>Hora Fin :</label>&nbsp;&nbsp;&nbsp;
                            <input type="time" placeholder="" name="horaFin" id="opcGrupo">
                            <br>
                            <label>Ciclo:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select name="ciclo" id="opcGrupo">
                                <option value="selecciona"> ------</option>
                                <option value="activo">Filosofico</option>
                                <option value="inactivo">Teólogico</option>
                            </select>
                            <br>

                            <label>Asignatura:</label>
                            <select name="asignatura" id="opcGrupo">
                                <option value="selecciona"> ------</option>
                                <option value="activo">I Filosofia</option>
                                <option value="inactivo">II Filosofia</option>
                                <option value="activo">III Filosofia</option>
                                <option value="inactivo">I Teologia</option>
                                <option value="activo">II Teologia</option>
                                <option value="inactivo">IV Teologia</option>
                                <option value="activo">V Teologia</option>


                            </select>
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