<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />
    <title>Actualizar datos estudiante</title>
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
                <li><a href="#" class="active">Estudiante</a></li>
                <li class="divider">/</li>
                <li><a href="personalInformationStudent.php">Actualizar datos </a></li>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Datos personales estudiante</h3>


                    </div>
                    <div class="chart">
                        <!--Formulario de registro-->
                        <form action="" method="Post" class="registerStyle">
                            <label>Tipo Documento :</label>


                            <input text placeholder="" name="tipoDocumento" value="CC" disabled>


                            </select> &nbsp;
                            <label>Numero documento :</label>
                            <input text placeholder="" name="numeroDocumento" disabled>

                            <br>
                            <label>Primer Nombre:</label>
                            <input text placeholder="" name="primerNombre" disabled>
                            <label>Segundo Nombre:</label>
                            <input text placeholder="" name="segundoNombre" disabled>

                            <br>
                            <label>Primer Apellido :</label>
                            <input text placeholder="" name="primerApellido" disabled>
                            <label>Segundo Apellido :</label>
                            <input text placeholder="" name="segundoApellido" disabled>
                            <br>
                            <label>Teléfono :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="telefono">&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>Dirección :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="direccion">

                            <br>
                            <label>Correo Elétronico :</label>
                            <input text placeholder="" name="email" id="Iemail">
                            <br>
                            <label style="margin-right: 1%;">Contraseña :</label>
                            <input type="password" placeholder="" id="password" style="margin-right: 26%;">


                            <button class="btn btn-primary" style="width: 20%;padding: 4px;" onclick="mostrarContrasena()"><i class='bx bx-lock-open'></i>&nbsp;&nbsp;Mostrar Contraseña</button>
                            <br><br>
                            <button type="button" class="btnRegistrar">Guardar Cambios</button>
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