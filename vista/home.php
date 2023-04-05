<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 1 Jul 2022 05:00:00 GMT");
?>
<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
<!--CSS-->
<link href="../assets/CSS/style.css" rel="stylesheet" type="text/css" />
<link href="../assets/CSS/sliderHome.css" rel="stylesheet" type="text/css" />
<link href="../assets/CSS/styleforms.css" rel="stylesheet" type="text/css" />
<link href="../assets/js/pace/center-radar.css" rel="stylesheet" type="text/css" />
<!-- <link href="../assets/js/DataTables/datatables.min.css" rel="stylesheet" type="text/css" /> -->
<link href="../assets/CSS/sb-admin-2.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.css" />
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
	<div id="modal1"></div>
	<script src="../assets/js/jquery-3.6.0/dist/jquery.min.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
	<script type="text/javascript" src="../assets/js/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="../assets/react/lib/react.min.js"></script>
	<script src="../assets/react/lib/react-dom.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.js">
	
	<script src="../assets/js/script.js"/></script>	
	<script src="../assets/react/js/home.js"></script>
	<script src="../assets/react/js/componentes.js"></script>
	<script src="../assets/react/js/template.js"></script>
	<script src="../assets/js/sweetalert/sweetalert.min.js"></script>
	<!--<script src="../assets/js/DataTables/datatables.min.js"></script>-->
	<script src="../assets/js/valid/dist/jquery.validate.js"></script>
</body>

</html>