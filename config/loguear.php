<?php

require_once  'db.php';

$email = $_POST['email'];
$clave = $_POST['clave'];

$queryusuario = "SELECT codRol,email,clave,estado FROM usuario WHERE email='$email' AND clave='$clave'and estado='activo'";
$result      = mysqli_query($conexion, $queryusuario);

if (mysqli_num_rows($result) > 0) {
    while ($rowData = mysqli_fetch_array($result)) {
        //echo $rowData["codRol"] . '<br>';
        if ($rowData['codRol'] == 1) { // Administrador        
            $_SESSION['email'] = $email;
            header("location:../view/Admin/HomeAdmin.php");
        } else if ($rowData['codRol'] == 2) { // Profesor
            $_SESSION['email'] = $email;
            header("location:../view/Teacher/HomeTeacher.php");
        } else if ($rowData['codRol'] == 3) { //Estudiante
            $_SESSION['email'] = $email;
            header("location:../view/Student/HomeStudent.php");
        } else {
            echo '<script type="text/javascript">';
            echo 'alert("Error al crear sugerencia")';
            echo '</script>';
            

        }
    }//FIN WHILE
} else {

    header("location:../../../login.php");
}





?>