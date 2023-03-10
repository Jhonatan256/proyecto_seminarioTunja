<?php
  header("Cache-Control: no-cache, must-revalidate");
  header("Expires: Sat, 1 Jul 2022 05:00:00 GMT");
?>
<!--HTML Login version 1-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
    <link href="../assets/CSS/login.css" rel="stylesheet" type="text/css" />
    <link href="../assets/js/pace/center-radar.css" rel="stylesheet" type="text/css" />
    <!-- <!-- <link href="../assets/js/pace/center-radar.css" rel="stylesheet" type="text/css" /> -->
    <!-- <script data-pace-options='{ "ajax": true }' src="../assets/js/pace/pace.js"></script> --> 
    <!-- Tab Icon -->
    <link rel="shortcut icon" href="../assets/images/Sello.png" type="image/x-icon">
    <title>Seminario</title>
    <!-- Alert plugins-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>


<body>
    <!--Contenedor-->
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
                <div class="account-wall">
                    <img class="profile-img" src="../assets/images/escudo.png" />
                    <h1 id="title">Seminario Conciliar Tunja</h1>

                    <!--Formulario -->
                    <form id="login" method="POST" class="form-signin">
                        <!--input email-->
                        <input type="email" class="form-control" placeholder="Usuario" required name="email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" />
                        <br />
                        <!--input contraseña-->
                        <input type="password" id="clave" class="form-control" placeholder="Contraseña" required name="clave" autocomplete="" />

                        <button type="button" class="btn btn-lg btn-dark btn-block" id="Ingresar" name="Ingresar" onclick="onSubmit()">
                            Acceder
                        </button>
                        <a href="recoveryPassword.php" class="text-center new-account">Olvido Contraseña</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--Fin Div contenedor-->

    <link href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.8.0/sweetalert2.min.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.8.0/sweetalert2.min.js"></script>
    <script src="../assets/react/js/login.js"></script>
    <script src="../assets/js/valid/dist/jquery.validate.js"></script>
</body>

</html>