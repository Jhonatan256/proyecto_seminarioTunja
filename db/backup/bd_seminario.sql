-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-03-2023 a las 23:14:48
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
  `descripcion` varchar(450) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idLog` int(11) NOT NULL,
  `idCiclo` int(11) NOT NULL,
  PRIMARY KEY (`idAsignatura`),
  KEY `idLog` (`idLog`),
  KEY `idCiclo` (`idCiclo`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`idAsignatura`, `nombreAsignatura`, `intensidadHorariaSemanal`, `descripcion`, `idLog`, `idCiclo`) VALUES
(1, 'Kerigma Cristiano', 3, 'Introducción a la Biblia', 0, 1),
(2, 'Introducción a la Fe', 4, NULL, 0, 1),
(3, 'Gramática y Sintaxis', 2, NULL, 0, 1),
(4, 'Introducción a la filosofía', 4, NULL, 0, 1),
(5, 'Ingles I', 2, NULL, 0, 1),
(6, 'Taller de lecto escritura I', 6, NULL, 0, 1),
(7, 'Mundo Bíblico', 4, 'Historia y geografía', 0, 1),
(8, 'Epistemología', 3, NULL, 0, 1),
(9, 'Lógica clásica simbólica', 3, NULL, 0, 1),
(10, 'Metafisica', 4, NULL, 0, 1),
(11, 'Cosmotologia', 3, NULL, 0, 1),
(12, 'Historia de filosofía antigua', 4, NULL, 0, 1),
(13, 'Psicología Evolutiva', 3, NULL, 0, 1),
(14, 'Seminario Autores I', 2, NULL, 0, 1),
(15, 'Ingles III', 2, NULL, 0, 1),
(16, 'Claves Lectura Biblica', 4, 'aspectos Literarios y teologia', 0, 1),
(17, 'Hermenéutica', 2, NULL, 0, 1),
(18, 'Inglés IV', 2, NULL, 0, 1),
(19, 'teste', 3, 'dssdsd', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asig_carga_docente`
--

DROP TABLE IF EXISTS `asig_carga_docente`;
CREATE TABLE IF NOT EXISTS `asig_carga_docente` (
  `codUsuarioD` int(11) NOT NULL,
  `codAsignaturaD` int(11) NOT NULL,
  `codCicloD` int(11) NOT NULL,
  KEY `codUsuarioD` (`codUsuarioD`),
  KEY `codAsignaturaD` (`codAsignaturaD`),
  KEY `codCicloD` (`codCicloD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
CREATE TABLE IF NOT EXISTS `ciclo` (
  `idCiclo` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCiclo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `semestre` enum('1','2') COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinalizacion` date NOT NULL,
  `idLog` int(11) NOT NULL,
  `idGrupo` int(11) NOT NULL,
  PRIMARY KEY (`idCiclo`),
  KEY `idLog` (`idLog`),
  KEY `idGrupo` (`idGrupo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `ciclo`
--

INSERT INTO `ciclo` (`idCiclo`, `nombreCiclo`, `semestre`, `descripcion`, `fechaInicio`, `fechaFinalizacion`, `idLog`, `idGrupo`) VALUES
(1, 'Filosofico', '1', NULL, '2022-03-08', '2023-03-08', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

DROP TABLE IF EXISTS `clases`;
CREATE TABLE IF NOT EXISTS `clases` (
  `idClases` int(11) NOT NULL AUTO_INCREMENT,
  `idDocente` int(11) NOT NULL,
  `idEstudiante` int(11) NOT NULL,
  `idAsignatura` int(11) NOT NULL,
  `idHorario` int(11) NOT NULL,
  `notaHabilitacion` decimal(10,2) DEFAULT NULL,
  `notaTutoria` decimal(10,2) DEFAULT NULL,
  `notaFinal` decimal(10,2) DEFAULT NULL,
  `idLog` int(11) NOT NULL,
  PRIMARY KEY (`idClases`),
  KEY `idDocente` (`idDocente`),
  KEY `idEstudiante` (`idEstudiante`),
  KEY `idAsignatura` (`idAsignatura`),
  KEY `idLog` (`idLog`),
  KEY `idHorario` (`idHorario`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `IdGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `nombreGrupo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `idLog` int(11) NOT NULL,
  PRIMARY KEY (`IdGrupo`),
  KEY `idLog` (`idLog`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`IdGrupo`, `nombreGrupo`, `idLog`) VALUES
(1, 'I Filosofía', 0),
(2, 'II Filosofía', 0),
(3, 'III Filosofía', 0),
(4, 'I Teología', 0),
(5, 'II Teologia', 0),
(6, 'IV Teologia', 0),
(7, 'V Teologia', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

DROP TABLE IF EXISTS `horario`;
CREATE TABLE IF NOT EXISTS `horario` (
  `idHorario` int(11) NOT NULL AUTO_INCREMENT,
  `dia` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFin` time NOT NULL,
  `idLog` int(11) NOT NULL,
  PRIMARY KEY (`idHorario`),
  KEY `idLog` (`idLog`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

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
-- Estructura de tabla para la tabla `log_transacciones`
--

DROP TABLE IF EXISTS `log_transacciones`;
CREATE TABLE IF NOT EXISTS `log_transacciones` (
  `idLog` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_creacion` datetime NOT NULL,
  `usuario_creacion` varchar(20) NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `usuario_modificacion` varchar(20) NOT NULL,
  PRIMARY KEY (`idLog`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `log_transacciones`
--

INSERT INTO `log_transacciones` (`idLog`, `fecha_creacion`, `usuario_creacion`, `fecha_modificacion`, `usuario_modificacion`) VALUES
(1, '2023-03-25 23:05:43', 'admin', '2023-03-25 23:05:43', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `idRol` int(11) NOT NULL AUTO_INCREMENT,
  `nombreRol` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `idLog` int(11) NOT NULL,
  PRIMARY KEY (`idRol`),
  KEY `idLog` (`idLog`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `nombreRol`, `idLog`) VALUES
(1, 'Administrador', 0),
(2, 'Docente', 0),
(3, 'Estudiante', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `tipoDocumento` enum('TI','CC') COLLATE utf8_spanish2_ci NOT NULL,
  `numeroDocumento` bigint(20) NOT NULL,
  `primerNombre` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `segundoNombre` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `primerApellido` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `segundoApellido` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `email` varchar(254) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` enum('activo','inactivo') COLLATE utf8_spanish2_ci NOT NULL,
  `idRol` int(11) NOT NULL,
  `idLog` int(11) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `codRol` (`idRol`),
  KEY `idLog` (`idLog`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `tipoDocumento`, `numeroDocumento`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `telefono`, `direccion`, `email`, `password`, `estado`, `idRol`, `idLog`) VALUES
(3, 'CC', 100333, 'Alejandro', NULL, 'Sanchez', 'Martinez', '752411', 'calle 6 # 32', 'alejandro@gmail.com', '121212', 'activo', 1, 0),
(4, 'CC', 192727222, 'Sebastian', 'Camilo', 'Suarez', 'Flores', '744333', 'calle 23 -3 3', 'sebastian@gmail.com', 'sebas2023', 'activo', 2, 0),
(5, 'TI', 110643267, 'Carlos2', 'Felipe2', 'Gomez2', 'Nuñez', '3104846322', 'diagonal 34 # 2-15', 'felipe@gmail.com', 'felipe2200', 'activo', 3, 0),
(7, 'CC', 1049654252, 'Jhonatan', 'Andres', 'Roncancio', 'Pinzon', '345345', '345345', 'jhoit@fsdf', '123', 'activo', 3, 0),
(8, 'CC', 120093923, 'Orlando', '', 'Salcedo', 'Chavez', '3192622311', 'calle 34 # 2-65', 'orlandoChavez@gmail.com', '123456', 'activo', 3, 0),
(9, 'TI', 38833, 'Augusto', 'Fernando', 'Tamara', 'Gutierrez', '752411', 'diagonal 32 # 4 mzna 5 barrio la esperanza', 'augustoM@gmail.com', 'augusto2304', 'activo', 2, 0),
(10, 'TI', 100333, 'Camilo', NULL, 'Florez', 'Gomez', '313134076', NULL, 'cami03s@gmail.com', 'cami03s', 'activo', 3, 0),
(11, 'CC', 914252611, 'Juan', 'Sebastian', 'Cortez', 'Diaz', '3002313121', 'CALLE 34 # 2 C', 'sebasHj@hotmail.com', 'sebastian47', 'inactivo', 3, 0),
(12, 'TI', 2313434, 'Luis', 'Alejandro', 'Martinez', 'Hernandez', '3127191912', 'calle 34 b-c 34', 'luis@outlook.es', 'luis1234', 'activo', 3, 0),
(13, 'TI', 10238161, 'Fredy', '', 'Cervajal', 'Osorio', '752411', NULL, 'fredyC@gmail.com', 'fredy1234.', 'activo', 3, 0),
(14, 'CC', 913561, 'Pablo', NULL, 'Sexto', 'Hernandez', '7454533', NULL, 'pablo6@gmail.com', 'pablito23', 'activo', 3, 0);

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
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `rol` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
