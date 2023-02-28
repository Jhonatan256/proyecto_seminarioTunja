<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />

    <title>Actualizar Estudiante</title>
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/Sello.png" type="image/x-icon">
</head>
<!--Auntentación con PHP-->
<?php

//Instanciación clase -- model
require_once 'model/userModel.php';
$methodList = new Usuario();


?>


<body>
    <!-- SIDEBAR -->
    <section id="sidebar">

        <!--Importamos el menú de navegación-->
        <?php
        include("MenuAdmin.php");
        ?>

        <main>

            <ul class="breadcrumbs">
                <li><a href="#" class="active">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Estudiantes</a></li>
                <li class="divider">/</li>
                <li><a href="updateStudent.php">Actualizar Estudiante</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>

            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Actualizar registro de estudiante</h3>
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
                                    <?php foreach ($methodList->listUserStudents() as $row) : ?>

                                        <td><?=$row['tipoDocumento'] ?></td>
                                        <td><?=$row['numeroDocumento'] ?></td>
                                        <td><?=$row['primerNombre'] ?></td>
                                        <td><?=$row['primerApellido'] ?></td>
                                        <td><?=$row['telefono'] ?></td>
                                        <td><?=$row['direccion'] ?></td>
                                        <td><?=$row['email'] ?></td>
                                        <td><?=$row['clave'] ?></td>
                                        <td><?=$row['estado'] ?></td>



                                        <th><a class="btnEditar" href="?c=user&a=FormCrear&idUsuario=<?=$row->idUsuario ?>"><i class='bx bxs-edit-alt'></i></a></th>-->
                                         <th><a class="btnEliminar" href="?c=user&a=Borrar&idUsuario=<?php $row->idUsuario ?>" <i class='bx bxs-trash'></i></a></th>-->
                                     
                                </tr>



                            <?php

                                    endforeach;
                            ?>
                            </tbody>




                        </table>

                    </div>

                    <br>





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