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
	<section id="sidebar"></section>
	<section id="content">
		<div id="navbar"></div>
		<main>
			<div id="route"></div>
			<div class="data">
          		<div class="content-data">
				  <div id="contenedor"></div>
				</div>
        	</div>
		</main>
		
	</section>

	<script src="../assets/js/jquery-3.6.0/dist/jquery.min.js"></script>
	<script src="../assets/react/lib/react.min.js"></script>
	<script src="../assets/react/lib/react-dom.min.js"></script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> -->
	<script src="../assets/js/script.js"></script>	
	<script src="../assets/react/js/home.js"></script>
	<script src="../assets/react/js/componentes.js"></script>
	<script src="../assets/react/js/template.js"></script>
	<script src="../assets/js/sweetalert/sweetalert.min.js"></script>
</body>

</html>