-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-03-2023 a las 20:17:49
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_seminariov3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

DROP TABLE IF EXISTS `asignatura`;
CREATE TABLE IF NOT EXISTS `asignatura` (
  `idAsignatura` int(11) NOT NULL AUTO_INCREMENT,
  `nombreAsignatura` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `intensidadHorariaSemanal` int(11) NOT NULL,
  `descripcion` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCiclo` int(11) NOT NULL,
  PRIMARY KEY (`idAsignatura`),
  KEY `idCiclo` (`idCiclo`),
  KEY `id_ciclo` (`idCiclo`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`idAsignatura`, `nombreAsignatura`, `intensidadHorariaSemanal`, `descripcion`, `idCiclo`) VALUES
(1, 'Kerigma Cristiano', 3, 'Introducción a la Biblia', 1),
(2, 'Introducción a la Fe', 4, NULL, 1),
(3, 'Gramática y Sintaxis', 2, NULL, 1),
(4, 'Introducción a la filosofía', 4, NULL, 1),
(5, 'Ingles I', 2, NULL, 1),
(6, 'Taller de lecto escritura I', 6, NULL, 1),
(7, 'Mundo Bíblico', 4, 'Historia y geografía', 1),
(8, 'Epistemología', 3, NULL, 1),
(9, 'Lógica clásica simbólica', 3, NULL, 1),
(11, 'Cosmotologia', 3, NULL, 1),
(12, 'Historia de filosofía antigua', 4, NULL, 1),
(13, 'Psicología Evolutiva', 3, NULL, 1),
(14, 'Seminario Autores I', 2, NULL, 1),
(15, 'Ingles III', 2, NULL, 1),
(16, 'Claves Lectura Biblica', 4, 'aspectos Literarios y teologia', 1),
(17, 'Hermenéutica', 2, NULL, 1),
(18, 'Inglés IV', 2, NULL, 1),
(20, 'Históricos y Proféticos I', 4, NULL, 2),
(21, 'Teología Fundamental', 3, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
CREATE TABLE IF NOT EXISTS `ciclo` (
  `idCiclo` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCiclo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `semestre` int(2) NOT NULL,
  `descripcion` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinalizacion` date NOT NULL,
  `idGrupo` int(11) NOT NULL,
  PRIMARY KEY (`idCiclo`),
  KEY `idGrupo` (`idGrupo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `ciclo`
--

INSERT INTO `ciclo` (`idCiclo`, `nombreCiclo`, `semestre`, `descripcion`, `fechaInicio`, `fechaFinalizacion`, `idGrupo`) VALUES
(1, 'Filosofico', 1, NULL, '2022-03-08', '2023-03-08', 1),
(2, 'Teologico', 1, NULL, '2022-03-01', '2023-03-08', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

DROP TABLE IF EXISTS `clases`;
CREATE TABLE IF NOT EXISTS `clases` (
  `idClase` int(11) NOT NULL AUTO_INCREMENT,
  `idDocente` int(11) NOT NULL,
  `idEstudiante` int(11) NOT NULL,
  `idAsignatura` int(11) NOT NULL,
  `idHorario` int(11) NOT NULL,
  `notaHabilitacion` decimal(10,2) DEFAULT NULL,
  `notaTutoria` decimal(10,2) DEFAULT NULL,
  `notaFinal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idClase`),
  KEY `idDocente` (`idDocente`),
  KEY `idEstudiante` (`idEstudiante`),
  KEY `idAsignatura` (`idAsignatura`),
  KEY `idHorario` (`idHorario`)
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`idClase`, `idDocente`, `idEstudiante`, `idAsignatura`, `idHorario`, `notaHabilitacion`, `notaTutoria`, `notaFinal`) VALUES
(132, 4, 5, 11, 13, NULL, NULL, NULL),
(133, 4, 8, 11, 13, NULL, NULL, NULL),
(134, 4, 14, 14, 13, '0.00', '0.00', '0.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `IdGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `nombreGrupo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`IdGrupo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`IdGrupo`, `nombreGrupo`) VALUES
(1, 'I Filosofía'),
(2, 'II Filosofía'),
(3, 'III Filosofía'),
(4, 'I Teología'),
(5, 'II Teologia'),
(6, 'IV Teologia'),
(7, 'V Teologia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

DROP TABLE IF EXISTS `horario`;
CREATE TABLE IF NOT EXISTS `horario` (
  `idHorario` int(11) NOT NULL AUTO_INCREMENT,
  `dia` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `horaInicio` varchar(8) COLLATE utf8_spanish2_ci NOT NULL,
  `horaFin` varchar(8) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`idHorario`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`idHorario`, `dia`, `horaInicio`, `horaFin`) VALUES
(13, 'Lunes', '08:30:00', '09:15:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log`
--

DROP TABLE IF EXISTS `log`;
CREATE TABLE IF NOT EXISTS `log` (
  `idLog` int(11) NOT NULL AUTO_INCREMENT,
  `fechaModificacion` varchar(10) NOT NULL,
  `horaModificacion` varchar(8) NOT NULL,
  `usuarioModificacion` varchar(20) NOT NULL,
  `tabla` varchar(40) NOT NULL,
  `idRegistro` int(11) NOT NULL,
  `tipoModificacion` varchar(10) NOT NULL,
  PRIMARY KEY (`idLog`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `log`
--

INSERT INTO `log` (`idLog`, `fechaModificacion`, `horaModificacion`, `usuarioModificacion`, `tabla`, `idRegistro`, `tipoModificacion`) VALUES
(2, '26-03-2023', '', '3', 'registrarEstudiante', 0, 'registrar'),
(3, '26-03-2023', '', '3', 'registrarEstudiante', 0, 'registrar'),
(4, '26-03-2023', '', '3', 'registrarEstudiante', 0, 'registrar'),
(5, '26-03-2023', '06:26:07', '3', 'estudiante', 31, 'registrar'),
(6, '26-03-2023', '01:28:11', '3', 'estudiante', 32, 'registrar'),
(7, '26-03-2023', '02:35:34', '3', 'estudiante', 33, 'registrar'),
(8, '26-03-2023', '02:36:46', '3', 'estudiante', 0, 'Actualizar'),
(9, '26-03-2023', '02:38:07', '3', 'estudiante', 0, 'Eliminar'),
(10, '26-03-2023', '02:38:17', '3', 'estudiante', 0, 'Eliminar'),
(11, '26-03-2023', '02:38:25', '3', 'estudiante', 0, 'Actualizar'),
(12, '26-03-2023', '02:38:31', '3', 'estudiante', 0, 'Eliminar'),
(13, '26-03-2023', '02:39:32', '3', 'estudiante', 0, 'Actualizar'),
(14, '26-03-2023', '02:42:32', '3', 'estudiante', 0, 'Actualizar'),
(15, '26-03-2023', '02:46:44', '3', 'docente', 34, 'Registrar'),
(16, '26-03-2023', '02:48:01', '3', 'estudiante', 0, 'Eliminar'),
(17, '26-03-2023', '02:50:39', '3', 'estudiante', 35, 'registrar'),
(18, '26-03-2023', '02:52:04', '3', 'estudiante', 36, 'registrar'),
(19, '26-03-2023', '02:58:00', '3', 'estudiante', 37, 'registrar'),
(20, '26-03-2023', '02:58:26', '3', 'estudiante', 38, 'registrar'),
(21, '26-03-2023', '03:00:52', '3', 'Asignatura', 0, 'Eliminar'),
(22, '26-03-2023', '03:11:07', '3', 'Ciclo', 3, 'Registrar'),
(23, '26-03-2023', '03:11:17', '3', 'Ciclo', 0, 'Actualizar'),
(24, '26-03-2023', '03:11:22', '3', 'Ciclo', 0, 'Eliminar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_hora_ingreso` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `idRol` int(11) NOT NULL AUTO_INCREMENT,
  `nombreRol` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `nombreRol`) VALUES
(1, 'Administrador'),
(2, 'Docente'),
(3, 'Estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `tipoDocumento` varchar(2) COLLATE utf8_spanish2_ci NOT NULL,
  `numeroDocumento` bigint(20) NOT NULL,
  `primerNombre` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `segundoNombre` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `primerApellido` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `segundoApellido` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(8) COLLATE utf8_spanish2_ci NOT NULL,
  `codRol` int(11) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `codRol` (`codRol`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `tipoDocumento`, `numeroDocumento`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `telefono`, `direccion`, `email`, `password`, `estado`, `codRol`) VALUES
(3, 'CC', 100333, 'Alejandro', '', 'Sanchez', 'Martinez', '752411', 'calle 6 # 32', 'alejandro@gmail.com', '$2y$10$qf4htZpU9iJnnBsbvs2R.eTu0usniH4/2HgZlijpG9jmLli8FiDK6', 'activo', 1),
(4, 'TI', 192727222, 'Juan', 'Sebastian', 'Suarez', 'Flores', '744333', 'calle 23 -3 3', 'sebastian@gmail.com', 'sebas2023', 'activo', 2),
(5, 'TI', 110643267, 'Carlos2', 'Felipe2', 'Gomez2', 'Nuñez', '3104846322', 'diagonal 34 # 2-15', 'felipe@gmail.com', 'felipe2200', 'activo', 3),
(7, 'CC', 1049654252, 'Jhonatan', 'Andres', 'Roncancio', 'Pinzon', '345345', '345345', 'jhoit@fsdf', '123', 'activo', 3),
(8, 'CC', 120093923, 'Orlando', '', 'Salcedo', 'Chavez', '3192622311', 'calle 34 # 2-65', 'orlandoChavez@gmail.com', '123456', 'activo', 3),
(9, 'TI', 38833, 'Augusto', 'Fernando', 'Tamara', 'Gutierrez', '752411', 'diagonal 32 # 4 mzna 5 barrio la esperanza', 'augustoM@gmail.com', 'augusto2304', 'activo', 2),
(10, 'CC', 100333, 'Alejandro', '', 'Sanchez', 'Martinez', '752411', 'calle 6 # 32', 'alejandro@gmail.com', 'cami03s', 'activo', 3),
(12, 'TI', 2313434, 'Luis', 'Alejandro', 'Martinez', 'Hernandez', '3127191912', 'calle 34 b-c 34', 'luis@outlook.es', 'luis1234', 'activo', 3),
(14, 'CC', 913561, 'Pablo', NULL, 'Sexto', 'Hernandez', '7454533', NULL, 'pablo6@gmail.com', 'pablito23', 'activo', 3),
(33, 'CC', 9854155, 'Juan', 'Francisco', 'Castro', 'Chavez', '7541122', 'calle 34c # 2 -35', 'francisco@hotmail.com', '$2y$10$Yo6MMXyTFt/E9zoBMxHDQePZ9gGV4vH1uWTgiDzASAJQzUnEhmX9m', 'activo', 3),
(35, 'TI', 456741, 'Juan', 'Andres', 'Diaz', 'Hernandez', '74414142', 'calle 34', 'juanes@gmail.com', '$2y$10$sCaTSruAqGQuaXm7vF0UHOjI5QfTZWJIxljnuIchKaPYEjSJm1k8.', 'activo', 3),
(36, 'TI', 456741, 'felipe', '', 'Gomez', 'ALvarez', '3102418654', 'calle 34', 'juanes@gmail.com', '$2y$10$I35ZPWkfBb8IuOcDVcm.AO8x7dcAe/KW7dY1XO1aYa3mashFP9ece', 'activo', 3),
(37, 'CC', 541564, 'Camilo', '', 'Camilo', 'Camilo', '7451212', 'calle 32 sur', 'Camilo@gmail.com', '$2y$10$K1HbOIXKZBvTKIVQxlW1oeDDxNjkFzkJkbWI6gamWKlrcTdG7vMrW', 'activo', 3),
(38, 'CC', 1654, 'Camilo', 'Camilo', 'Camilo', 'Camilo', 'Camilo', 'Camilo', 'Camilo@gmail.com', '$2y$10$eWkfgLpQp7ukFmkeX0UqvuimJsfP.H8FvXUAxnb4ZcXHQJ7cxowbO', 'activo', 3);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD CONSTRAINT `asignatura_ibfk_1` FOREIGN KEY (`idCiclo`) REFERENCES `ciclo` (`idCiclo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ciclo`
--
ALTER TABLE `ciclo`
  ADD CONSTRAINT `ciclo_ibfk_1` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`IdGrupo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `clases_ibfk_1` FOREIGN KEY (`idDocente`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`idEstudiante`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clases_ibfk_3` FOREIGN KEY (`idAsignatura`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clases_ibfk_4` FOREIGN KEY (`idHorario`) REFERENCES `horario` (`idHorario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`codRol`) REFERENCES `rol` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
