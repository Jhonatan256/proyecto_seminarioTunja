


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../styles/style.css" />
    <link rel="stylesheet" href="../styles/styleforms.css" />
    <link rel="stylesheet" href="sweetalert2.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <title>Actualizar registro estudiante</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../images/sello.png" type="image/x-icon">
</head>

<body>
    <!-- SIDEBAR -->
    <section id="sidebar">
        <a href="HomeAdmin.php" class="brand">&nbsp&nbsp&nbsp<i class='bx bxs-user-pin' style='color:#ffffff'></i>&nbsp&nbspAdministrador</a>
        <ul class="side-menu">
            <li>
                <a href="HomeAdmin.php" class="active">
                    <i class="bx bxs-dashboard icon"></i> Home</a>
            </li>
            <!--Section 1-->
            <li class="divider" data-text="MÓDULOS">MÓDULOS</li>
            <!--Opciones Section 1-->
            <li>
                <a href="#"><i class="bx bxs-notepad icon"></i>Estudiantes
                    <i class="bx bx-chevron-right icon-right"></i></a>
                <ul class="side-dropdown">
                    <li><a href="registerStudent.php">Registrar Estudiante</a></li>
                    <li><a href="updateStudent.php">Actualizar Estudiante</a></li>
                    <li><a href="listStudent.php">Listar Estudiante</a></li>

                </ul>
            </li>
            <!--Section 2-->
            <!--  <li class="divider" data-text="Docente">Docente</li>-->
            <!--Opciones Section 2-->
            <li>
                <a href="#"><i class="bx bxs-notepad icon"></i>Docente
                    <i class="bx bx-chevron-right icon-right"></i></a>
                <ul class="side-dropdown">
                    <li><a href="#">Registrar Docente</a></li>
                    <li><a href="#">Actualizar Docente</a></li>
                    <li><a href="#">Listar Docente</a></li>

                </ul>
            </li>

            <!--Section 3-->
            <li>
                <a href="#"><i class="bx bxs-inbox icon"></i>Asignatura
                    <i class="bx bx-chevron-right icon-right"></i></a>
                <ul class="side-dropdown">
                    <li><a href="#">Registrar Asignatura</a></li>
                    <li><a href="#">Actualizar Asignatura</a></li>
                    <li><a href="#">Listar Asignatura</a></li>

                </ul>
            </li>
            <!--Section 4-->
            <li>
                <a href="#"><i class="bx bxs-inbox icon"></i>Horario
                    <i class="bx bx-chevron-right icon-right"></i></a>
                <ul class="side-dropdown">
                    <li><a href="#">Registrar Horario</a></li>
                    <li><a href="#">Actualizar Horario</a></li>
                    <li><a href="#">Ver Horario</a></li>

                </ul>
            </li>

            <!--Section 5-->



            <li>
                <a href="#"><i class="bx bxs-widget icon"></i>Plan de Estudios
                    <i class="bx bx-chevron-right icon-right"></i></a>
                <ul class="side-dropdown">
                    <li><a href="#">Registrar Horario</a></li>
                    <li><a href="#">Actualizar Horario</a></li>
                    <li><a href="#">Ver Horario</a></li>

                </ul>
            </li>




    </section>
    <!-- SIDEBAR -->

    <!-- NAVBAR -->
    <section id="content">
        <!-- NAVBAR -->
        <nav>
            <i class="bx bx-menu toggle-sidebar"></i>
            <form action="#">
                <div class="form-group">
                    <input type="text" placeholder="Buscar..." />
                    <i class="bx bx-search icon"></i>
                </div>
            </form>

            <h1 class="title">Seminario Conciliar Tunja</h1>
            <span class="divider"></span>
            <div class="profile">
                <img src="../images/escudo.png" alt="" />
                <ul class="profile-link">
                    <!-- <li>
                        <a href="#"><i class="bx bxs-user-circle icon"></i> Profile</a>
                    </li>
                    <li>
                        <a href="#"><i class="bx bxs-cog"></i> Settings</a>
                    </li> -->
                    <li>
                        <a href="#"><i class='bx bx-log-out'></i>Cerrar Sesión</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- NAVBAR -->

        <!-- MAIN -->
        <main>

            <ul class="breadcrumbs">
                <li><a href="#">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Dashboard</a></li>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Actualizar datos estudiante</h3>


                    </div>



                    <div class="chart">
                        <!--Formulario de registro-->
                        <form action="../viewAdmin/updateRowStudent.php" method="POST" class="registerStyle">
                            <label>Tipo Documento :</label>
                            <select name="tipoDocumento" id="lang">
                                <option value=""> <?php echo $row['tipoDocumento'] ?></option>
                                <option value=" Ti">TI</option>
                                <option value="cc">CC</option>

                            </select> &nbsp;
                            <label>Numero documento :</label>
                            <input text placeholder="" name="numeroDocumento" value="<?php echo $row['numeroDocumento'] ?>">

                            <br>
                            <label>Primer Nombre:</label>
                            <input text placeholder="" name="primerNombre" value="<?php echo $row['primerNombre'] ?>"> &nbsp;
                            <label>Segundo Nombre :</label>&nbsp;&nbsp;
                            <input text placeholder="" name="segundoNombre" value="<?php echo $row['segundoNombre'] ?>">

                            <br>
                            <label>Primer Apellido :</label>
                            <input text placeholder="" name="primerApellido" value="<?php echo $row['primerApellido'] ?>">
                            <label>Segundo Apellido :</label>
                            <input text placeholder="" name="segundoApellido" value="<?php echo $row['segundoApellido'] ?>">
                            <br>
                            <label>Teléfono :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="telefono" value="<?php echo $row['telefono'] ?>">
                            <label>Dirección </label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input text placeholder="" name="direccion" value="<?php echo $row['direccion'] ?>"> &nbsp;&nbsp;

                            <br>
                            <label>Correo Elétronico :</label>
                            <input text placeholder="" name="email" value="<?php echo $row['email'] ?>">
                            <br>
                            <label>Contraseña :</label>
                            <input text placeholder="" name="password" value="<?php echo $row['password'] ?>">

                            <label>Estado :</label>
                            <select name="estado" id="lang">
                                <option> <?php echo $row['estado'] ?></option>
                                <option value="activo">Activo</option>
                                <option value="inactivo">Inactivo</option>

                            </select>
                            <br>
                            <input type="submit">Actualizar</input>
                        </form>

                    </div>
                </div>


            </div>
        </main>
        <!-- MAIN -->
    </section>
    <!-- NAVBAR -->

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="../js/script.js"></script>

</body>

</html>