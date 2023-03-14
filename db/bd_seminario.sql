-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 14-03-2023 a las 01:28:43
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
-- Base de datos: `bd_seminario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

DROP TABLE IF EXISTS `asignatura`;
CREATE TABLE IF NOT EXISTS `asignatura` (
  `idAsignatura` int NOT NULL AUTO_INCREMENT,
  `nombreAsignatura` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `intensidadHorariaSemanal` int NOT NULL,
  `descripcion` varchar(450) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `cod_Grupo` int NOT NULL,
  PRIMARY KEY (`idAsignatura`),
  KEY `cod_Grupo` (`cod_Grupo`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`idAsignatura`, `nombreAsignatura`, `intensidadHorariaSemanal`, `descripcion`, `cod_Grupo`) VALUES
(1, 'Kerigma Cristiano', 3, 'Introducción a la Biblia', 1),
(2, 'Introducción a la Fe', 4, NULL, 1),
(3, 'Gramática y Sintaxis', 2, NULL, 1),
(4, 'Introducción a la filosofía', 4, NULL, 1),
(5, 'Ingles I', 2, NULL, 1),
(6, 'Taller de lecto escritura I', 6, NULL, 1),
(7, 'Mundo Bíblico', 4, 'Historia y geografía', 1),
(8, 'Epistemología', 3, NULL, 2),
(9, 'Lógica clásica simbólica', 3, NULL, 2),
(10, 'Metafisica', 4, NULL, 2),
(11, 'Cosmotologia', 3, NULL, 2),
(12, 'Historia de filosofía antigua', 4, NULL, 2),
(13, 'Psicología Evolutiva', 3, NULL, 2),
(14, 'Seminario Autores I', 2, NULL, 2),
(15, 'Ingles III', 2, NULL, 2),
(16, 'Claves Lectura Biblica', 4, 'aspectos Literarios y teologia', 2),
(17, 'Hermenéutica', 2, NULL, 2),
(18, 'Inglés IV', 2, NULL, 2),
(19, 'teste', 3, 'dssdsd', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asig_carga_docente`
--

DROP TABLE IF EXISTS `asig_carga_docente`;
CREATE TABLE IF NOT EXISTS `asig_carga_docente` (
  `codUsuarioD` int NOT NULL,
  `codAsignaturaD` int NOT NULL,
  `codCicloD` int NOT NULL,
  KEY `codUsuarioD` (`codUsuarioD`),
  KEY `codAsignaturaD` (`codAsignaturaD`),
  KEY `codCicloD` (`codCicloD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

DROP TABLE IF EXISTS `calificaciones`;
CREATE TABLE IF NOT EXISTS `calificaciones` (
  `idCalificaciones` int NOT NULL AUTO_INCREMENT,
  `notaHabilitacion` decimal(10,2) DEFAULT NULL,
  `notaTutoria` decimal(10,2) DEFAULT NULL,
  `notaFinal` decimal(10,2) DEFAULT NULL,
  `codAsignatura` int NOT NULL,
  `codUsuario` int NOT NULL,
  `codCiclo` int NOT NULL,
  PRIMARY KEY (`idCalificaciones`),
  KEY `codAsignatura` (`codAsignatura`),
  KEY `codUsuario` (`codUsuario`),
  KEY `codCiclo` (`codCiclo`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`idCalificaciones`, `notaHabilitacion`, `notaTutoria`, `notaFinal`, `codAsignatura`, `codUsuario`, `codCiclo`) VALUES
(124, '0.00', '0.00', '4.80', 11, 3, 1),
(125, '0.00', '0.00', '3.80', 3, 4, 1),
(126, '0.00', '0.00', '4.50', 5, 10, 1),
(127, '0.00', '0.00', '4.00', 12, 5, 2),
(128, '0.00', '3.80', '3.00', 7, 8, 1),
(129, '0.00', '0.00', '3.80', 6, 9, 2),
(130, '3.50', '4.00', '4.00', 16, 3, 2),
(131, '0.00', '4.00', '4.00', 8, 14, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
CREATE TABLE IF NOT EXISTS `ciclo` (
  `idCiclo` int NOT NULL AUTO_INCREMENT,
  `nombreCiclo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `semestre` enum('1','2') CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `descripcion` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinalizacion` date NOT NULL,
  PRIMARY KEY (`idCiclo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `ciclo`
--

INSERT INTO `ciclo` (`idCiclo`, `nombreCiclo`, `semestre`, `descripcion`, `fechaInicio`, `fechaFinalizacion`) VALUES
(1, 'Teologico', '1', 'Teológico', '2022-02-01', '2022-07-29'),
(2, 'Filosofica', '2', 'Filosófica', '2022-03-07', '2022-09-30');

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
  `horaInicio` time NOT NULL,
  `horaFin` time NOT NULL,
  `codCiclo` int NOT NULL,
  `codAsignaturaH` int NOT NULL,
  PRIMARY KEY (`idHorario`),
  KEY `codAsignatura` (`codCiclo`),
  KEY `codAsignaturaH` (`codAsignaturaH`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`idHorario`, `dia`, `horaInicio`, `horaFin`, `codCiclo`, `codAsignaturaH`) VALUES
(2, 'Lunes', '08:30:00', '09:15:00', 1, 6),
(3, 'Lunes', '09:15:00', '10:00:00', 1, 6),
(4, 'Lunes', '10:00:00', '10:45:00', 1, 3),
(5, 'Lunes', '11:00:00', '11:45:00', 2, 2),
(6, 'Lunes', '00:00:02', '03:00:00', 2, 5),
(7, 'Martes', '08:30:00', '09:15:00', 2, 3),
(8, 'Martes', '10:00:00', '10:45:00', 2, 1),
(9, 'Miercoles', '07:00:00', '07:45:00', 2, 2),
(10, 'Jueves', '08:30:00', '09:15:00', 1, 1),
(11, 'Viernes', '09:15:00', '10:00:00', 2, 7),
(12, 'Jueves', '10:00:00', '10:45:00', 1, 9);

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
  `tipoDocumento` enum('TI','CC') CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `numeroDocumento` bigint NOT NULL,
  `primerNombre` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `segundoNombre` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `primerApellido` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `segundoApellido` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `telefono` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `direccion` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `email` varchar(254) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `estado` enum('activo','inactivo') CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `codRol` int NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `codRol` (`codRol`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `tipoDocumento`, `numeroDocumento`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `telefono`, `direccion`, `email`, `password`, `estado`, `codRol`) VALUES
(3, 'CC', 100333, 'Alejandro', NULL, 'Sanchez', 'Martinez', '752411', 'calle 6 # 32', 'alejandro@gmail.com', '121212', 'activo', 1),
(4, 'CC', 192727222, 'Sebastian', 'Camilo', 'Suarez', 'Flores', '744333', 'calle 23 -3 3', 'sebastian@gmail.com', 'sebas2023', 'activo', 2),
(5, 'TI', 110643267, 'Carlos2', 'Felipe2', 'Gomez2', 'Nuñez', '3104846322', 'diagonal 34 # 2-15', 'felipe@gmail.com', 'felipe2200', 'activo', 3),
(7, 'CC', 1049654252, 'Jhonatan', 'Andres', 'Roncancio', 'Pinzon', '345345', '345345', 'jhoit@fsdf', '123', 'activo', 3),
(8, 'CC', 120093923, 'Orlando', '', 'Salcedo', 'Chavez', '3192622311', 'calle 34 # 2-65', 'orlandoChavez@gmail.com', '123456', 'activo', 3),
(9, 'TI', 38833, 'Augusto', 'Fernando', 'Tamara', 'Gutierrez', '752411', 'diagonal 32 # 4 mzna 5 barrio la esperanza', 'augustoM@gmail.com', 'augusto2304', 'activo', 2),
(10, 'TI', 100333, 'Camilo', NULL, 'Florez', 'Gomez', '313134076', NULL, 'cami03s@gmail.com', 'cami03s', 'activo', 3),
(11, 'CC', 914252611, 'Juan', 'Sebastian', 'Cortez', 'Diaz', '3002313121', 'CALLE 34 # 2 C', 'sebasHj@hotmail.com', 'sebastian47', 'inactivo', 3),
(12, 'TI', 2313434, 'Luis', 'Alejandro', 'Martinez', 'Hernandez', '3127191912', 'calle 34 b-c 34', 'luis@outlook.es', 'luis1234', 'activo', 3),
(13, 'TI', 10238161, 'Fredy', '', 'Cervajal', 'Osorio', '752411', NULL, 'fredyC@gmail.com', 'fredy1234.', 'activo', 3),
(14, 'CC', 913561, 'Pablo', NULL, 'Sexto', 'Hernandez', '7454533', NULL, 'pablo6@gmail.com', 'pablito23', 'activo', 3);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD CONSTRAINT `asignatura_ibfk_1` FOREIGN KEY (`cod_Grupo`) REFERENCES `grupo` (`IdGrupo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `asig_carga_docente`
--
ALTER TABLE `asig_carga_docente`
  ADD CONSTRAINT `asig_carga_docente_ibfk_1` FOREIGN KEY (`codUsuarioD`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asig_carga_docente_ibfk_3` FOREIGN KEY (`codCicloD`) REFERENCES `ciclo` (`idCiclo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asig_carga_docente_ibfk_4` FOREIGN KEY (`codAsignaturaD`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`codUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `calificaciones_ibfk_3` FOREIGN KEY (`codCiclo`) REFERENCES `ciclo` (`idCiclo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `calificaciones_ibfk_4` FOREIGN KEY (`codAsignatura`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `horario`
--
ALTER TABLE `horario`
  ADD CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`codCiclo`) REFERENCES `ciclo` (`idCiclo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `horario_ibfk_2` FOREIGN KEY (`codAsignaturaH`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`codRol`) REFERENCES `rol` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
