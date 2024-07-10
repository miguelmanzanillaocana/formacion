-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: bmrsbrril9vizgfcolxg-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 09-07-2024 a las 12:56:29
-- Versión del servidor: 8.0.22-13
-- Versión de PHP: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bmrsbrril9vizgfcolxg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Aplicaciones`
--

CREATE TABLE `aplicaciones` (
  `ID_Aplicacion` int NOT NULL,
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Nombre_Aplicacion` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Nombre_Area` varchar(20) DEFAULT NULL,
  `Subarea` varchar(40) DEFAULT NULL,
  `Responsable_ID` int DEFAULT NULL,
  `Tecnologia` varchar(10) DEFAULT NULL,
  `Criticidad_ID` int DEFAULT NULL,
  `Vol_Evol_ID` int DEFAULT NULL,
  `Vol_Usu_ID` int DEFAULT NULL,
  `Tipo_ID` int DEFAULT NULL,
  `Tecnologia_Interfaz_ID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Aplicaciones`
--

INSERT INTO `Aplicaciones` (`ID_Aplicacion`, `Codigo_Aplicacion`, `Nombre_Aplicacion`, `Nombre_Area`, `Subarea`, `Responsable_ID`, `Tecnologia`, `Criticidad_ID`, `Vol_Evol_ID`, `Vol_Usu_ID`, `Tipo_ID`, `Tecnologia_Interfaz_ID`) VALUES
(1, 'ACBA', 'Procesos Batch de Accion Social', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 1, 3, 3, 1, 5),
(2, 'ACDC', 'Gestión de los Expedientes de Accion Socal', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 1, 1, 1, 4, 1),
(3, 'ACSP', 'Sistema de Presentación de Solicitudes de Accion Social', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 1, 3, 3, 3, 1),
(4, 'BASC', 'Consulta Bases de Cotización', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 3, 1),
(5, 'CEHA', '', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 5, 3, 3, 3, 1),
(6, 'CEJA', '', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 4, 3, 3, 3, 1),
(7, 'COIP', 'Consulta del IRPF Mensual - Pros@', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 2, 3, 3, 3, 1),
(8, 'COIR', 'Consuta del IRPF Mensual, Acumulado y Cálculo del Tipo de Retención en Nomina', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 3, 1),
(9, 'DAOL', 'Consulta de Datos Personales en la Intranet', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 3, 1),
(10, 'EMOP', 'Expedientes de Modificación de los Presupuestos de las Mutuas', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 3, 1),
(11, 'PCOT', 'Consulta Bases de Cotización', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 2, 3, 3, 3, 1),
(12, 'PLPE', 'Gestión Plan de Pensiones AGE', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 5, 3, 3, 3, 1),
(13, 'PMOP', 'Expedientes y Modificación de Presupuestos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 2, 3, 2, 3, 1),
(14, 'PPAG', 'Gestión y Emisioón Anual de Aportación al Plan de Pensiones de la AGE', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 2, 3, 1),
(15, 'PSOB', 'Consulta de Puestos Solicitados y Adjudicados en Concursos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 3, 3, 2, 3, 1),
(16, 'RENO', 'Consulta e Impresión de Nomina en el Entorno de Intranet', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 3, 1),
(17, 'RESP', 'Consulta de Recibos del Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 2, 3, 3, 3, 1),
(18, 'SAPO', 'Servicios Web Relativos a las Tablas de Apoyo y Nomenclátores del Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 1, 5),
(19, 'SCNF', 'Servicios Web para la Gestión del Acceso al Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 2, 3, 3, 1, 5),
(20, 'SDIE', 'Datos Relativos a la Gestión de Dietas', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 2, 3, 3, 3, 1),
(21, 'SEST', 'Estructura de los Centros de Destino de la SS', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 2, 3, 3, 1),
(22, 'SFUN', 'Servicios Web para la Gestión de los Datos Administrativos del Personal del Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 2, 3, 1, 5),
(23, 'SLET', 'Servicios Web Relativos a la Ocupación de los Servicios Jurídicos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 3, 1),
(24, 'SNOR', 'Gestión de Reglamentos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 6, NULL, NULL, NULL, 1),
(25, 'SOBA', 'Consulta por DNI de los Puestos Solicitados y Adjudicados en Concursos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 2, 3, 3, 3, 1),
(26, 'SPAD', 'Administración de Parametros SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 3, 3, 3, 3, 1),
(27, 'STEP', 'Solicitudes Telemáticas para RRHH con Registro', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Pros@', 6, NULL, NULL, NULL, 1),
(28, 'STRN', '', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 'Java', 5, 3, 3, 1, 5),
(29, 'ERCP', 'Envio y Recepción de Archivos RCP', 'Desarrollos Externos', 'Innovacion', 2, 'Java', 2, 3, 3, 2, 1),
(30, 'GFAD', 'Aplicación de Gestión y Administración de la Aplicación GFOR', 'Desarrollos Externos', 'Innovacion', 2, 'Java', 2, 3, 3, 2, 1),
(31, 'GFOR', 'Gestión de Cursos de Formación', 'Desarrollos Externos', 'Innovacion', 2, 'Java', 1, 1, 1, 2, 1),
(32, 'CASI', 'Carga de las Tablas de Siniestralidad (AT/EP) envidas por Mutuas, TGSS, INSS, ISM via IfiWeb', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 2, 3, 3, 3, 1),
(33, 'FRDG', '', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 4, 3, 3, 2, 1),
(34, 'GEBE', 'Gestión de Empresas Colaboradoras', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 3, 3, 3, 3, 1),
(35, 'NCEP', 'Comunicación y Gestión de los Partes de Enfermedades Profesionales dentro de la Seguridad Social', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 1, 2, 1, 5, 1),
(36, 'SCCD', 'Servicio de Comunicación con Ciudadanos', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 2, 3, 3, 3, 1),
(38, 'SCCI', 'Servicio de Comunicación con Instituciones', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 3, 3, 3, 3, 1),
(39, 'SCNO', 'SCCI Normativa', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 2, 3, 3, 3, 1),
(40, 'SCPA', 'SCCI Parlamentario', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 2, 3, 3, 3, 1),
(41, 'SCSE', 'Servicio Comunicación de la SESS', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 1, 3, 3, 3, 3),
(42, 'SCSG', 'SCCI Secretaria de Gabinete', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 2, 3, 3, 3, 1),
(43, 'SIPR', '', 'Desarrollos Externos', 'Presupuestos', 3, 'PL/SQL', 3, 3, 3, 3, 1),
(44, 'SPRS', '', 'Desarrollos Externos', 'Presupuestos', 3, 'Java', 7, 3, 3, 3, 1),
(45, 'TCON', 'Tramitación de Convenios del Gabinete de la SSP', 'Desarrollos Externos', 'Presupuestos', 3, 'Pros@', 2, 1, 3, 3, 1),
(46, 'CNLB', '', 'Desarrollos Externos', '', NULL, 'Pros@', 4, 3, NULL, NULL, NULL),
(47, 'COUP', 'Consulta de Objetivos, Unidades y Provincias', 'Desarrollos Externos', '', 4, 'Pros@', 3, 3, 4, 4, 1),
(48, 'GEPE', 'Gestión de Incidencias de Personal', 'Desarrollos Externos', '', 4, 'Pros@', 1, 2, 1, 3, 1),
(49, 'GSII', 'Gestión de Servicios de Intercambio de Información', 'Desarrollos Externos', '', 4, 'Pros@', 1, 3, 3, 3, 1),
(50, 'GSIN', 'Gestión de Servicios de Intercambio de Información V2', 'Desarrollos Externos', '', 4, 'Pros@', 2, 2, 2, 3, 1),
(51, 'NE01', '', 'Desarrollos Externos', '', NULL, 'Java', 4, 3, NULL, NULL, NULL),
(52, 'SALM', 'Salida de Materiales', 'Desarrollos Externos', '', 4, 'Java', 3, 3, 2, 3, 1),
(53, 'WE01', '', 'Desarrollos Externos', '', NULL, 'Java', 4, 3, NULL, NULL, NULL),
(54, 'WE02', '', 'Desarrollos Externos', '', NULL, 'Java', 4, 3, NULL, NULL, NULL),
(55, 'WE10', '', 'Desarrollos Externos', '', NULL, 'Java', 4, 3, NULL, NULL, NULL),
(56, 'WE11', 'Estructura de Personal', 'Desarrollos Externos', '', 4, 'Java', 2, 2, 1, 3, 1),
(57, 'WE12', 'Acceso a Edificio sin Tarjeta', 'Desarrollos Externos', '', 4, 'Java', 2, 3, 2, 3, 1),
(58, 'WE13', 'Visitas', 'Desarrollos Externos', '', 4, 'Java', 2, 2, 2, 3, 1),
(59, 'FSED', 'Formulario de Solicitud de Ejercicio de Derechos', 'Servicios Juridicos', '', 5, 'Java', 3, 3, 3, 2, 1),
(60, 'GCNT', 'Contencioso', 'Servicios Juridicos', '', 5, 'Pros@', 1, 1, 1, 2, 1),
(61, 'GCSL', 'Concursal', 'Servicios Juridicos', '', 5, 'Pros@', 1, 1, 1, 2, 1),
(62, 'GEAP', 'Abogados Apoderados', 'Servicios Juridicos', '', 5, 'Pros@', 2, 2, 2, 2, 1),
(63, 'GINF', 'Consultivo', 'Servicios Juridicos', '', 5, 'Pros@', 2, 2, 2, 2, 1),
(64, 'SEJU', 'Gestión de Expedietntes Servicio Juridico', 'Servicios Juridicos', '', 5, 'Pros@', 1, 1, 1, 2, 1),
(65, 'SJCO', 'Común', 'Servicios Juridicos', '', 5, 'Pros@', 1, 3, 3, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cer_Aplicacion`
--

CREATE TABLE `Cer_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Cer` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Comentarios_Aplicacion`
--

CREATE TABLE `Comentarios_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Comentario` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Comentarios_Situacion`
--

CREATE TABLE `Comentarios_Situacion` (
  `Situacion_Id` int NOT NULL,
  `ID_Comentario` int NOT NULL,
  `Comentario` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Comentarios_Situacion`
--

INSERT INTO `Comentarios_Situacion` (`Situacion_Id`, `ID_Comentario`, `Comentario`) VALUES
(1, 1, 'Código sin actualizar. Luis debe pasarlo'),
(1, 2, 'Se esta desplegando la versión 01.00.00.23.00'),
(4, 1, 'Migrada a Pros@. PCOT'),
(5, 1, 'Se va a decomisionar'),
(6, 1, 'Se va a decomisionar'),
(7, 1, 'Aplicación bloqueada por funcionaria'),
(7, 2, 'Problema con como mostrar los tooltip'),
(8, 1, 'En develop está la versión mavenizada'),
(8, 2, 'Se va a gestionar la subidaa PRO de la versión sin avenizar empezando por INT. Solicitada la subida a PRE 06.02.00.01.00'),
(9, 1, 'Se ha solicitado la actualización del enlace a la nueva versión'),
(10, 1, 'Migrada a Pros@. PMOP'),
(12, 1, 'Se va a decomisionar'),
(13, 1, 'Se ha solicitado la creación del enlace en INT y PRE para Internet'),
(14, 1, 'Se esta probando en INT para subir a PRE'),
(14, 2, 'Accede a SAPO, SCNF y SFUN'),
(16, 1, 'Migrada a Pros@. RESP'),
(17, 1, 'Se ha subido a INT por devops cambio en Origenes de Datos'),
(18, 1, 'Se esta desplegando la versión 03.02.00.02.00'),
(18, 2, 'En develop se ha subido esa misma versión pasada a UTF-8'),
(19, 1, 'Se esta desplegando la versión 03.00.00.01.04'),
(21, 1, 'La estan probando'),
(22, 1, 'Se esta desplegando la versión 03.00.00.02.00'),
(25, 1, 'Informes integrados dentro de la aplicación son XSL'),
(25, 2, 'Se esta desplengando la versión 06.04.15.09.00'),
(25, 3, 'La nueva versión está en UTF-8, para integrarla en GIT'),
(26, 1, 'La estan probando. Corrigiendo defectos'),
(28, 1, 'Se va a decomisionar'),
(32, 1, 'IFIW'),
(33, 1, 'De los funcionarios'),
(36, 1, 'Esta DGOSS-Presupuestos y nombre incorrecto'),
(37, 1, 'Sin actualizar la versión'),
(38, 1, 'Esta DGOSS-Presupuestos y nombre incorrectos'),
(39, 1, 'Estructura de carpetas incorrectas'),
(40, 1, 'Dependencia de librerias Apache-poi'),
(41, 1, 'Se ha creado la cobertura de pruebas'),
(43, 1, 'De los funcionarios'),
(44, 1, 'Se ha creado la cobertura de pruebas'),
(45, 1, 'Se va a decomisionar'),
(49, 1, 'Se ha creado la cobertura de pruebas'),
(50, 1, 'Se va a decomisionar'),
(52, 1, 'Se va a decomisionar'),
(53, 1, 'Se va a decomisionar'),
(54, 1, 'Se va a decomisionar'),
(58, 1, 'No tiene estructura correcta. Todo dentro de SJSS'),
(59, 1, 'No tiene estructura correcta. Todo dentro de SJSS'),
(60, 1, 'No tiene estructura correcta. Todo dentro de SJSS'),
(61, 1, 'No tiene estructura correcta. Todo dentro de SJSS'),
(62, 1, 'No tiene estructura correcta. Todo dentro de SJSS'),
(63, 1, 'No tiene estructura correcta. Todo dentro de SJSS'),
(64, 1, 'No tiene estructura correcta. Todo dentro de SJSS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Criticidad_Aplicacion`
--

CREATE TABLE `Criticidad_Aplicacion` (
  `ID_Criticidad` int NOT NULL,
  `Criticidad` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Criticidad_Aplicacion`
--

INSERT INTO `Criticidad_Aplicacion` (`ID_Criticidad`, `Criticidad`) VALUES
(1, 'Alta'),
(2, 'Media'),
(3, 'Baja'),
(4, 'N/A - Se va a decomisionar'),
(5, 'Se ha dado de baja'),
(6, 'En Desarrollo'),
(7, 'Es de los funcionarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Despliegue_Situacion`
--

CREATE TABLE `Despliegue_Situacion` (
  `Id_Despliegue` int NOT NULL,
  `Despliegue` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Despliegue_Situacion`
--

INSERT INTO `Despliegue_Situacion` (`Id_Despliegue`, `Despliegue`) VALUES
(1, 'PREPRODUCION'),
(2, 'PRODUCION'),
(3, 'INTEGRACION');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Devops_Aplicacion`
--

CREATE TABLE `Devops_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `DevOps` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Documentacion_Situacion`
--

CREATE TABLE `Documentacion_Situacion` (
  `Id_Documentacion` int NOT NULL,
  `Documentacion` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Documentacion_Situacion`
--

INSERT INTO `Documentacion_Situacion` (`Id_Documentacion`, `Documentacion`) VALUES
(1, 'DM12'),
(2, 'DM14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Informes_Situacion`
--

CREATE TABLE `Informes_Situacion` (
  `Id_Informes` int NOT NULL,
  `Informes` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Informes_Situacion`
--

INSERT INTO `Informes_Situacion` (`Id_Informes`, `Informes`) VALUES
(1, 'AIFO'),
(2, 'INTEGRADOS'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Infra_Aplicacion`
--

CREATE TABLE `Infra_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Infra` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Int_Aplicacion`
--

CREATE TABLE `Int_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Int_Aplicacion` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Maven_Situacion`
--

CREATE TABLE `Maven_Situacion` (
  `Id_Maven` int NOT NULL,
  `Maven` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Maven_Situacion`
--

INSERT INTO `Maven_Situacion` (`Id_Maven`, `Maven`) VALUES
(1, 'SI'),
(2, 'EN PROGRESO'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Plan_Pruebas_Situacion`
--

CREATE TABLE `Plan_Pruebas_Situacion` (
  `Id_Plan_Pruebas` int NOT NULL,
  `Plan_Pruebas` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Plan_Pruebas_Situacion`
--

INSERT INTO `Plan_Pruebas_Situacion` (`Id_Plan_Pruebas`, `Plan_Pruebas`) VALUES
(1, 'SI'),
(2, 'GIT'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pre_Aplicacion`
--

CREATE TABLE `Pre_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Pre` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pro_Aplicacion`
--

CREATE TABLE `Pro_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Pro` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Responsable_Aplicacion`
--

CREATE TABLE `Responsable_Aplicacion` (
  `ID_Responsable` int NOT NULL,
  `Responsable` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Responsable_Aplicacion`
--

INSERT INTO `Responsable_Aplicacion` (`ID_Responsable`, `Responsable`) VALUES
(1, 'Maria Begoña Viñas Sierra'),
(2, 'Virgilio Arias Clemente'),
(3, 'Maria Jose Delso Aldea'),
(4, 'Carlos Perez Bravo'),
(5, 'Ana Gonzalez Esteban');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Seguimiento_Aplicacion`
--

CREATE TABLE `Seguimiento_Aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Fecha` date NOT NULL,
  `Seguimiento` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Servicios_Terceros_Situacion`
--

CREATE TABLE `Servicios_Terceros_Situacion` (
  `Id_Servicios_Terceros` int NOT NULL,
  `Servicios_Terceros` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Servicios_Terceros_Situacion`
--

INSERT INTO `Servicios_Terceros_Situacion` (`Id_Servicios_Terceros`, `Servicios_Terceros`) VALUES
(1, 'SI'),
(2, 'IFIW'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Situacion_Aplicaciones`
--

CREATE TABLE `situacion_aplicaciones` (
  `ID_Situacion` int NOT NULL,
  `Codigo_Aplicacion` varchar(4) DEFAULT NULL,
  `Prosa` int DEFAULT NULL,
  `Grupo_GIT` int DEFAULT NULL,
  `Version_Master` varchar(15) DEFAULT NULL,
  `Version_Develop` varchar(15) DEFAULT NULL,
  `Actualizado_GIT` int DEFAULT NULL,
  `Version_Produccion` varchar(15) DEFAULT NULL,
  `Despliegue_ID` int DEFAULT NULL,
  `Version_WAS` int DEFAULT NULL,
  `Maven_Id` int DEFAULT NULL,
  `Documentacion_ID` int DEFAULT NULL,
  `Plan_Pruebas_ID` int DEFAULT NULL,
  `Testing_ID` int DEFAULT NULL,
  `Informes_ID` int DEFAULT NULL,
  `Servicios_Terceros_ID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Situacion_Aplicaciones`
--

INSERT INTO `Situacion_Aplicaciones` (`ID_Situacion`, `Codigo_Aplicacion`, `Prosa`, `Grupo_GIT`, `Version_Master`, `Version_Develop`, `Actualizado_GIT`, `Version_Producción`, `Despliegue_ID`, `Version_WAS`, `Maven_Id`, `Documentacion_ID`, `Plan_Pruebas_ID`, `Testing_ID`, `Informes_ID`, `Servicios_Terceros_ID`) VALUES
(1, 'ACBA', 0, 1, '01.00.00.17.00', NULL, 0, '01.00.00.22.00', 2, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'ACDC', 0, 1, '02.01.00.01.00', '02.02.00.02.00', 1, NULL, 3, 9, 2, NULL, NULL, NULL, NULL, NULL),
(3, 'ACSP', 1, 1, '01.01.00.02.00', '01.03.02.02.00', NULL, '01.03.02.02.00', NULL, 8, NULL, NULL, NULL, NULL, 1, NULL),
(4, 'BASC', 0, 0, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'CEHA', 1, 1, NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'CEJA', 0, 1, NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'COIP', 1, 1, '02.00.00.00.00', '02.00.00.00.00', 1, NULL, NULL, 9, NULL, 1, 3, 3, 3, 3),
(8, 'COIR', 0, 1, '06.01.06.03.00', '06.02.00.03', 1, '06.02.00.03', 2, 9, NULL, NULL, NULL, NULL, 2, NULL),
(9, 'DAOL', 0, 1, '07.00.03.00.00', '07.00.03.00.00', 0, '07.00.03.00.00', 2, 9, 2, 1, 1, NULL, 3, 3),
(10, 'EMOP', 0, 1, NULL, NULL, NULL, '02.02.02.00.00', NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'PCOT', 1, 1, '5.0.1', '5.0.2', 1, NULL, 2, 8, NULL, 1, NULL, NULL, 1, NULL),
(12, 'PLPE', 1, 1, NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'PMOP', 1, 1, '03.04.00.00.01', '4.1.1', 1, NULL, 1, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'PPAG', 0, 1, '07.00.00.00.01', '07.00.00.02.00', 1, NULL, 3, 9, 1, NULL, NULL, NULL, NULL, 1),
(15, 'PSOB', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'RENO', 0, 0, NULL, NULL, NULL, '09.01.01.00.00', NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'RESP', 1, 1, NULL, '1.3.3', 1, '01.02.02.00.00', 3, 8, NULL, NULL, NULL, NULL, NULL, 3),
(18, 'SAPO', 0, 1, '03.01.00.01.00', '03.03.00.00.00', 1, NULL, 1, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 'SCNF', 0, 1, '03.00.00.01.01', '03.00.00.01.04', 1, NULL, 1, 9, NULL, 1, NULL, NULL, NULL, 1),
(20, 'SDIE', 0, 1, '04.00.00.01.00', '04.00.00.01.00', 1, '04.00.00.01.00', 2, 9, NULL, 2, 2, NULL, 3, 3),
(21, 'SEST', 0, 1, NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 'SFUN', 0, 1, '03.00.00.02.00', '03.00.00.02.00', 1, NULL, 1, 9, NULL, 1, NULL, NULL, 3, 3),
(23, 'SLET', 0, 1, '07.00.00.03.00', '07.00.00.03.00', 1, '07.00.00.03.00', 1, 9, NULL, 2, 2, NULL, 3, 3),
(24, 'SNOR', 0, 1, NULL, NULL, NULL, NULL, NULL, 9, 2, NULL, NULL, NULL, NULL, NULL),
(25, 'SOBA', 0, 1, '06.04.15.06.00', '06.04.15.10.00', 1, '06.04.15.09.00', 2, 9, NULL, 1, NULL, NULL, 2, 3),
(26, 'SPAD', 0, 1, NULL, NULL, NULL, NULL, NULL, 9, 2, NULL, NULL, NULL, NULL, NULL),
(27, 'STEP', 1, 1, NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 'STRN', 0, 0, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 'ERCP', 0, 1, NULL, NULL, NULL, '03.02.00.00.00', NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'GFAD', 0, 1, NULL, NULL, NULL, '03.01.00.00.00', NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'GFOR', 0, 1, NULL, NULL, NULL, '02.55.00.17.00', NULL, 9, NULL, 1, NULL, NULL, NULL, 2),
(32, 'CASI', 1, 1, '2.8.1', '2.8.1', 1, '2.8.1', NULL, 9, 3, 1, NULL, NULL, 3, 1),
(33, 'FRDG', 1, 0, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 'GEBE', 1, 1, NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(35, 'NCEP', 1, 1, '6.4.0', '6.4.0', 1, '6.4.0', NULL, 9, NULL, 1, 1, 2, 1, 2),
(36, 'SCCD', 1, 0, '2.0.2', '2.0.2', 0, '2.0.2', NULL, 9, NULL, 2, NULL, NULL, 1, 3),
(37, 'SCCI', 1, 1, NULL, NULL, 1, '03.04.02.00.00', NULL, 8, NULL, 1, NULL, NULL, 1, 3),
(38, 'SCNO', 1, 0, 'Sin codigo', '1.5.0', 0, '01.09.00.00.00', NULL, 8, NULL, 2, NULL, NULL, 1, 3),
(39, 'SCPA', 1, 0, '1.26.3', '1.26.3', 1, '01.26.01.00.00', NULL, 8, NULL, 2, NULL, NULL, 1, 3),
(40, 'SCSE', 1, 1, '2.4.0', '2.4.0', 1, '2.4.0', NULL, 9, NULL, 1, NULL, NULL, 1, 3),
(41, 'SCSG', 1, 1, '2.1.0', '2.1.0', 1, '2.1.0', NULL, 9, NULL, 1, NULL, 2, 1, 3),
(42, 'SIPR', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 'SPRS', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 'TCON', 1, 1, '2.3.0', '2.3.0', 1, '2.3.0', NULL, 9, NULL, 2, NULL, 2, 1, 3),
(45, 'CNLB', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(46, 'COUP', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(47, 'GEPE', 1, 1, NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 'GSII', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(49, 'GSIN', 1, 1, '1.0.7', NULL, NULL, '1.0.7', NULL, 9, NULL, NULL, NULL, 2, NULL, NULL),
(50, 'NE01', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(51, 'SALM', 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 'WE01', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 'WE02', 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 'WE10', 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(55, 'WE11', 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(56, 'WE12', 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, NULL),
(57, 'WE13', 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(58, 'FSED', 0, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(59, 'GCNT', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(60, 'GCSL', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(61, 'GEAP', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 'GINF', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 'SEJU', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL),
(64, 'SJCO', 1, 1, NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tecnología_Interfaz_Aplicacion`
--

CREATE TABLE `Tecnología_Interfaz_Aplicacion` (
  `ID_Tecnologia_Interfaz` int NOT NULL,
  `Tecnologia_Interfaz` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Tecnología_Interfaz_Aplicacion`
--

INSERT INTO `Tecnología_Interfaz_Aplicacion` (`ID_Tecnologia_Interfaz`, `Tecnologia_Interfaz`) VALUES
(1, 'Web'),
(2, 'Móvil'),
(3, 'Web + Movil'),
(4, 'Escritorio'),
(5, 'Servicio'),
(6, 'WebService');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Testing_Situacion`
--

CREATE TABLE `Testing_Situacion` (
  `Id_Testing` int NOT NULL,
  `Testing` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Testing_Situacion`
--

INSERT INTO `Testing_Situacion` (`Id_Testing`, `Testing`) VALUES
(1, 'SI'),
(2, 'EN PROCESO'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tipo_Aplicacion`
--

CREATE TABLE `Tipo_Aplicacion` (
  `ID_Tipo` int NOT NULL,
  `Tipo` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Tipo_Aplicacion`
--

INSERT INTO `Tipo_Aplicacion` (`ID_Tipo`, `Tipo`) VALUES
(1, 'Webservice'),
(2, 'Internet'),
(3, 'Intranet'),
(4, 'Intranet(Kiosko)'),
(5, 'Internet e Intranet');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Volumen_Evolutivo_Aplicacion`
--

CREATE TABLE `Volumen_Evolutivo_Aplicacion` (
  `ID_Volumen_Evolutivo` int NOT NULL,
  `Volumen_Evolutivo` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Volumen_Evolutivo_Aplicacion`
--

INSERT INTO `Volumen_Evolutivo_Aplicacion` (`ID_Volumen_Evolutivo`, `Volumen_Evolutivo`) VALUES
(1, 'Alto'),
(2, 'Medio'),
(3, 'Bajo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Volumen_Usuarios_Aplicacion`
--

CREATE TABLE `Volumen_Usuarios_Aplicacion` (
  `ID_Volumen_Usuarios` int NOT NULL,
  `Volumen_Usuarios` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Volumen_Usuarios_Aplicacion`
--

INSERT INTO `Volumen_Usuarios_Aplicacion` (`ID_Volumen_Usuarios`, `Volumen_Usuarios`) VALUES
(1, 'Alto'),
(2, 'Medio'),
(3, 'Bajo'),
(4, 'Cero (No Producción)');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Aplicaciones`
--
ALTER TABLE `Aplicaciones`
  ADD PRIMARY KEY (`ID_Aplicacion`,`Codigo_Aplicacion`),
  ADD KEY `Responsable_ID` (`Responsable_ID`),
  ADD KEY `Criticidad_ID` (`Criticidad_ID`),
  ADD KEY `Vol_Evol_ID` (`Vol_Evol_ID`),
  ADD KEY `Vol_Usu_ID` (`Vol_Usu_ID`),
  ADD KEY `Tipo_ID` (`Tipo_ID`),
  ADD KEY `Tecnologia_Interfaz_ID` (`Tecnologia_Interfaz_ID`),
  ADD KEY `Codigo_Aplicacion` (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Cer_Aplicacion`
--
ALTER TABLE `Cer_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Comentarios_Aplicacion`
--
ALTER TABLE `Comentarios_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Comentarios_Situacion`
--
ALTER TABLE `Comentarios_Situacion`
  ADD PRIMARY KEY (`Situacion_Id`,`ID_Comentario`);

--
-- Indices de la tabla `Criticidad_Aplicacion`
--
ALTER TABLE `Criticidad_Aplicacion`
  ADD PRIMARY KEY (`ID_Criticidad`);

--
-- Indices de la tabla `Despliegue_Situacion`
--
ALTER TABLE `Despliegue_Situacion`
  ADD PRIMARY KEY (`Id_Despliegue`);

--
-- Indices de la tabla `Devops_Aplicacion`
--
ALTER TABLE `Devops_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Documentacion_Situacion`
--
ALTER TABLE `Documentacion_Situacion`
  ADD PRIMARY KEY (`Id_Documentacion`);

--
-- Indices de la tabla `Informes_Situacion`
--
ALTER TABLE `Informes_Situacion`
  ADD PRIMARY KEY (`Id_Informes`);

--
-- Indices de la tabla `Infra_Aplicacion`
--
ALTER TABLE `Infra_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Int_Aplicacion`
--
ALTER TABLE `Int_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Maven_Situacion`
--
ALTER TABLE `Maven_Situacion`
  ADD PRIMARY KEY (`Id_Maven`);

--
-- Indices de la tabla `Plan_Pruebas_Situacion`
--
ALTER TABLE `Plan_Pruebas_Situacion`
  ADD PRIMARY KEY (`Id_Plan_Pruebas`);

--
-- Indices de la tabla `Pre_Aplicacion`
--
ALTER TABLE `Pre_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Pro_Aplicacion`
--
ALTER TABLE `Pro_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `Responsable_Aplicacion`
--
ALTER TABLE `Responsable_Aplicacion`
  ADD PRIMARY KEY (`ID_Responsable`);

--
-- Indices de la tabla `Seguimiento_Aplicacion`
--
ALTER TABLE `Seguimiento_Aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`,`Fecha`);

--
-- Indices de la tabla `Servicios_Terceros_Situacion`
--
ALTER TABLE `Servicios_Terceros_Situacion`
  ADD PRIMARY KEY (`Id_Servicios_Terceros`);

--
-- Indices de la tabla `Situacion_Aplicaciones`
--
ALTER TABLE `Situacion_Aplicaciones`
  ADD PRIMARY KEY (`ID_Situacion`),
  ADD KEY `Codigo_Aplicacion` (`Codigo_Aplicacion`),
  ADD KEY `Despliegue_ID` (`Despliegue_ID`),
  ADD KEY `Maven_Id` (`Maven_Id`),
  ADD KEY `Documentacion_ID` (`Documentacion_ID`),
  ADD KEY `Plan_Pruebas_ID` (`Plan_Pruebas_ID`),
  ADD KEY `Testing_ID` (`Testing_ID`),
  ADD KEY `Informes_ID` (`Informes_ID`),
  ADD KEY `Servicios_Terceros_ID` (`Servicios_Terceros_ID`);

--
-- Indices de la tabla `Tecnología_Interfaz_Aplicacion`
--
ALTER TABLE `Tecnología_Interfaz_Aplicacion`
  ADD PRIMARY KEY (`ID_Tecnologia_Interfaz`);

--
-- Indices de la tabla `Testing_Situacion`
--
ALTER TABLE `Testing_Situacion`
  ADD PRIMARY KEY (`Id_Testing`);

--
-- Indices de la tabla `Tipo_Aplicacion`
--
ALTER TABLE `Tipo_Aplicacion`
  ADD PRIMARY KEY (`ID_Tipo`);

--
-- Indices de la tabla `Volumen_Evolutivo_Aplicacion`
--
ALTER TABLE `Volumen_Evolutivo_Aplicacion`
  ADD PRIMARY KEY (`ID_Volumen_Evolutivo`);

--
-- Indices de la tabla `Volumen_Usuarios_Aplicacion`
--
ALTER TABLE `Volumen_Usuarios_Aplicacion`
  ADD PRIMARY KEY (`ID_Volumen_Usuarios`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Aplicaciones`
--
ALTER TABLE `Aplicaciones`
  ADD CONSTRAINT `Aplicaciones_ibfk_1` FOREIGN KEY (`Responsable_ID`) REFERENCES `Responsable_Aplicacion` (`ID_Responsable`),
  ADD CONSTRAINT `Aplicaciones_ibfk_2` FOREIGN KEY (`Criticidad_ID`) REFERENCES `Criticidad_Aplicacion` (`ID_Criticidad`),
  ADD CONSTRAINT `Aplicaciones_ibfk_3` FOREIGN KEY (`Vol_Evol_ID`) REFERENCES `Volumen_Evolutivo_Aplicacion` (`ID_Volumen_Evolutivo`),
  ADD CONSTRAINT `Aplicaciones_ibfk_4` FOREIGN KEY (`Vol_Usu_ID`) REFERENCES `Volumen_Usuarios_Aplicacion` (`ID_Volumen_Usuarios`),
  ADD CONSTRAINT `Aplicaciones_ibfk_5` FOREIGN KEY (`Tipo_ID`) REFERENCES `Tipo_Aplicacion` (`ID_Tipo`),
  ADD CONSTRAINT `Aplicaciones_ibfk_6` FOREIGN KEY (`Tecnologia_Interfaz_ID`) REFERENCES `Tecnología_Interfaz_Aplicacion` (`ID_Tecnologia_Interfaz`);

--
-- Filtros para la tabla `Cer_Aplicacion`
--
ALTER TABLE `Cer_Aplicacion`
  ADD CONSTRAINT `Cer_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Comentarios_Aplicacion`
--
ALTER TABLE `Comentarios_Aplicacion`
  ADD CONSTRAINT `Comentarios_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Comentarios_Situacion`
--
ALTER TABLE `Comentarios_Situacion`
  ADD CONSTRAINT `Comentarios_Situacion_ibfk_1` FOREIGN KEY (`Situacion_Id`) REFERENCES `Situacion_Aplicaciones` (`ID_Situacion`);

--
-- Filtros para la tabla `Devops_Aplicacion`
--
ALTER TABLE `Devops_Aplicacion`
  ADD CONSTRAINT `Devops_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Infra_Aplicacion`
--
ALTER TABLE `Infra_Aplicacion`
  ADD CONSTRAINT `Infra_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Int_Aplicacion`
--
ALTER TABLE `Int_Aplicacion`
  ADD CONSTRAINT `Int_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Pre_Aplicacion`
--
ALTER TABLE `Pre_Aplicacion`
  ADD CONSTRAINT `Pre_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Pro_Aplicacion`
--
ALTER TABLE `Pro_Aplicacion`
  ADD CONSTRAINT `Pro_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Seguimiento_Aplicacion`
--
ALTER TABLE `Seguimiento_Aplicacion`
  ADD CONSTRAINT `Seguimiento_Aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `Situacion_Aplicaciones`
--
ALTER TABLE `Situacion_Aplicaciones`
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `Aplicaciones` (`Codigo_Aplicacion`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_2` FOREIGN KEY (`Despliegue_ID`) REFERENCES `Despliegue_Situacion` (`Id_Despliegue`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_3` FOREIGN KEY (`Maven_Id`) REFERENCES `Maven_Situacion` (`Id_Maven`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_4` FOREIGN KEY (`Documentacion_ID`) REFERENCES `Documentacion_Situacion` (`Id_Documentacion`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_5` FOREIGN KEY (`Plan_Pruebas_ID`) REFERENCES `Plan_Pruebas_Situacion` (`Id_Plan_Pruebas`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_6` FOREIGN KEY (`Testing_ID`) REFERENCES `Testing_Situacion` (`Id_Testing`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_7` FOREIGN KEY (`Informes_ID`) REFERENCES `Informes_Situacion` (`Id_Informes`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_8` FOREIGN KEY (`Servicios_Terceros_ID`) REFERENCES `Servicios_Terceros_Situacion` (`Id_Servicios_Terceros`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
