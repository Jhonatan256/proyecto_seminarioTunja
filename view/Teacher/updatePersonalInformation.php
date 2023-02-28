<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../CSS/style.css" />
    <link rel="stylesheet" href="../../CSS/styleforms.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <title>Actualizar datos personales</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../images/sello.png" type="image/x-icon">
</head>

<body>
    <!-- SIDEBAR -->
    <section id="sidebar">

        <!--Importamos el menú de navegación-->
        <?php
        include("../Teacher/MenuTeacher.html");
        ?>


        <!-- MAIN -->
        <main>
            <ul class="breadcrumbs">
                <li><a href="HomeTeacher.php" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Docente</a></li>
                <li class="divider">/</li>
                <li><a href=updatePersonalInformation.php">Actualizar datos personales</a></li>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Actualizar datos personales</h3>


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
    <script src="../../js/script.js"></script>
    <script>
        function mostrarContrasena() {
            var tipo = document.getElementById("password");
            if (tipo.type == "password") {
                tipo.type = "text";
            } else {
                tipo.type = "password";
            }
        }
    </script>

</body>

</html>