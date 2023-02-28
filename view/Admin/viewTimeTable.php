<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/CSS/style.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleforms.css" />
    <link rel="stylesheet" href="../../assets/CSS/styleTimeTable.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <title>Ver Horario</title>
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
                <li><a href="viewTimeTable.php">Ver Horario</a></li>
                <!--Nombre del usuario que accede-->
                <label id="user-sesion1">Bienvenido,</label>
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3 class="identificador">Horario</h3>


                    </div>
                    <button type="button" class="btnImprimir"><i class='bx bxs-printer' style='color:#ffffff'></i>&nbsp&nbspImprimir Listado</button>
                    <br>
                    <div class="chart">

                        <!--Formulario de Horario-->
                        <h4 class="identificadorAsignatura">I Filosofia</h4>

                        <table class="cal">


                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Lunes</th>
                                    <th>Martes</th>
                                    <th>Miércoles</th>
                                    <th>Jueves</th>
                                    <th>Viernes</th>

                                </tr>

                            </thead>

                            <tbody>
                                <tr>
                                    <td class="horas">8:30 a 9:15 </td>
                                    <td class="Lengua">Taller Lectura y Escritura<span>Mons.Carlos Germán</span></td>
                                    <td class="Mates">Grámatica y Sintaxis<span>Mons.Carlos Germán</span></td>
                                    <td class="Mates">Introducción a la fe<span>Pbro.Nestor Torres</span></td>
                                    <td class="Mates">Introduccion a la biblia<span>Pbro.Pablo Vargas</span> </td>
                                    <td></td>

                                </tr>

                                <tr>
                                    <td class="horas">9:25 a 10:20 </td>
                                    <td class="Ingles">Inglés*<span> Aula</span></td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                    <td class="Musica">Musica *<span> Aula musica</span></td>
                                    <td class="Ingles">Inglés*<span> Aula</span></td>
                                    <td class="Lengua">Lengua *<span> Aula</span></td>
                                </tr>
                                <tr>
                                    <td class="horas">10:20 a 11:10 </td>
                                    <td class="Lengua">Lengua*<span> Aula</span></td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                    <td class="Lengua">Lengua*<span>Aula</span></td>
                                    <td class="Ingles">Inglés *<span> Aula</span></td>
                                    <td class="Mates">Mates *<span> Aula </span></td>

                                </tr>
                                <tr>
                                    <td class="recreo"> </td>
                                    <td class="recreo">Merienda</td>
                                    <td class="recreo">Merienda</td>
                                    <td class="recreo">Merienda<span> Patio</span></td>
                                    <td class="recreo"> </td>
                                    <td class="recreo"> </td>


                                <tr>
                                    <td class="horas">11:35 a 12:30 </td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                    <td class="Musica">Música *<span> Aula música</span></td>
                                    <td class="Lengua">Lengua *<span> Aula</span></td>
                                    <td class="Tecno"> Tecnología *<span> Info2</span></td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                </tr>

                                <tr>
                                    <td class="horas">12:30 a 13:25 </td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                    <td class="Tecno"> Tecnología *<span> Info2</span></td>
                                    <td class="Lengua">Lengua *<span> Aula</span></td>
                                    <td class="Tecno"> Tecnología *<span> Info2</span></td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                </tr>
                                <tr>
                                    <td class="horas">13:25 a 14:15</td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                    <td class="Tecno"> Tecnología *<span> Info2</span></td>
                                    <td class="Lengua">Lengua *<span> Aula</span></td>
                                    <td class="Mates">Mates *<span> Aula </span></td>
                                    <td class="Lengua">Lengua*<span> Info 2</span></td>

                                </tr>
                            </tbody>
                        </table>

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