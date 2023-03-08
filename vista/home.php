<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 1 Jul 2022 05:00:00 GMT");
?>
<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
	rel="stylesheet" />
<!--CSS-->
<link href="../assets/CSS/style.css" rel="stylesheet" type="text/css" />
<link href="../assets/CSS/sliderHome.css" rel="stylesheet" type="text/css" />
<link href="../assets/CSS/styleforms.css" rel="stylesheet" type="text/css" />
<link href="../assets/js/pace/center-radar.css" rel="stylesheet" type="text/css" />
<script data-pace-options='{ "ajax": true }' src="../assets/js/pace/pace.js"></script>
<title>Home</title>
<!-- Icon -->
<link rel="shortcut icon" href="../assets/images/Sello.png"
	type="image/x-icon">
</head>
<!--Auntentación con PHP-->


<body>
	<section id="sidebar">
		<!--Importamos el menú de navegación-->
		<a href="HomeAdmin.php" class="brand">&nbsp&nbsp&nbsp<i
			class='bx bxs-user-pin' style='color: #ffffff'></i>&nbsp&nbspAdministrador
		</a>
		<ul class="side-menu">
			<li><a href="HomeAdmin.php" class="active"> <i
					class="bx bxs-dashboard icon"></i> Home
			</a></li>
			<!--Section 1-->
			<li class="divider" data-text="MÓDULOS">MÓDULOS</li>
			<!--Opciones Section 1-->
			<li><a href="#"><i class="bx bxs-notepad icon"></i>Estudiantes <i
					class="bx bx-chevron-right icon-right"></i></a>
				<ul class="side-dropdown">
					<li><a href="registerStudent.php">Registrar Estudiante</a></li>
					<li><a href="updateStudent.php">Actualizar Estudiante</a></li>
					<li><a href="listStudent.php">Listar Estudiante</a></li>

				</ul></li>
			<!--Section 2-->
			<!--  <li class="divider" data-text="Docente">Docente</li>-->
			<!--Opciones Section 2-->
			<li><a href="#"><i class="bx bxs-notepad icon"></i>Docente <i
					class="bx bx-chevron-right icon-right"></i></a>
				<ul class="side-dropdown">
					<li><a href="registerTeacher.php">Registrar Docente</a></li>
					<li><a href="updateTeacher.php">Actualizar Docente</a></li>
					<li><a href="listTeacher.php">Listar Docente</a></li>

				</ul></li>

			<!--Section 3-->
			<li><a href="#"><i class="bx bxs-inbox icon"></i>Asignatura <i
					class="bx bx-chevron-right icon-right"></i></a>
				<ul class="side-dropdown">
					<li><a href="registerSubject.php">Registrar Asignatura</a></li>
					<li><a href="updateSubject.php">Actualizar Asignatura</a></li>
					<li><a href="listSubject.php">Listar Asignatura</a></li>

				</ul></li>
			<!--Section 4-->
			<li><a href="#"><i class="bx bxs-inbox icon"></i>Horario <i
					class="bx bx-chevron-right icon-right"></i></a>
				<ul class="side-dropdown">
					<li><a href="registerTimeTable.php">Registrar Horario</a></li>
					<li><a href="updateTimeTable.php">Actualizar Horario</a></li>
					<li><a href="viewTimeTable.php">Ver Horario</a></li>

				</ul></li>

			<!--Section 5-->



			<li><a href="#"><i class="bx bxs-widget icon"></i>Plan de Estudios <i
					class="bx bx-chevron-right icon-right"></i></a>
				<ul class="side-dropdown">
					<li><a href="">Ver Plan de estudios</a></li>
				</ul></li>
	
	</section>
	<!-- SIDEBAR -->

	<!-- NAVBAR -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class="bx bx-menu toggle-sidebar"></i>
			<form action="#">
				<div class="form-group">
					<input type="text" placeholder="Buscar..." /> <i
						class="bx bx-search icon"></i>
				</div>
			</form>

			<h1>Seminario Conciliar Tunja</h1>
			<span class="divider"></span>
			<div class="profile">
				<img src="../assets/images/escudo.png" alt="" />
				<ul class="profile-link">
					<!-- <li>
                        <a href="#"><i class="bx bxs-user-circle icon"></i> Profile</a>
                    </li>
                    <li>
                        <a href="#"><i class="bx bxs-cog"></i> Settings</a>
                    </li>
                    <li>-->
					<a href="#" onclick="salir()"><i class="bx bxs-log-out-circle"></i>
						Cerrar Sesión</a>
					</li>
				</ul>
			</div>
		</nav>
		<!-- NAVBAR -->



		<!-- NAVBAR -->
		<!-- MAIN -->
		<main>
			<ul class="breadcrumbs">
				<li><a href="HomeAdmin.php">Home</a></li>

				<!--Nombre del usuario que accede-->
				<label id="user-sesion">Bienvenido,</label>
			</ul>
			<div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Eventos Seminario</h3>
					</div>
					<!--INICIO CARRUSEL-->
					<div id="slider" style="background-color: yellow;">
						<figure>
							<img src="../assets/images/actividad1.jpg" alt="">
							<img src="../assets/images/actividad1.jpg" alt="">
							<img src="../assets/images/actividad1.jpg" alt="">
							<img src="../assets/images/actividad1.jpg" alt="">

						</figure>
					</div>
					<!--FIN CARRUSEL-->
				</div>
			</div>
		</main>
		<!-- MAIN -->
	</section>
	<script src="../assets/js/jquery-3.6.0/dist/jquery.min.js"></script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> -->
	<script src="../assets/js/script.js"></script>	
	<script src="../assets/react/js/home.js"></script>
	<script src="../assets/js/sweetalert/sweetalert.min.js"></script>
</body>

</html>