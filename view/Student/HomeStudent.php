<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <!--CSS-->
    <link href="../../assets/CSS/style.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/CSS/sliderHome.css" rel="stylesheet" type="text/css" />
    <link href="../../assets/CSS/styleforms.css" rel="stylesheet" type="text/css" />
    <!-- Icono de la pestaña-->
    <link rel="shortcut icon" href="../../assets/images/sello.png" type="image/x-icon">

    <title>Inicio Estudiante</title>

</head>

<body>
    <!-- SIDEBAR -->
    <section id="sidebar">

        <!--Importamos el menú de navegación-->
        <?php
        include("MenuStudent.php");
        ?>
        <!-- MAIN -->
        <main>

            <ul class="breadcrumbs">
                <li><a href="HomeTeacher.php">Home</a></li>
                <!--  <li class="divider">/</li>
                <li><a href="#" class="active">Dashboard</a></li>-->
            </ul>


            <div class="data">
                <div class="content-data">
                    <div class="head">
                        <h3>Eventos Seminario</h3>
                    </div>

                    <!--INICIO CARRUSEL-->
                    <div id="slider" style="background-color: yellow;">
                        <figure>
                            <img src="../../assets/images/actividad1.jpg" alt="">
                            <img src="../../assets/images/actividad1.jpg" alt="">
                            <img src="../../assets/images/actividad1.jpg" alt="">
                            <img src="../../assets/images/actividad1.jpg" alt="">
                            <img src="../../assets/images/actividad1.jpg" alt="">
                        </figure>
                    </div>
                    <!--FIN CARRUSEL-->


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