<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <!--CSS-->
    <link href="assets/CSS/recoveryPassword.css" rel="stylesheet" type="text/css" />
    <title>Recuperar Contraseña</title>
    <!-- Icon -->
    <link rel="shortcut icon" href="../../assets/images/Sello.png" type="image/x-icon">
    <link href="plugins/sweetalert2/sweetalert2.all.js" rel="stylesheet" type="text/css" />

</head>

<body>



    <!-- NAVBAR -->
    <nav>

        <h1 id="title">Seminario Conciliar Tunja</h1>
        <span class="divider"></span>
        <div class="profile">
            <img src="../../assets/images/escudo.png" alt="" />
        </div>
    </nav>
    <!-- NAVBAR -->

    <!-- MAIN -->
    <main>





        </div>

        <div class="data">
            <div class="content-data">

                <h3>Recuperar contraseña</h3>
                <br>
                <p align="justify">Para recuperar su contraseña es necesario que ingrese su dirección de correo eléctronico y de clic en la botón Enviar.
                    Asi mismo debe verificar el correo electrónico registrado en el sistema,donde llegará una nueva contraseña con la que podra acceder.
                </p>

                <br>
                <input type="email" id="Iemail" class="form-control" placeholder="Usuario" required name="email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" />
                <br>
                <br>
                <button type="submit" id="ov-btn-slide-close" onclick="notify()">&nbsp&nbspEnviar</button>
                <button type="submit" id="ov-btn-slide-close" onclick="notificationSuccesful()">&nbsp&nbspVolver al Inicio</button>

                <br><br>
                <h3> <i class='bx bxs-notepad bx-tada bx-flip-horizontal' style='color:#FAD01E'></i> &nbspNota</h3>
                <p align="justify">
                    <br>Si al ingresar a su correo no observa el mensaje en la bandeja principal, verifique en la bandeja SPAM o correos no deseados.
                    <br> - Es de aclarar que el correo demora unos pocos minutos en llegar , es necesario esperar y actulizar constatemente la página.
                    <br>- Por favor no solicite el cambio de contraseña más de 2 veces sin verificar su correo.
                    <br>- caso de que no llegue el correo eléctronico comuniquese con el administrador del sistema.
                </p>
            </div>
        </div>


        </div>
    </main>
    <!-- MAIN -->

    <!-- NAVBAR -->

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="assets/js/recoveryPassword.js"></script>
    <script src="assets/js/validations.js"></script>
</body>

</html>