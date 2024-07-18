-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: blnux86e0sozweghjptg-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 18-07-2024 a las 12:07:59
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
-- Base de datos: `blnux86e0sozweghjptg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aplicaciones`
--

CREATE TABLE `aplicaciones` (
  `ID_Aplicacion` int NOT NULL,
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Nombre_Aplicacion` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Nombre_Area` varchar(20) DEFAULT NULL,
  `Subarea` varchar(40) DEFAULT NULL,
  `Responsable_ID` int DEFAULT NULL,
  `Tecnologia_ID` int DEFAULT NULL,
  `Criticidad_ID` int DEFAULT NULL,
  `Vol_Evol_ID` int DEFAULT NULL,
  `Vol_Usu_ID` int DEFAULT NULL,
  `Tipo_ID` int DEFAULT NULL,
  `Tecnologia_Interfaz_ID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `aplicaciones`
--

INSERT INTO `aplicaciones` (`ID_Aplicacion`, `Codigo_Aplicacion`, `Nombre_Aplicacion`, `Nombre_Area`, `Subarea`, `Responsable_ID`, `Tecnologia_ID`, `Criticidad_ID`, `Vol_Evol_ID`, `Vol_Usu_ID`, `Tipo_ID`, `Tecnologia_Interfaz_ID`) VALUES
(1, 'ACBA', 'Procesos Batch de Accion Social', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 1, 3, 3, 1, 5),
(2, 'ACDC', 'Gestión de los Expedientes de Accion Socal', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 1, 1, 1, 4, 1),
(3, 'ACSP', 'Sistema de Presentación de Solicitudes de Accion Social', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 1, 3, 3, 3, 1),
(4, 'BASC', 'Consulta Bases de Cotización', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 3, 1),
(5, 'CEHA', '', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 5, 3, 3, 3, 1),
(6, 'CEJA', '', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 4, 3, 3, 3, 1),
(7, 'COIP', 'Consulta del IRPF Mensual - 2', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 2, 3, 3, 3, 1),
(8, 'COIR', 'Consuta del IRPF Mensual, Acumulado y Cálculo del Tipo de Retención en Nomina', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 3, 1),
(9, 'DAOL', 'Consulta de Datos Personales en la Intranet', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 3, 1),
(10, 'EMOP', 'Expedientes de Modificación de los Presupuestos de las Mutuas', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 3, 1),
(11, 'PCOT', 'Consulta Bases de Cotización', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 2, 3, 3, 3, 1),
(12, 'PLPE', 'Gestión Plan de Pensiones AGE', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 5, 3, 3, 3, 1),
(13, 'PMOP', 'Expedientes y Modificación de Presupuestos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 2, 3, 2, 3, 1),
(14, 'PPAG', 'Gestión y Emisioón Anual de Aportación al Plan de Pensiones de la AGE', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 2, 3, 1),
(15, 'PSOB', 'Consulta de Puestos Solicitados y Adjudicados en Concursos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 3, 3, 2, 3, 1),
(16, 'RENO', 'Consulta e Impresión de Nomina en el Entorno de Intranet', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 3, 1),
(17, 'RESP', 'Consulta de Recibos del Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 2, 3, 3, 3, 1),
(18, 'SAPO', 'Servicios Web Relativos a las Tablas de Apoyo y Nomenclátores del Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 1, 5),
(19, 'SCNF', 'Servicios Web para la Gestión del Acceso al Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 2, 3, 3, 1, 5),
(20, 'SDIE', 'Datos Relativos a la Gestión de Dietas', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 2, 3, 3, 3, 1),
(21, 'SEST', 'Estructura de los Centros de Destino de la SS', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 2, 3, 3, 1),
(22, 'SFUN', 'Servicios Web para la Gestión de los Datos Administrativos del Personal del Sistema SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 2, 3, 1, 5),
(23, 'SLET', 'Servicios Web Relativos a la Ocupación de los Servicios Jurídicos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 3, 1),
(24, 'SNOR', 'Gestión de Reglamentos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 6, 0, 0, 0, 1),
(25, 'SOBA', 'Consulta por DNI de los Puestos Solicitados y Adjudicados en Concursos', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 2, 3, 3, 3, 1),
(26, 'SPAD', 'Administración de Parametros SIP', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 3, 3, 3, 3, 1),
(27, 'STEP', 'Solicitudes Telemáticas para RRHH con Registro', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 2, 6, 0, 0, 0, 1),
(28, 'STRN', '', 'Desarrollos Externos', 'Cordinacion y desarrollo de RRHH', 1, 1, 5, 3, 3, 1, 5),
(29, 'ERCP', 'Envio y Recepción de Archivos RCP', 'Desarrollos Externos', 'Innovacion', 2, 1, 2, 3, 3, 2, 1),
(30, 'GFAD', 'Aplicación de Gestión y Administración de la Aplicación GFOR', 'Desarrollos Externos', 'Innovacion', 2, 1, 2, 3, 3, 2, 1),
(31, 'GFOR', 'Gestión de Cursos de Formación', 'Desarrollos Externos', 'Innovacion', 2, 1, 1, 1, 1, 2, 1),
(32, 'CASI', 'Carga de las Tablas de Siniestralidad (AT/EP) envidas por Mutuas, TGSS, INSS, ISM via IfiWeb', 'Desarrollos Externos', 'Presupuestos', 3, 2, 2, 3, 3, 3, 1),
(33, 'FRDG', '', 'Desarrollos Externos', 'Presupuestos', 3, 2, 4, 3, 3, 2, 1),
(34, 'GEBE', 'Gestión de Empresas Colaboradoras', 'Desarrollos Externos', 'Presupuestos', 3, 2, 3, 3, 3, 3, 1),
(35, 'NCEP', 'Comunicación y Gestión de los Partes de Enfermedades Profesionales dentro de la Seguridad Social', 'Desarrollos Externos', 'Presupuestos', 3, 2, 1, 2, 1, 5, 1),
(36, 'SCCD', 'Servicio de Comunicación con Ciudadanos', 'Desarrollos Externos', 'Presupuestos', 3, 2, 2, 3, 3, 3, 1),
(37, 'SCCI', 'Servicio de Comunicación con Instituciones', 'Desarrollos Externos', 'Presupuestos', 3, 2, 3, 3, 3, 3, 1),
(38, 'SCNO', 'SCCI Normativa', 'Desarrollos Externos', 'Presupuestos', 3, 2, 2, 3, 3, 3, 1),
(39, 'SCPA', 'SCCI Parlamentario', 'Desarrollos Externos', 'Presupuestos', 3, 2, 2, 3, 3, 3, 1),
(40, 'SCSE', 'Servicio Comunicación de la SESS', 'Desarrollos Externos', 'Presupuestos', 3, 2, 1, 3, 3, 3, 3),
(41, 'SCSG', 'SCCI Secretaria de Gabinete', 'Desarrollos Externos', 'Presupuestos', 3, 2, 2, 3, 3, 3, 1),
(42, 'SIPR', '', 'Desarrollos Externos', 'Presupuestos', 3, 3, 3, 3, 3, 3, 1),
(43, 'SPRS', '', 'Desarrollos Externos', 'Presupuestos', 3, 1, 7, 3, 3, 3, 1),
(44, 'TCON', 'Tramitación de Convenios del Gabinete de la SSP', 'Desarrollos Externos', 'Presupuestos', 3, 2, 2, 1, 3, 3, 1),
(45, 'CNLB', '', 'Desarrollos Externos', '', 0, 2, 4, 3, 0, 0, 0),
(46, 'COUP', 'Consulta de Objetivos, Unidades y Provincias', 'Desarrollos Externos', '', 4, 2, 3, 3, 4, 4, 1),
(47, 'GEPE', 'Gestión de Incidencias de Personal', 'Desarrollos Externos', '', 4, 2, 1, 2, 1, 3, 1),
(48, 'GSII', 'Gestión de Servicios de Intercambio de Información', 'Desarrollos Externos', '', 4, 2, 1, 3, 3, 3, 1),
(49, 'GSIN', 'Gestión de Servicios de Intercambio de Información V2', 'Desarrollos Externos', '', 4, 2, 2, 2, 2, 3, 1),
(50, 'NE01', '', 'Desarrollos Externos', '', 0, 1, 4, 3, 0, 0, 0),
(51, 'SALM', 'Salida de Materiales', 'Desarrollos Externos', '', 4, 1, 3, 3, 2, 3, 1),
(52, 'WE01', '', 'Desarrollos Externos', '', 0, 1, 4, 3, 0, 0, 0),
(53, 'WE02', '', 'Desarrollos Externos', '', 0, 1, 4, 3, 0, 0, 0),
(54, 'WE10', '', 'Desarrollos Externos', '', 0, 1, 4, 3, 0, 0, 0),
(55, 'WE11', 'Estructura de Personal', 'Desarrollos Externos', '', 4, 1, 2, 2, 1, 3, 1),
(56, 'WE12', 'Acceso a Edificio sin Tarjeta', 'Desarrollos Externos', '', 4, 1, 2, 3, 2, 3, 1),
(57, 'WE13', 'Visitas', 'Desarrollos Externos', '', 4, 1, 2, 2, 2, 3, 1),
(58, 'FSED', 'Formulario de Solicitud de Ejercicio de Derechos', 'Servicios Juridicos', '', 5, 1, 3, 3, 3, 2, 1),
(59, 'GCNT', 'Contencioso', 'Servicios Juridicos', '', 5, 2, 1, 1, 1, 2, 1),
(60, 'GCSL', 'Concursal', 'Servicios Juridicos', '', 5, 2, 1, 1, 1, 2, 1),
(61, 'GEAP', 'Abogados Apoderados', 'Servicios Juridicos', '', 5, 2, 2, 2, 2, 2, 1),
(62, 'GINF', 'Consultivo', 'Servicios Juridicos', '', 5, 2, 2, 2, 2, 2, 1),
(63, 'SEJU', 'Gestión de Expedietntes Servicio Juridico', 'Servicios Juridicos', '', 5, 2, 1, 1, 1, 2, 1),
(64, 'SJCO', 'Común', 'Servicios Juridicos', '', 5, 2, 1, 3, 3, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cer_aplicacion`
--

CREATE TABLE `cer_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Cer` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios_aplicacion`
--

CREATE TABLE `comentarios_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Comentario` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios_situacion`
--

CREATE TABLE `comentarios_situacion` (
  `Situacion_Id` int NOT NULL,
  `ID_Comentario` int NOT NULL,
  `Comentario` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios_situacion`
--

INSERT INTO `comentarios_situacion` (`Situacion_Id`, `ID_Comentario`, `Comentario`) VALUES
(4, 1, 'Migrada a 2. PCOT'),
(5, 1, 'Se va a decomisionar'),
(6, 1, 'Se va a decomisionar'),
(7, 1, 'Aplicación bloqueada por funcionaria'),
(7, 2, 'Problema con como mostrar los tooltip'),
(8, 1, 'En develop está la versión mavenizada'),
(8, 2, 'Se va a gestionar la subidaa PRO de la versión sin avenizar empezando por INT. Solicitada la subida a PRE 06.02.00.01.00'),
(9, 1, 'Se ha solicitado la actualización del enlace a la nueva versión'),
(10, 1, 'Migrada a 2. PMOP'),
(12, 1, 'Se va a decomisionar'),
(13, 1, 'Se ha solicitado la creación del enlace en INT y PRE para Internet'),
(14, 1, 'Se esta probando en INT para subir a PRE'),
(14, 2, 'Accede a SAPO, SCNF y SFUN'),
(16, 1, 'Migrada a 2. RESP'),
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
-- Estructura de tabla para la tabla `criticidad_aplicacion`
--

CREATE TABLE `criticidad_aplicacion` (
  `ID_Criticidad` int NOT NULL,
  `Criticidad` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `criticidad_aplicacion`
--

INSERT INTO `criticidad_aplicacion` (`ID_Criticidad`, `Criticidad`) VALUES
(1, 'Alta'),
(2, 'Media'),
(3, 'Baja'),
(4, 'N/A - Se va a decomisionar'),
(5, 'Se ha dado de baja'),
(6, 'En Desarrollo'),
(7, 'Es de los funcionarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `despliegue_situacion`
--

CREATE TABLE `despliegue_situacion` (
  `Id_Despliegue` int NOT NULL,
  `Despliegue` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `despliegue_situacion`
--

INSERT INTO `despliegue_situacion` (`Id_Despliegue`, `Despliegue`) VALUES
(0, ''),
(1, 'PREPRODUCION'),
(2, 'PRODUCION'),
(3, 'INTEGRACION');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devops_aplicacion`
--

CREATE TABLE `devops_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `DevOps` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentacion_situacion`
--

CREATE TABLE `documentacion_situacion` (
  `Id_Documentacion` int NOT NULL,
  `Documentacion` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `documentacion_situacion`
--

INSERT INTO `documentacion_situacion` (`Id_Documentacion`, `Documentacion`) VALUES
(0, ''),
(1, 'DM12'),
(2, 'DM14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informes_situacion`
--

CREATE TABLE `informes_situacion` (
  `Id_Informes` int NOT NULL,
  `Informes` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `informes_situacion`
--

INSERT INTO `informes_situacion` (`Id_Informes`, `Informes`) VALUES
(0, ''),
(1, 'AIFO'),
(2, 'INTEGRADOS'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infra_aplicacion`
--

CREATE TABLE `infra_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Infra` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `int_aplicacion`
--

CREATE TABLE `int_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Int_Aplicacion` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maven_situacion`
--

CREATE TABLE `maven_situacion` (
  `Id_Maven` int NOT NULL,
  `Maven` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `maven_situacion`
--

INSERT INTO `maven_situacion` (`Id_Maven`, `Maven`) VALUES
(0, ''),
(1, 'SI'),
(2, 'EN PROGRESO'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planpruebas_situacion`
--

CREATE TABLE `planpruebas_situacion` (
  `Id_Plan_Pruebas` int NOT NULL,
  `Plan_Pruebas` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `planpruebas_situacion`
--

INSERT INTO `planpruebas_situacion` (`Id_Plan_Pruebas`, `Plan_Pruebas`) VALUES
(0, ''),
(1, 'SI'),
(2, 'GIT'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pre_aplicacion`
--

CREATE TABLE `pre_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Pre` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pro_aplicacion`
--

CREATE TABLE `pro_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Pro` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responsable_aplicacion`
--

CREATE TABLE `responsable_aplicacion` (
  `ID_Responsable` int NOT NULL,
  `Responsable` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `responsable_aplicacion`
--

INSERT INTO `responsable_aplicacion` (`ID_Responsable`, `Responsable`) VALUES
(0, ''),
(1, 'Maria Begoña Viñas Sierra'),
(2, 'Virgilio Arias Clemente'),
(3, 'Maria Jose Delso Aldea'),
(4, 'Carlos Perez Bravo'),
(5, 'Ana Gonzalez Esteban');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento_aplicacion`
--

CREATE TABLE `seguimiento_aplicacion` (
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Fecha` date NOT NULL,
  `Seguimiento` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serviciosterceros_situacion`
--

CREATE TABLE `serviciosterceros_situacion` (
  `Id_Servicios_Terceros` int NOT NULL,
  `Servicios_Terceros` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `serviciosterceros_situacion`
--

INSERT INTO `serviciosterceros_situacion` (`Id_Servicios_Terceros`, `Servicios_Terceros`) VALUES
(0, ''),
(1, 'SI'),
(2, 'IFIW'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `situacion_aplicaciones`
--

CREATE TABLE `situacion_aplicaciones` (
  `ID_Situacion` int NOT NULL,
  `Codigo_Aplicacion` varchar(4) NOT NULL,
  `Prosa` int DEFAULT '0',
  `Grupo_GIT` int DEFAULT '0',
  `Version_Master` varchar(15) DEFAULT '',
  `Version_Develop` varchar(15) DEFAULT '',
  `Actualizado_GIT` int DEFAULT '0',
  `Version_Produccion` varchar(15) DEFAULT '',
  `Despliegue_ID` int DEFAULT '0',
  `Version_WAS` int DEFAULT '0',
  `Maven_Id` int DEFAULT '0',
  `Documentacion_ID` int DEFAULT '0',
  `Plan_Pruebas_ID` int DEFAULT '0',
  `Testing_ID` int DEFAULT '0',
  `Informes_ID` int DEFAULT '0',
  `Servicios_Terceros_ID` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `situacion_aplicaciones`
--

INSERT INTO `situacion_aplicaciones` (`ID_Situacion`, `Codigo_Aplicacion`, `Prosa`, `Grupo_GIT`, `Version_Master`, `Version_Develop`, `Actualizado_GIT`, `Version_Produccion`, `Despliegue_ID`, `Version_WAS`, `Maven_Id`, `Documentacion_ID`, `Plan_Pruebas_ID`, `Testing_ID`, `Informes_ID`, `Servicios_Terceros_ID`) VALUES
(1, 'ACBA', 0, 1, '01.00.00.17.00', '', 0, '01.00.00.22.00', 2, 9, 0, 0, 0, 0, 0, 0),
(2, 'ACDC', 0, 1, '02.01.00.01.00', '02.02.00.02.00', 1, '', 3, 9, 2, 0, 0, 0, 0, 0),
(3, 'ACSP', 1, 1, '01.01.00.02.00', '01.03.02.02.00', 0, '01.03.02.02.00', 0, 8, 0, 0, 0, 0, 1, 0),
(4, 'BASC', 0, 0, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(5, 'CEHA', 1, 1, '', '', 0, '', 0, 9, 0, 0, 0, 0, 0, 0),
(6, 'CEJA', 0, 1, '', '', 0, '', 0, 9, 0, 0, 0, 0, 0, 0),
(7, 'COIP', 1, 1, '02.00.00.00.00', '02.00.00.00.00', 1, '', 0, 9, 0, 1, 3, 3, 3, 3),
(8, 'COIR', 0, 1, '06.01.06.03.00', '06.02.00.03', 1, '06.02.00.03', 2, 9, 0, 0, 0, 0, 2, 0),
(9, 'DAOL', 0, 1, '07.00.03.00.00', '07.00.03.00.00', 0, '07.00.03.00.00', 2, 9, 2, 1, 1, 0, 3, 3),
(10, 'EMOP', 0, 1, '', '', 0, '02.02.02.00.00', 0, 9, 0, 0, 0, 0, 0, 0),
(11, 'PCOT', 1, 1, '5.0.1', '5.0.2', 1, '', 2, 8, 0, 1, 0, 0, 1, 0),
(12, 'PLPE', 1, 1, '', '', 0, '', 0, 9, 0, 0, 0, 0, 0, 0),
(13, 'PMOP', 1, 1, '03.04.00.00.01', '4.1.1', 1, '', 1, 9, 0, 0, 0, 0, 0, 0),
(14, 'PPAG', 0, 1, '07.00.00.00.01', '07.00.00.02.00', 1, '', 3, 9, 1, 0, 0, 0, 0, 1),
(15, 'PSOB', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(16, 'RENO', 0, 0, '', '', 0, '09.01.01.00.00', 0, 8, 0, 0, 0, 0, 0, 0),
(17, 'RESP', 1, 1, '', '1.3.3', 1, '01.02.02.00.00', 3, 8, 0, 0, 0, 0, 0, 3),
(18, 'SAPO', 0, 1, '03.01.00.01.00', '03.03.00.00.00', 1, '', 1, 9, 0, 0, 0, 0, 0, 0),
(19, 'SCNF', 0, 1, '03.00.00.01.01', '03.00.00.01.04', 1, '', 1, 9, 0, 1, 0, 0, 0, 1),
(20, 'SDIE', 0, 1, '04.00.00.01.00', '04.00.00.01.00', 1, '04.00.00.01.00', 2, 9, 0, 2, 2, 0, 3, 3),
(21, 'SEST', 0, 1, '', '', 0, '', 0, 9, 0, 0, 0, 0, 0, 0),
(22, 'SFUN', 0, 1, '03.00.00.02.00', '03.00.00.02.00', 1, '', 1, 9, 0, 1, 0, 0, 3, 3),
(23, 'SLET', 0, 1, '07.00.00.03.00', '07.00.00.03.00', 1, '07.00.00.03.00', 1, 9, 0, 2, 2, 0, 3, 3),
(24, 'SNOR', 0, 1, '', '', 0, '', 0, 9, 2, 0, 0, 0, 0, 0),
(25, 'SOBA', 0, 1, '06.04.15.06.00', '06.04.15.10.00', 1, '06.04.15.09.00', 2, 9, 0, 1, 0, 0, 2, 3),
(26, 'SPAD', 0, 1, '', '', 0, '', 0, 9, 2, 0, 0, 0, 0, 0),
(27, 'STEP', 1, 1, '', '', 0, '', 0, 9, 0, 0, 0, 0, 0, 0),
(28, 'STRN', 0, 0, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(29, 'ERCP', 0, 1, '', '', 0, '03.02.00.00.00', 0, 9, 0, 0, 0, 0, 0, 0),
(30, 'GFAD', 0, 1, '', '', 0, '03.01.00.00.00', 0, 9, 0, 0, 0, 0, 0, 0),
(31, 'GFOR', 0, 1, '', '', 0, '02.55.00.17.00', 0, 9, 0, 1, 0, 0, 0, 2),
(32, 'CASI', 1, 1, '2.8.1', '2.8.1', 1, '2.8.1', 0, 9, 3, 1, 0, 0, 3, 1),
(33, 'FRDG', 1, 0, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(34, 'GEBE', 1, 1, '', '', 0, '', 0, 9, 0, 0, 0, 0, 0, 0),
(35, 'NCEP', 1, 1, '6.4.0', '6.4.0', 1, '6.4.0', 0, 9, 0, 1, 1, 2, 1, 2),
(36, 'SCCD', 1, 0, '2.0.2', '2.0.2', 0, '2.0.2', 0, 9, 0, 2, 0, 0, 1, 3),
(37, 'SCCI', 1, 1, '', '', 1, '03.04.02.00.00', 0, 8, 0, 1, 0, 0, 1, 3),
(38, 'SCNO', 1, 0, 'Sin codigo', '1.5.0', 0, '01.09.00.00.00', 0, 8, 0, 2, 0, 0, 1, 3),
(39, 'SCPA', 1, 0, '1.26.3', '1.26.3', 1, '01.26.01.00.00', 0, 8, 0, 2, 0, 0, 1, 3),
(40, 'SCSE', 1, 1, '2.4.0', '2.4.0', 1, '2.4.0', 0, 9, 0, 1, 0, 0, 1, 3),
(41, 'SCSG', 1, 1, '2.1.0', '2.1.0', 1, '2.1.0', 0, 9, 0, 1, 0, 2, 1, 3),
(42, 'SIPR', 0, 0, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(43, 'SPRS', 0, 0, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(44, 'TCON', 1, 1, '2.3.0', '2.3.0', 1, '2.3.0', 0, 9, 0, 2, 0, 2, 1, 3),
(45, 'CNLB', 1, 1, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(46, 'COUP', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(47, 'GEPE', 1, 1, '', '', 0, '', 0, 9, 0, 0, 0, 0, 0, 0),
(48, 'GSII', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(49, 'GSIN', 1, 1, '1.0.7', '', 0, '1.0.7', 0, 9, 0, 0, 0, 2, 0, 0),
(50, 'NE01', 0, 0, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(51, 'SALM', 0, 1, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(52, 'WE01', 0, 0, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(53, 'WE02', 0, 0, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(54, 'WE10', 0, 1, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(55, 'WE11', 0, 1, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(56, 'WE12', 0, 1, '', '', 0, '', 0, 0, 2, 0, 0, 0, 0, 0),
(57, 'WE13', 0, 1, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(58, 'FSED', 0, 1, '', '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0),
(59, 'GCNT', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(60, 'GCSL', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(61, 'GEAP', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(62, 'GINF', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(63, 'SEJU', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0),
(64, 'SJCO', 1, 1, '', '', 0, '', 0, 8, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologiainterfaz_aplicacion`
--

CREATE TABLE `tecnologiainterfaz_aplicacion` (
  `ID_Tecnologia_Interfaz` int NOT NULL,
  `Tecnologia_Interfaz` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tecnologiainterfaz_aplicacion`
--

INSERT INTO `tecnologiainterfaz_aplicacion` (`ID_Tecnologia_Interfaz`, `Tecnologia_Interfaz`) VALUES
(0, ''),
(1, 'Web'),
(2, 'Móvil'),
(3, 'Web + Movil'),
(4, 'Escritorio'),
(5, 'Servicio'),
(6, 'WebService');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia_aplicacion`
--

CREATE TABLE `tecnologia_aplicacion` (
  `Id_Tecnologia` int NOT NULL,
  `tecnologia` varchar(15) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tecnologia_aplicacion`
--

INSERT INTO `tecnologia_aplicacion` (`Id_Tecnologia`, `tecnologia`) VALUES
(0, ''),
(1, 'Java'),
(2, 'Pros@'),
(3, 'PL/SQL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `testing_situacion`
--

CREATE TABLE `testing_situacion` (
  `Id_Testing` int NOT NULL,
  `Testing` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `testing_situacion`
--

INSERT INTO `testing_situacion` (`Id_Testing`, `Testing`) VALUES
(0, ''),
(1, 'SI'),
(2, 'EN PROCESO'),
(3, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_aplicacion`
--

CREATE TABLE `tipo_aplicacion` (
  `ID_Tipo` int NOT NULL,
  `Tipo` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_aplicacion`
--

INSERT INTO `tipo_aplicacion` (`ID_Tipo`, `Tipo`) VALUES
(0, ''),
(1, 'Webservice'),
(2, 'Internet'),
(3, 'Intranet'),
(4, 'Intranet(Kiosko)'),
(5, 'Internet e Intranet');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `volumenevolutivo_aplicacion`
--

CREATE TABLE `volumenevolutivo_aplicacion` (
  `ID_Volumen_Evolutivo` int NOT NULL,
  `Volumen_Evolutivo` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `volumenevolutivo_aplicacion`
--

INSERT INTO `volumenevolutivo_aplicacion` (`ID_Volumen_Evolutivo`, `Volumen_Evolutivo`) VALUES
(0, ''),
(1, 'Alto'),
(2, 'Medio'),
(3, 'Bajo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `volumenusuarios_aplicacion`
--

CREATE TABLE `volumenusuarios_aplicacion` (
  `ID_Volumen_Usuarios` int NOT NULL,
  `Volumen_Usuarios` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `volumenusuarios_aplicacion`
--

INSERT INTO `volumenusuarios_aplicacion` (`ID_Volumen_Usuarios`, `Volumen_Usuarios`) VALUES
(0, ''),
(1, 'Alto'),
(2, 'Medio'),
(3, 'Bajo'),
(4, 'Cero (No Producción)');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aplicaciones`
--
ALTER TABLE `aplicaciones`
  ADD PRIMARY KEY (`ID_Aplicacion`,`Codigo_Aplicacion`),
  ADD KEY `Responsable_ID` (`Responsable_ID`),
  ADD KEY `Tecnologia_ID` (`Tecnologia_ID`),
  ADD KEY `Criticidad_ID` (`Criticidad_ID`),
  ADD KEY `Vol_Evol_ID` (`Vol_Evol_ID`),
  ADD KEY `Vol_Usu_ID` (`Vol_Usu_ID`),
  ADD KEY `Tipo_ID` (`Tipo_ID`),
  ADD KEY `Tecnologia_Interfaz_ID` (`Tecnologia_Interfaz_ID`),
  ADD KEY `Codigo_Aplicacion` (`Codigo_Aplicacion`);

--
-- Indices de la tabla `cer_aplicacion`
--
ALTER TABLE `cer_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `comentarios_aplicacion`
--
ALTER TABLE `comentarios_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `comentarios_situacion`
--
ALTER TABLE `comentarios_situacion`
  ADD PRIMARY KEY (`Situacion_Id`,`ID_Comentario`);

--
-- Indices de la tabla `criticidad_aplicacion`
--
ALTER TABLE `criticidad_aplicacion`
  ADD PRIMARY KEY (`ID_Criticidad`);

--
-- Indices de la tabla `despliegue_situacion`
--
ALTER TABLE `despliegue_situacion`
  ADD PRIMARY KEY (`Id_Despliegue`);

--
-- Indices de la tabla `devops_aplicacion`
--
ALTER TABLE `devops_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `documentacion_situacion`
--
ALTER TABLE `documentacion_situacion`
  ADD PRIMARY KEY (`Id_Documentacion`);

--
-- Indices de la tabla `informes_situacion`
--
ALTER TABLE `informes_situacion`
  ADD PRIMARY KEY (`Id_Informes`);

--
-- Indices de la tabla `infra_aplicacion`
--
ALTER TABLE `infra_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `int_aplicacion`
--
ALTER TABLE `int_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `maven_situacion`
--
ALTER TABLE `maven_situacion`
  ADD PRIMARY KEY (`Id_Maven`);

--
-- Indices de la tabla `planpruebas_situacion`
--
ALTER TABLE `planpruebas_situacion`
  ADD PRIMARY KEY (`Id_Plan_Pruebas`);

--
-- Indices de la tabla `pre_aplicacion`
--
ALTER TABLE `pre_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `pro_aplicacion`
--
ALTER TABLE `pro_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`);

--
-- Indices de la tabla `responsable_aplicacion`
--
ALTER TABLE `responsable_aplicacion`
  ADD PRIMARY KEY (`ID_Responsable`);

--
-- Indices de la tabla `seguimiento_aplicacion`
--
ALTER TABLE `seguimiento_aplicacion`
  ADD PRIMARY KEY (`Codigo_Aplicacion`,`Fecha`);

--
-- Indices de la tabla `serviciosterceros_situacion`
--
ALTER TABLE `serviciosterceros_situacion`
  ADD PRIMARY KEY (`Id_Servicios_Terceros`);

--
-- Indices de la tabla `situacion_aplicaciones`
--
ALTER TABLE `situacion_aplicaciones`
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
-- Indices de la tabla `tecnologiainterfaz_aplicacion`
--
ALTER TABLE `tecnologiainterfaz_aplicacion`
  ADD PRIMARY KEY (`ID_Tecnologia_Interfaz`);

--
-- Indices de la tabla `tecnologia_aplicacion`
--
ALTER TABLE `tecnologia_aplicacion`
  ADD PRIMARY KEY (`Id_Tecnologia`);

--
-- Indices de la tabla `testing_situacion`
--
ALTER TABLE `testing_situacion`
  ADD PRIMARY KEY (`Id_Testing`);

--
-- Indices de la tabla `tipo_aplicacion`
--
ALTER TABLE `tipo_aplicacion`
  ADD PRIMARY KEY (`ID_Tipo`);

--
-- Indices de la tabla `volumenevolutivo_aplicacion`
--
ALTER TABLE `volumenevolutivo_aplicacion`
  ADD PRIMARY KEY (`ID_Volumen_Evolutivo`);

--
-- Indices de la tabla `volumenusuarios_aplicacion`
--
ALTER TABLE `volumenusuarios_aplicacion`
  ADD PRIMARY KEY (`ID_Volumen_Usuarios`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aplicaciones`
--
ALTER TABLE `aplicaciones`
  ADD CONSTRAINT `Aplicaciones_ibfk_1` FOREIGN KEY (`Responsable_ID`) REFERENCES `responsable_aplicacion` (`ID_Responsable`),
  ADD CONSTRAINT `Aplicaciones_ibfk_2` FOREIGN KEY (`Tecnologia_ID`) REFERENCES `tecnologia_aplicacion` (`Id_Tecnologia`),
  ADD CONSTRAINT `Aplicaciones_ibfk_3` FOREIGN KEY (`Criticidad_ID`) REFERENCES `criticidad_aplicacion` (`ID_Criticidad`),
  ADD CONSTRAINT `Aplicaciones_ibfk_4` FOREIGN KEY (`Vol_Evol_ID`) REFERENCES `volumenevolutivo_aplicacion` (`ID_Volumen_Evolutivo`),
  ADD CONSTRAINT `Aplicaciones_ibfk_5` FOREIGN KEY (`Vol_Usu_ID`) REFERENCES `volumenusuarios_aplicacion` (`ID_Volumen_Usuarios`),
  ADD CONSTRAINT `Aplicaciones_ibfk_6` FOREIGN KEY (`Tipo_ID`) REFERENCES `tipo_aplicacion` (`ID_Tipo`),
  ADD CONSTRAINT `Aplicaciones_ibfk_7` FOREIGN KEY (`Tecnologia_Interfaz_ID`) REFERENCES `tecnologiainterfaz_aplicacion` (`ID_Tecnologia_Interfaz`);

--
-- Filtros para la tabla `cer_aplicacion`
--
ALTER TABLE `cer_aplicacion`
  ADD CONSTRAINT `cer_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `comentarios_aplicacion`
--
ALTER TABLE `comentarios_aplicacion`
  ADD CONSTRAINT `comentarios_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `comentarios_situacion`
--
ALTER TABLE `comentarios_situacion`
  ADD CONSTRAINT `comentarios_situacion_ibfk_1` FOREIGN KEY (`Situacion_Id`) REFERENCES `situacion_aplicaciones` (`ID_Situacion`);

--
-- Filtros para la tabla `devops_aplicacion`
--
ALTER TABLE `devops_aplicacion`
  ADD CONSTRAINT `devops_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `infra_aplicacion`
--
ALTER TABLE `infra_aplicacion`
  ADD CONSTRAINT `infra_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `int_aplicacion`
--
ALTER TABLE `int_aplicacion`
  ADD CONSTRAINT `int_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `pre_aplicacion`
--
ALTER TABLE `pre_aplicacion`
  ADD CONSTRAINT `pre_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `pro_aplicacion`
--
ALTER TABLE `pro_aplicacion`
  ADD CONSTRAINT `pro_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `seguimiento_aplicacion`
--
ALTER TABLE `seguimiento_aplicacion`
  ADD CONSTRAINT `seguimiento_aplicacion_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`);

--
-- Filtros para la tabla `situacion_aplicaciones`
--
ALTER TABLE `situacion_aplicaciones`
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_1` FOREIGN KEY (`Codigo_Aplicacion`) REFERENCES `aplicaciones` (`Codigo_Aplicacion`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_2` FOREIGN KEY (`Despliegue_ID`) REFERENCES `despliegue_situacion` (`Id_Despliegue`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_3` FOREIGN KEY (`Maven_Id`) REFERENCES `maven_situacion` (`Id_Maven`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_4` FOREIGN KEY (`Documentacion_ID`) REFERENCES `documentacion_situacion` (`Id_Documentacion`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_5` FOREIGN KEY (`Plan_Pruebas_ID`) REFERENCES `planpruebas_situacion` (`Id_Plan_Pruebas`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_6` FOREIGN KEY (`Testing_ID`) REFERENCES `testing_situacion` (`Id_Testing`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_7` FOREIGN KEY (`Informes_ID`) REFERENCES `informes_situacion` (`Id_Informes`),
  ADD CONSTRAINT `Situacion_Aplicaciones_ibfk_8` FOREIGN KEY (`Servicios_Terceros_ID`) REFERENCES `serviciosterceros_situacion` (`Id_Servicios_Terceros`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
