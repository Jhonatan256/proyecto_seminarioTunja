<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <title>Registrar Docente</title>
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
                <li><a href="#" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Docente</a></li>
                <li class="divider">/</li>
                <li><a href="registerTeacher.php">Registrar Docente</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>

            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Datos docente</h3>


                    </div>
                    <div class="chart">
                        <!--Formulario de registro-->
                        <form action="../bd/addStudent.php" method="Post" class="registerStyle">
                            <label>Tipo Documento :</label>


                            <input text placeholder="" name="tipoDocumento" value="CC" disabled>


                            </select> &nbsp;
                            <label>Numero documento :</label>
                            <input text placeholder="" name="numeroDocumento">

                            <br>
                            <label>Primer Nombre:</label>
                            <input text placeholder="" name="primerNombre">
                            <label>Segundo Nombre:</label>
                            <input text placeholder="" name="segundoNombre">

                            <br>
                            <label>Primer Apellido :</label>
                            <input text placeholder="" name="primerApellido">
                            <label>Segundo Apellido :</label>
                            <input text placeholder="" name="segundoApellido">
                            <br>
                            <label>Teléfono :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="telefono">&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>Dirección :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="direccion">

                            <br>
                            <label>Correo Elétronico :</label>
                            <input text placeholder="" name="email" id="Iemail">
                            <br>
                            <label>Contraseña :</label>
                            <input text placeholder="" name="password">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>Estado :</label>
                            <select name="estado" id="lang">
                                <option value="selecciona"> ------</option>
                                <option value="activo">Activo</option>
                                <option value="inactivo">Inactivo</option>

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