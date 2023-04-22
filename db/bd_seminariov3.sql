-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-04-2023 a las 15:33:07
-- Versión del servidor: 8.0.31
-- Versión de PHP: 7.4.33

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
-- Estructura de tabla para la tabla `anexo`
--

DROP TABLE IF EXISTS `anexo`;
CREATE TABLE IF NOT EXISTS `anexo` (
  `idAnexo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `path` varchar(50) NOT NULL,
  `fechaCarga` varchar(10) NOT NULL,
  `eliminado` varchar(2) NOT NULL,
  PRIMARY KEY (`idAnexo`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

DROP TABLE IF EXISTS `asignatura`;
CREATE TABLE IF NOT EXISTS `asignatura` (
  `idAsignatura` int NOT NULL AUTO_INCREMENT,
  `nombreAsignatura` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `intensidadHorariaSemanal` int NOT NULL,
  `descripcion` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `idCiclo` int NOT NULL,
  PRIMARY KEY (`idAsignatura`),
  KEY `idCiclo` (`idCiclo`),
  KEY `id_ciclo` (`idCiclo`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`idAsignatura`, `nombreAsignatura`, `intensidadHorariaSemanal`, `descripcion`, `idCiclo`) VALUES
(24, 'Kerigma Cristiano', 4, 'Introducción a la Biblia', 9),
(25, 'Etica', 4, 'Asignatura interdisciplinar ', 9),
(26, 'Musica I', 4, 'Canto sacro', 9),
(27, 'Introducción a la fe', 8, '', 9),
(28, 'Teología Espiritual I', 6, 'Indaga la vida espiritual: su concepto, los modos de progreso desde los inicios ', 8),
(29, 'Epistemologia', 4, '', 8),
(30, 'Ingles I', 4, '', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
CREATE TABLE IF NOT EXISTS `ciclo` (
  `idCiclo` int NOT NULL AUTO_INCREMENT,
  `nombreCiclo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `semestre` int NOT NULL,
  `descripcion` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinalizacion` date NOT NULL,
  `idGrupo` int NOT NULL,
  PRIMARY KEY (`idCiclo`),
  KEY `idGrupo` (`idGrupo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ciclo`
--

INSERT INTO `ciclo` (`idCiclo`, `nombreCiclo`, `semestre`, `descripcion`, `fechaInicio`, `fechaFinalizacion`, `idGrupo`) VALUES
(8, 'Teólogico', 2, 'Estudio de Dios y la fé, su relación con el hombre.', '2023-02-06', '2023-08-07', 4),
(9, 'Filosofico', 1, NULL, '2022-04-04', '2023-04-11', 1),
(10, 'Propedeutico', 1, '', '2023-02-01', '2023-06-01', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

DROP TABLE IF EXISTS `clases`;
CREATE TABLE IF NOT EXISTS `clases` (
  `idClase` int NOT NULL AUTO_INCREMENT,
  `idDocente` int NOT NULL,
  `idEstudiante` int NOT NULL,
  `idAsignatura` int NOT NULL,
  `notaHabilitacion` decimal(10,2) DEFAULT NULL,
  `notaTutoria` decimal(10,2) DEFAULT NULL,
  `notaFinal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idClase`),
  KEY `idDocente` (`idDocente`),
  KEY `idEstudiante` (`idEstudiante`),
  KEY `idAsignatura` (`idAsignatura`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`idClase`, `idDocente`, `idEstudiante`, `idAsignatura`, `notaHabilitacion`, `notaTutoria`, `notaFinal`) VALUES
(135, 4, 10, 25, '0.00', '0.00', '4.00'),
(136, 4, 12, 28, '0.00', '0.00', '3.00'),
(137, 4, 5, 24, '0.00', '0.00', '0.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `IdGrupo` int NOT NULL AUTO_INCREMENT,
  `nombreGrupo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`IdGrupo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

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
  `idHorario` int NOT NULL AUTO_INCREMENT,
  `dia` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `horaInicio` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `horaFin` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`idHorario`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

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
  `idLog` int NOT NULL AUTO_INCREMENT,
  `fechaModificacion` varchar(10) NOT NULL,
  `horaModificacion` varchar(8) NOT NULL,
  `usuarioModificacion` varchar(20) NOT NULL,
  `tabla` varchar(40) NOT NULL,
  `idRegistro` int NOT NULL,
  `tipoModificacion` varchar(10) NOT NULL,
  PRIMARY KEY (`idLog`)
) ENGINE=MyISAM AUTO_INCREMENT=99 DEFAULT CHARSET=latin1;

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
(24, '26-03-2023', '03:11:22', '3', 'Ciclo', 0, 'Eliminar'),
(25, '26-03-2023', '03:20:23', '3', 'estudiante', 0, 'Actualizar'),
(26, '26-03-2023', '03:23:09', '3', 'estudiante', 5, 'Actualizar'),
(27, '26-03-2023', '03:24:00', '3', 'estudiante', 5, 'Actualizar'),
(28, '26-03-2023', '03:28:36', '3', 'estudiante', 39, 'registrar'),
(29, '26-03-2023', '03:33:51', '3', 'estudiante', 40, 'Registrar'),
(30, '26-03-2023', '03:34:46', '3', 'estudiante', 5, 'Actualizar'),
(31, '26-03-2023', '03:34:50', '3', 'estudiante', 5, 'Actualizar'),
(32, '26-03-2023', '03:34:52', '3', 'estudiante', 5, 'Actualizar'),
(33, '26-03-2023', '03:35:25', '3', 'estudiante', 39, 'Eliminar'),
(34, '26-03-2023', '03:40:03', '3', 'estudiante', 38, 'Eliminar'),
(35, '26-03-2023', '03:40:28', '3', 'estudiante', 37, 'Eliminar'),
(36, '26-03-2023', '03:41:29', '3', 'estudiante', 41, 'Registrar'),
(37, '26-03-2023', '03:49:04', '3', 'docente', 42, 'Registrar'),
(38, '26-03-2023', '03:49:44', '3', 'docente', 43, 'Registrar'),
(39, '26-03-2023', '03:51:40', '3', 'docente', 44, 'Registrar'),
(40, '26-03-2023', '03:56:52', '3', 'docente', 43, 'Eliminar'),
(41, '26-03-2023', '03:58:17', '3', 'estudiante', 5, 'Actualizar'),
(42, '26-03-2023', '03:58:24', '3', 'estudiante', 5, 'Actualizar'),
(43, '26-03-2023', '03:58:36', '3', 'estudiante', 5, 'Actualizar'),
(44, '26-03-2023', '04:11:57', '3', 'Ciclo', 4, 'Registrar'),
(45, '26-03-2023', '04:12:16', '3', 'Ciclo', 0, 'Actualizar'),
(46, '26-03-2023', '04:12:28', '3', 'Ciclo', 0, 'Eliminar'),
(47, '26-03-2023', '04:17:39', '3', 'Asignatura', 1, 'Actualizar'),
(48, '26-03-2023', '04:18:12', '3', 'Asignatura', 2, 'Actualizar'),
(49, '26-03-2023', '04:18:59', '3', 'Asignatura', 3, 'Actualizar'),
(50, '26-03-2023', '04:19:40', '3', 'Asignatura', 4, 'Actualizar'),
(51, '26-03-2023', '04:20:22', '3', 'Asignatura', 5, 'Actualizar'),
(52, '26-03-2023', '04:28:07', '3', 'Asignatura', 22, 'Registrar'),
(53, '26-03-2023', '04:28:20', '3', 'Asignatura', 22, 'Actualizar'),
(54, '26-03-2023', '04:28:29', '3', 'Asignatura', 0, 'Eliminar'),
(55, '03-04-2023', '09:55:24', '3', 'Ciclo', 0, 'Actualizar'),
(56, '05-04-2023', '04:28:55', '3', 'Ciclo', 0, 'Actualizar'),
(57, '05-04-2023', '04:28:55', '3', 'Ciclo', 0, 'Actualizar'),
(58, '07-04-2023', '12:35:17', '3', 'estudiante', 45, 'Registrar'),
(59, '07-04-2023', '12:43:57', '3', 'estudiante', 40, 'Actualizar'),
(60, '07-04-2023', '12:44:09', '3', 'estudiante', 36, 'Actualizar'),
(61, '07-04-2023', '12:44:25', '3', 'estudiante', 36, 'Actualizar'),
(62, '07-04-2023', '12:44:46', '3', 'estudiante', 35, 'Actualizar'),
(63, '07-04-2023', '12:45:31', '3', 'estudiante', 41, 'Actualizar'),
(64, '07-04-2023', '12:45:49', '3', 'estudiante', 41, 'Actualizar'),
(65, '07-04-2023', '07:10:36', '3', 'estudiante', 45, 'Actualizar'),
(66, '07-04-2023', '07:27:09', '3', 'estudiante', 33, 'Eliminar'),
(67, '07-04-2023', '09:40:45', '3', 'docente', 46, 'Registrar'),
(68, '07-04-2023', '09:48:12', '3', 'estudiante', 46, 'Actualizar'),
(69, '07-04-2023', '09:50:20', '3', 'estudiante', 46, 'Actualizar'),
(70, '07-04-2023', '09:52:47', '3', 'estudiante', 44, 'Actualizar'),
(71, '07-04-2023', '09:54:06', '3', 'docente', 44, 'Eliminar'),
(72, '07-04-2023', '11:23:53', '3', 'Asignatura', 23, 'Registrar'),
(73, '08-04-2023', '04:26:00', '3', 'Asignatura', 5, 'Actualizar'),
(74, '08-04-2023', '04:29:20', '3', 'Asignatura', 0, 'Eliminar'),
(75, '10-04-2023', '01:00:06', '3', 'Ciclo', 0, 'Eliminar'),
(76, '10-04-2023', '01:02:18', '3', 'Ciclo', 5, 'Registrar'),
(77, '10-04-2023', '01:04:03', '3', 'Ciclo', 0, 'Eliminar'),
(78, '10-04-2023', '01:57:52', '3', 'Ciclo', 6, 'Registrar'),
(79, '10-04-2023', '01:58:02', '3', 'Ciclo', 0, 'Eliminar'),
(80, '10-04-2023', '01:58:53', '3', 'Ciclo', 7, 'Registrar'),
(81, '10-04-2023', '01:58:57', '3', 'Ciclo', 0, 'Eliminar'),
(82, '10-04-2023', '02:18:20', '3', 'Ciclo', 8, 'Registrar'),
(83, '10-04-2023', '07:47:26', '3', 'Ciclo', 0, 'Actualizar'),
(84, '10-04-2023', '07:56:11', '3', 'Ciclo', 0, 'Eliminar'),
(85, '10-04-2023', '09:57:03', '3', 'estudiante', 47, 'Registrar'),
(86, '10-04-2023', '10:03:31', '3', 'docente', 48, 'Registrar'),
(87, '10-04-2023', '10:05:35', '3', 'docente', 49, 'Registrar'),
(88, '10-04-2023', '10:06:52', '3', 'docente', 50, 'Registrar'),
(89, '11-04-2023', '06:52:42', '3', 'Asignatura', 25, 'Registrar'),
(90, '11-04-2023', '07:14:37', '3', 'Asignatura', 26, 'Registrar'),
(91, '11-04-2023', '07:15:03', '3', 'Asignatura', 27, 'Registrar'),
(92, '17-04-2023', '09:16:05', '3', 'Asignatura', 28, 'Actualizar'),
(93, '20-04-2023', '08:42:41', '3', 'estudiante', 51, 'Registrar'),
(94, '20-04-2023', '08:43:44', '3', 'estudiante', 51, 'Actualizar'),
(95, '20-04-2023', '08:44:26', '3', 'estudiante', 51, 'Eliminar'),
(96, '20-04-2023', '08:50:19', '3', 'Asignatura', 29, 'Registrar'),
(97, '20-04-2023', '08:51:18', '3', 'Ciclo', 10, 'Registrar'),
(98, '20-04-2023', '08:51:48', '3', 'Asignatura', 30, 'Registrar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `fecha_hora_ingreso` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `idRol` int NOT NULL AUTO_INCREMENT,
  `nombreRol` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

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
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `tipoDocumento` varchar(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `numeroDocumento` bigint NOT NULL,
  `primerNombre` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `segundoNombre` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `primerApellido` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `segundoApellido` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `telefono` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `direccion` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `estado` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `codRol` int NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `codRol` (`codRol`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `tipoDocumento`, `numeroDocumento`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `telefono`, `direccion`, `email`, `password`, `estado`, `codRol`) VALUES
(3, 'CC', 100333, 'Alejandro', '', 'Sanchez', 'Martinez', '752411', 'calle 6 # 32', 'alejandro@gmail.com', '$2y$10$qf4htZpU9iJnnBsbvs2R.eTu0usniH4/2HgZlijpG9jmLli8FiDK6', 'activo', 1),
(4, 'TI', 192727222, 'Juan', 'Sebastian', 'Suarez', 'Flores', '744333', 'calle 23 -3 3', 'sebastian@gmail.com', '$2y$10$dGy6XVhDAZhSS2Gpf8h4K.bdnjjyXh06sMzMDC642y1FLrS4aGGGG', 'activo', 2),
(5, 'CC', 11064326711, 'Carlos', 'Felipe', 'Gomez', 'Nuñez', '3104846322', 'diagonal 34 # 2-15', 'felipe@gmail.com', 'felipe', 'activo', 3),
(7, 'CC', 1049654252, 'Jhonatan', 'Andres', 'Roncancio', 'Pinzon', '345345', '345345', 'jhoit@fsdf', '$2y$10$dGy6XVhDAZhSS2Gpf8h4K.bdnjjyXh06sMzMDC642y1FLrS4aGGGG', 'activo', 3),
(8, 'CC', 120093923, 'Orlando', '', 'Salcedo', 'Chavez', '3192622311', 'calle 34 # 2-65', 'orlandoChavez@gmail.com', '$2y$10$dGy6XVhDAZhSS2Gpf8h4K.bdnjjyXh06sMzMDC642y1FLrS4aGGGG', 'activo', 3),
(9, 'TI', 38833, 'Augusto', 'Fernando', 'Tamara', 'Gutierrez', '752411', 'diagonal 32 # 4 mzna 5 barrio la esperanza', 'augustoM@gmail.com', 'INSERT INTO `clases` (`idClase`, `idDocente`, `idEstudiante`, `idAsignatura`, `idHorario`, `notaHabilitacion`, `notaTutoria`, `notaFinal`) VALUES (NULL, \'\', \'\', \'\', \'\', NULL, NULL, NULL)', 'activo', 2),
(10, 'CC', 100333, 'Alejandro', '', 'Sanchez', 'Martinez', '752411', 'calle 6 # 32', 'alejandro@gmail.com', 'cami03s', 'activo', 3),
(12, 'TI', 2313434, 'Luis', 'Alejandro', 'Martinez', 'Hernandez', '3127191912', 'calle 34 b-c 34', 'luis@outlook.es', 'luis1234', 'activo', 3),
(14, 'CC', 913561, 'Pablo', NULL, 'Sexto', 'Hernandez', '7454533', NULL, 'pablo6@gmail.com', 'pablito23', 'activo', 3),
(35, 'TI', 456741, 'JUAN', 'ANDRES', 'DIAZ', 'HERNANDEZ', '74414142', 'calle 34', 'juanes@gmail.com', '$2y$10$sCaTSruAqGQuaXm7vF0UHOjI5QfTZWJIxljnuIchKaPYEjSJm1k8.', 'activo', 3),
(36, 'TI', 456741, 'FELIPE', '', 'GOMEZ', 'ALVAREZ', '3102418654', 'calle 34', 'juanes@gmail.com', '$2y$10$I35ZPWkfBb8IuOcDVcm.AO8x7dcAe/KW7dY1XO1aYa3mashFP9ece', 'activo', 3),
(40, 'CC', 1049656144, 'ERICK', '', 'HERNANDEZ', 'CHAVEZ', '7262521', 'calle 36 # 2-15 ', 'erick@gmail.com', '$2y$10$jYFo0Q2Q8nXf8xlwZ9sfyudlvesRPvAG9anC.wR5IFs7bnpEaOhJW', 'activo', 3),
(41, 'CC', 1049656144, 'JHONATAN', 'ANDRES', 'PINZÓN', '', '7206263', 'calle 32 c # 2- 54 Esmeralda', 'jh.23@asd.cas', '$2y$10$QbN9aIf6pT9HXvbG5CIsquF4DXjCI7z28S6jUgonq9tOtrah2WZX.', 'activo', 3),
(42, 'CC', 1049654252, 'jhonatan', '', 'andres', '', '11111', 'calle agl con algo', 'jhot.256@gmailcom', '2023', 'activo', 2),
(45, 'TI', 96253576134, 'JUAN', 'FELIPE', 'DIAZ', 'GOMéZ', '3162770022', 'calle 5 # 2-34 barrio la Maria', 'felipediaz8@gmail.com', '$2y$10$nYB//fwycs9GnfWMe17MPecLn83Qnn8.HpVYK1vaYSw8mZkCzQNMC', 'activo', 3),
(46, 'CC', 40243516, 'SEBASTIAN', '', 'CORTES', 'GUIO', '3201732120', 'MZNA 4 # 2 -64 MUISCAS', 'sebastianGuio@gmail.com', '$2y$10$U4NIcXB1zqA0mueyn.KxqO9813l2Xq6ejy9E8Yo6G/x4uJw4cJt6G', 'activo', 2),
(47, 'CC', 4040, 'ORLANDO', '', 'SALCEDO', '', '4', 'calle 4 # 36-12', '11@gmail.com', '$2y$10$Q3np8s9t5wpyCSpCTChUsOJ697qTUWrOPFba8D8wYmVPp2yiyW4gW', 'activo', 3),
(48, 'CC', 9032, '4040', '4040', '2323', '2323', '3434', 'calle 4 # 36-12', '11@gmail.com', '$2y$10$T0rkR.d56giOMNRw7B9vnef1Kt54i3QFsYxjXkllaU9C6ENC0EIGC', 'activo', 2),
(49, 'CC', 2323232323, 'JUAN', '', 'SALCEDO', 'DELGADILLO', '4040', 'calle 4 # 36-12', 'juanse@gmail.com', '$2y$10$afPhRZDQnhSGkYAJS9//L.gV9TytkLSVetFB1omWa45ngJIG77D2.', 'activo', 2),
(50, 'CC', 17253400, 'ANDY', 'ANDY', 'ANDY', 'ANDY', '319', 'calle calle', 'andy12@gmail.com', '$2y$10$gR0zREC3GD3iLKaMJstOv.Km.OnNjxf../qRO9ispGQc8lhDuK1bq', 'activo', 2);

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
  ADD CONSTRAINT `clases_ibfk_3` FOREIGN KEY (`idAsignatura`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`codRol`) REFERENCES `rol` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
