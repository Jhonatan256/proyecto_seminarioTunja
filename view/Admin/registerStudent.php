<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />

    <!-- Tab Icon -->
    <link rel="shortcut icon" href="../../assets/images/sello.png" type="image/x-icon">
    <!--App Icon-->
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <title>Registro Estudiante</title>
    <!-- Alert plugins-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <!--Scripts-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <!--Library .. input password-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>


</head>



<body>


    <section id="sidebar">

        <!--Importamos el menú de navegación-->
        <?php
        require("MenuAdmin.php");
        ?>
        <main>

            <ul class="breadcrumbs">
                <li><a href="HomeAdmin.php" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Estudiantes</a></li>
                <li class="divider">/</li>
                <li><a href="registerStudent.php">Registrar Estudiante</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Datos Estudiante</h3>


                    </div>
                    <div class="chart">
                        <!--Formulario de registro-->
                        <form action="?c=user&a=Guardar" method="POST" class="registerStyle">
                            <label>Tipo Documento :</label>
                            <select name="tipoDocumento" id="tipoDocumento" required value="">
                                <option value="selecciona"> ------</option>
                                <option value="TI" name="TI">TI</option>
                                <option value="CC" name="CC">CC</option>

                            </select> &nbsp;
                            <label>Numero documento :</label>
                            <input text placeholder="" name="numeroDocumento" id="numeroDocumento" required>

                            <br>
                            <label>Primer Nombre:</label>
                            <input text placeholder="" name="primerNombre" id="primerNombre" required>
                            <label>Segundo Nombre:</label>
                            <input text placeholder="" name="segundoNombre" id="segundoNombre">

                            <br>
                            <label>Primer Apellido :</label>
                            <input text placeholder="" name="primerApellido" id="primerApellido" required>
                            <label>Segundo Apellido :</label>
                            <input text placeholder="" name="segundoApellido" id="segundoApellido" required>
                            <br>
                            <label>Teléfono :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="telefono" required>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>Dirección :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="direccion" id="direccion">

                            <br>
                            <label>Correo Elétronico :</label>
                            <input text placeholder="" name="email" id="Iemail" required>
                            <br>
                            <label>Contraseña :</label>
                            <input type="password" placeholder="" name="clave" id="clave" required minlength="6" maxlength="12">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>Estado :</label>
                            <select name="estado" id="estado" required>
                                <option value="selecciona"> ------</option>
                                <option value="activo" name="activo">Activo</option>
                                <option value="inactivo" name="inactivo">Inactivo</option>
                            </select>
                            <br>
                            <a id="viewPassword">Mostrar contraseña</a>
                            <br><br>


                            <button type="submit" id="ov-btn-slide-close" onclick="notificationSuccesful()">Registrar</button>


                        </form>

                    </div>
                </div>


            </div>
        </main>
        <!-- MAIN -->
    </section>
    <!-- NAVBAR -->

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src=":../../../../assets/js/script.js"></script>



    <!--
    <script>
        let password = document.getElementById("clave");
        let viewPassword = document.getElementById("viewPassword");
        let click = false;

        viewPassword.addEventListener("click", (e) => {
            if (!click) {
                password.type = "text";
                click = true;
            } else if (click) {
                password.type = "password";
                click = false;
            }
        });
    </script>-->




</body>

</html>