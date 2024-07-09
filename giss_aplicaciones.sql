--Borrar tabla de situaciones
DROP TABLE Comentarios_Situacion;
DROP TABLE Situacion_Aplicaciones;

--Borrar tabla de devops


--Borrar tabla de aplicaciones
DROP TABLE Aplicaciones;
DROP TABLE Responsable_Aplicacion;
DROP TABLE Criticidad_Aplicacion;
DROP TABLE Volumen_Evolutivo;
DROP TABLE Volumen_Usuarios;
DROP TABLE Tipo_Aplicacion;
DROP TABLE Tecnología_Interfaz;

--Crear tabla aplicaciones
CREATE TABLE Responsable_Aplicacion (
	ID_Responsable NUMBER PRIMARY KEY,
	Responsable VARCHAR(50)
);

CREATE TABLE Criticidad_Aplicacion (
	ID_Criticidad NUMBER PRIMARY KEY,
	Criticidad VARCHAR(20)
);

CREATE TABLE Volumen_Evolutivo_Aplicacion (
	ID_Volumen_Evolutivo NUMBER PRIMARY KEY,
	Volumen_Evolutivo VARCHAR(10)
);

CREATE TABLE Volumen_Usuarios_Aplicacion (
	ID_Volumen_Usuarios, NUMBER PRIMARY KEY,
	Volumen_Usuarios VARCHAR(10)
);

CREATE TABLE Tipo_Aplicacion (
	ID_Tipo NUMBER PRIMARY KEY,
	Tipo VARCHAR(15)
);

CREATE TABLE Tecnología_Interfaz_Aplicacion (
	ID_Tecnologia_Interfaz NUMBER PRIMARY KEY,
	Tenologia_Interfaz VARCHAR(20)
);

CREATE TABLE Aplicaciones (
	ID_Aplicacion NUMBER PRIMARY KEY,
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Nombre_Aplicacion VARCHAR(50),
	Nombre_Area VARCHAR(20),
	Subarea VARCHAR(40),
	Responsable_ID NUMBER,
	Tecnologia VARCHAR(10)
	Criticidad_ID NUMBER,
	Vol_Evol_ID NUMBER,
	Vol_Usu_ID NUMBER,
	Tipo_ID NUMBER,
	Tecnologia_Interfaz_ID NUMBER,
	FOREIGN KEY (Responsable_ID) REFERENCES Responsable_Aplicacion(ID_Responsable),
	FOREIGN KEY (Criticidad_ID) REFERENCES Criticidad_Aplicacion(ID_Criticidad),
	FOREIGN KEY (Vol_Evol_ID) REFERENCES Volumen_Evolutivo_Aplicacion(ID_Volumen_Evolutivo),
	FOREIGN KEY (Vol_Usu_ID) REFERENCES Volumen_Usuarios_Aplicacion(ID_Volumen_Usuarios),
	FOREIGN KEY (Tipo_ID) REFERENCES Tipo_Aplicacion(ID_Tipo),
	FOREIGN KEY (tecnologia_Interfaz_ID) REFERENCES Tecnología_Interfaz_Aplicacion(ID_Tecnologia_Interfaz)
);


--Crear tabla situaciones
CREATE TABLE Despliegue_Situacion (
	Id_Despliegue NUMBER PRIMARY KEY,
	Despliegue VARCHAR(20)
);

CREATE TABLE Maven_Situacion (
	Id_Maven NUMBER PRIMARY KEY,
	Maven VARCHAR(20)
);

CREATE TABLE Documentacion_Situacion (
	Id_Documentacion NUMBER PRIMARY KEY,
	Documentacion VARCHAR(20)
);

CREATE TABLE Plan_Pruebas_Situacion (
	Id_Plan_Pruebas NUMBER PRIMARY KEY,
	Plan_Pruebas VARCHAR(20)
);

CREATE TABLE Testing_Situacion (
	Id_Testing NUMBER PRIMARY KEY,
	Testing VARCHAR(20)
);

CREATE TABLE Informes_Situacion (
	Id_Informes NUMBER PRIMARY KEY,
	Informes VARCHAR(20)
);

CREATE TABLE Servicios_Terceros_Situacion (
	Id_Servicios_Terceros NUMBER PRIMARY KEY,
	Servicios_Terceros VARCHAR(20)
);

CREATE TABLE Situacion_Aplicaciones (
	ID_Situacion NUMBER PRIMARY KEY,
	Codigo_Aplicacion VARCHAR(4),
	Prosa NUMBER,
	Grupo_GIT NUMBER,
	Version_Master VARCHAR(15),
	Version_Develop VARCHAR(15),
	Actualizado_GIT NUMBER,
	Version_Producción VARCHAR(15),
	Despliegue_ID NUMBER,
	Version_WAS NUMBER,
	Maven_Id NUMBER,
	Documentacion_ID NUMBER,
	Plan_Pruebas_ID NUMBER,
	Testing_ID NUMBER,
	Informes_ID NUMBER,
	Servicios_Terceros_ID NUMBER,
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion),
	FOREIGN KEY (Despliegue_ID) REFERENCES Despliegue_Situacion(Id_Despliegue),
	FOREIGN KEY (Maven_Id) REFERENCES Maven_Situacion(Id_Maven),
	FOREIGN KEY (Documentacion_ID) REFERENCES Documentacion_Situacion(Id_Documentacion),
	FOREIGN KEY (Plan_Pruebas_ID) REFERENCES Plan_Pruebas_Situacion(Id_Plan_Pruebas),
	FOREIGN KEY (Testing_ID) REFERENCES Testing_Situacion(Id_Testing),
	FOREIGN KEY (Informes_ID) REFERENCES Informes_Situacion(Id_Informes),
	FOREIGN KEY (Servicios_Terceros_ID) REFERENCES Servicios_Terceros_Situacion(Id_Servicios_Terceros)
);

CREATE TABLE Comentarios_Situacion (
	Situacion_Id NUMBER PRIMARY KEY,
	ID_Comentario NUMBER PRIMARY KEY,
	Comentario VARCHAR(100),
	FOREIGN KEY (Situacion_Id) REFERENCES Situacion_Aplicaciones(ID_Situacion)
);

CREATE TABLE Devops_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	DevOps VARCHAR(25),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

CREATE TABLE Int_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Int_Aplicacion VARCHAR(10),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

CREATE TABLE Cer_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Cer VARCHAR(10),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

CREATE TABLE Pre_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Pre VARCHAR(10),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

CREATE TABLE Pro_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Pro VARCHAR(10),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

CREATE TABLE Infra_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Infra VARCHAR(25),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

CREATE TABLE Comentarios_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Comentario VARCHAR(50),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

CREATE TABLE Seguimiento_Aplicacion (
	Codigo_Aplicacion VARCHAR(4) PRIMARY KEY,
	Fecha DATE PRIMARY KEY,
	Seguimiento VARCHAR(200),
	FOREIGN KEY (Codigo_Aplicacion) REFERENCES Aplicaciones(Codigo_Aplicacion)
);

INSERT INTO Responsable_Aplicacion(ID_Responsable, Responsable) VALUES
(1, 'Maria Begoña Viñas Sierra'),
(2, 'Virgilio Arias Clemente'),
(3, 'Maria Jose Delso Aldea'),
(4, 'Carlos Perez Bravo'),
(5, 'Ana Gonzalez Esteban')

INSERT INTO Criticidad_Aplicacion(ID_Criticidad, Criticidad) VALUES
(1, 'Alta'),
(2, 'Media'),
(3, 'Baja'),
(4, 'N/A - Se va a decomisionar'),
(5, 'Se ha dado de baja'),
(6, 'En Desarrollo'),
(7, 'Es de los funcionarios');

INSERT INTO Volumen_Evolutivo(ID_Volumen_Evolutivo,Volumen_Evolutivo) VALUES
(1, 'Alto'),
(2, 'Medio'),
(3, 'Bajo');

INSERT INTO Volumen_Usuarios(ID_Volumen_Usuarios, Volumen_Usuarios) VALUES
(1, 'Alto'),
(2, 'Medio'),
(3, 'Bajo'),
(4, 'Cero (No Producción)');

INSERT INTO Tipo_Aplicacion(ID_Tipo, Tipo_Aplicacion) VALUES
(1, 'Webservice'),
(2, 'Internet'),
(3, 'Intranet'),
(4, 'Intranet(Kiosko)'),
(5, 'Internet e Intranet');

INSERT INTO Tecnología_Interfaz(ID_Tecnologia_Interfaz, Tecnología_Interfaz) VALUES
(1, 'Web'),
(2, 'Móvil'),
(3, 'Web + Movil'),
(4, 'Escritorio'),
(5, 'Servicio').
(6, 'WebService');

INSERT INTO Aplicaciones(Codigo_Aplicacion,Nombre_Aplicacion, Nombre_Area,Subarea, Responsable, Tecnologia, Criticidad_ID, Vol_Evol_ID, Vol_Usu_ID, Tipo_ID, Tecnologia_Interfaz_ID) VALUES
(1,'ACBA','Procesos Batch de Accion Social','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 1, 3, 3, 1, 5),
(2,'ACDC','Gestión de los Expedientes de Accion Socal','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 1, 1, 1, 4, 1),
(3,'ACSP','Sistema de Presentación de Solicitudes de Accion Social','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 1, 3, 3, 3, 1),
(4,'BASC','Consulta Bases de Cotización','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 3, 1),
(5,'CEHA','','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 5, 3, 3, 3, 1),
(6,'CEJA','','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 4, 3, 3, 3, 1),
(7,'COIP','Consulta del IRPF Mensual - Pros@','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 2, 3, 3, 3, 1),
(8,'COIR','Consuta del IRPF Mensual, Acumulado y Cálculo del Tipo de Retención en Nomina','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 3, 1),
(9,'DAOL','Consulta de Datos Personales en la Intranet','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 3, 1),
(10,'EMOP','Expedientes de Modificación de los Presupuestos de las Mutuas','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 3, 1),
(11,'PCOT','Consulta Bases de Cotización','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 2, 3, 3, 3, 1),
(12,'PLPE','Gestión Plan de Pensiones AGE','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 5, 3, 3, 3, 1),
(13,'PMOP','Expedientes y Modificación de Presupuestos','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 2, 3, 2, 3, 1),
(14,'PPAG','Gestión y Emisioón Anual de Aportación al Plan de Pensiones de la AGE','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 2, 3, 1),
(15,'PSOB','Consulta de Puestos Solicitados y Adjudicados en Concursos','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 3, 3, 2, 3, 1),
(16,'RENO','Consulta e Impresión de Nomina en el Entorno de Intranet','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 3, 1),
(17,'RESP','Consulta de Recibos del Sistema SIP','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 2, 3, 3, 3, 1),
(18,'SAPO','Servicios Web Relativos a las Tablas de Apoyo y Nomenclátores del Sistema SIP','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 1, 5),
(19,'SCNF','Servicios Web para la Gestión del Acceso al Sistema SIP','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 2, 3, 3, 1, 5),
(20,'SDIE','Datos Relativos a la Gestión de Dietas','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 2, 3, 3, 3, 1),
(21,'SEST','Estructura de los Centros de Destino de la SS','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 2, 3, 3, 1),
(22,'SFUN','Servicios Web para la Gestión de los Datos Administrativos del Personal del Sistema SIP','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 2, 3, 1, 5),
(23,'SLET','Servicios Web Relativos a la Ocupación de los Servicios Jurídicos','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 3, 1),
(25,'SOBA','Consulta por DNI de los Puestos Solicitados y Adjudicados en Concursos','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 2, 3, 3, 3, 1),
(26,'SPAD','Administración de Parametros SIP','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 3, 3, 3, 3, 1),
(28,'STRN','','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 5, 3, 3, 1, 5),
(29,'ERCP','Envio y Recepción de Archivos RCP','Desarrollos Externos','Innovacion',2,'Java', 2, 3, 3, 2, 1),
(30,'GFAD','Aplicación de Gestión y Administración de la Aplicación GFOR','Desarrollos Externos','Innovacion',2,'Java', 2, 3, 3, 2, 1),
(31,'GFOR','Gestión de Cursos de Formación','Desarrollos Externos','Innovacion',2,'Java', 1, 1, 1, 2, 1),
(32,'CASI','Carga de las Tablas de Siniestralidad (AT/EP) envidas por Mutuas, TGSS, INSS, ISM via IfiWeb','Desarrollos Externos','Presupuestos',3,'Pros@', 2, 3, 3, 3, 1),
(33,'FRDG','','Desarrollos Externos','Presupuestos',3,'Pros@', 4, 3, 3, 2, 1),
(34,'GEBE','Gestión de Empresas Colaboradoras','Desarrollos Externos','Presupuestos',3,'Pros@', 3, 3, 3, 3, 1),
(35,'NCEP','Comunicación y Gestión de los Partes de Enfermedades Profesionales dentro de la Seguridad Social','Desarrollos Externos','Presupuestos',3,'Pros@', 1, 2, 1, 5, 1),
(36,'SCCD','Servicio de Comunicación con Ciudadanos','Desarrollos Externos','Presupuestos',3,'Pros@',2, 3, 3, 3, 1),
(38,'SCCI','Servicio de Comunicación con Instituciones','Desarrollos Externos','Presupuestos',3,'Pros@',3, 3, 3, 3, 1),
(39,'SCNO','SCCI Normativa','Desarrollos Externos','Presupuestos',3,'Pros@',2,3,3,3,1),
(40,'SCPA','SCCI Parlamentario','Desarrollos Externos','Presupuestos',3,'Pros@',2,3,3,3,1),
(41,'SCSE','Servicio Comunicación de la SESS','Desarrollos Externos','Presupuestos',3,'Pros@',1,3,3,3,3),
(42,'SCSG','SCCI Secretaria de Gabinete','Desarrollos Externos','Presupuestos',3,'Pros@',2,3,3,3,1),
(43,'SIPR','','Desarrollos Externos','Presupuestos',3,'PL/SQL', 3,3,3,3,1),
(44,'SPRS','','Desarrollos Externos','Presupuestos',3,'Java',7,3,3,3,1),
(45,'TCON','Tramitación de Convenios del Gabinete de la SSP','Desarrollos Externos','Presupuestos',3,'Pros@',2,1,3,3,1),
(47,'COUP','Consulta de Objetivos, Unidades y Provincias','Desarrollos Externos','',4,'Pros@',3,3,4,4,1),
(48,'GEPE','Gestión de Incidencias de Personal','Desarrollos Externos','',4,'Pros@',1,2,1,3,1),
(49,'GSII','Gestión de Servicios de Intercambio de Información','Desarrollos Externos','',4,'Pros@',1,3,3,3,1),
(50,'GSIN','Gestión de Servicios de Intercambio de Información V2','Desarrollos Externos','',4,'Pros@',2,2,2,3,1),
(52,'SALM','Salida de Materiales','Desarrollos Externos','',4,'Java',3,3,2,3,1),
(56,'WE11','Estructura de Personal','Desarrollos Externos','',4,'Java',2,2,1,3,1),
(57,'WE12','Acceso a Edificio sin Tarjeta','Desarrollos Externos','',4,'Java',2,3,2,3,1),
(58,'WE13','Visitas','Desarrollos Externos','',4,'Java',2,2,2,3,1),
(59,'FSED','Formulario de Solicitud de Ejercicio de Derechos','Servicios Juridicos','',5,'Java',3,3,3,2,1),
(60,'GCNT','Contencioso','Servicios Juridicos','',5,'Pros@',1,1,1,2,1),
(61,'GCSL','Concursal','Servicios Juridicos','',5,'Pros@',1,1,1,2,1),
(62,'GEAP','Abogados Apoderados','Servicios Juridicos','',5,'Pros@',2,2,2,2,1),
(63,'GINF','Consultivo','Servicios Juridicos','',5,'Pros@',2,2,2,2,1),
(64,'SEJU','Gestión de Expedietntes Servicio Juridico','Servicios Juridicos','',5,'Pros@',1,1,1,2,1),
(65,'SJCO','Común','Servicios Juridicos','',5,'Pros@',1,3,3,2,1);

INSERT INTO Aplicaciones(Codigo_Aplicacion,Nombre_Aplicacion, Nombre_Area,Subarea, Responsable, Tecnologia, Criticidad_ID, Tecnologia_Interfaz_ID) VALUES
(24,'SNOR','Gestión de Reglamentos','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Java', 6, 1),
(27,'STEP','Solicitudes Telemáticas para RRHH con Registro','Desarrollos Externos','Cordinacion y desarrollo de RRHH',1,'Pros@', 6, 1);

INSERT INTO Aplicaciones(Codigo_Aplicacion,Nombre_Aplicacion, Nombre_Area,Subarea, Responsable, Tecnologia,Criticidad_ID, Vol_Evol_ID) VALUES
(46,'CNLB','','Desarrollos Externos','','','Pros@',4,3),
(51,'NE01','','Desarrollos Externos','','','Java', 4,3),
(53,'WE01','','Desarrollos Externos','','','Java',4,3),
(54,'WE02','','Desarrollos Externos','','','Java',4,3),
(55,'WE10','','Desarrollos Externos','','','Java',4,3);

INSERT INTO Despliegue(Id_Despliegue,Despliegue) VALUES
(1,'PREPRODUCION'),
(2,'PRODUCION'),
(3,'INTEGRACION');

INSERT INTO Maven(Id_Maven,Maven) VALUES
(1,'SI'),
(2,'EN PROGRESO'),
(3,'NO');

INSERT INTO Documentacion(Id_Documentacion,Documentacion) VALUES
(1,'DM12'),
(2,'DM14');

INSERT INTO Plan_Pruebas(Id_Plan_Pruebas,Plan_Pruebas) VALUES
(1,'SI'),
(2,'GIT'),
(3,'NO');

INSERT INTO Testing(Id_Testing,Testing) VALUES
(1,'SI'),
(2,'EN PROCESO'),
(3,'NO');

INSERT INTO Informes(Id_Informes,Informes) VALUES
(1,'AIFO'),
(2,'INTEGRADOS'),
(3,'NO');

INSERT INTO Servicios_Terceros(Id_Servicios_Terceros,Servicio) VALUES
(1,'SI'),
(2,'IFIW'),
(3,'NO');

--PROSA-GRP GIT 0 NO . 1 SI
INSERT INTO Situacion_Aplicaciones(ID_Situacion,Codigo_Aplicacion,Prosa,Grupo_GIT,Version_Master,Version_Develop ,Actualizado_GIT,Version_Producción,Despliegue_ID,Version_WAS,Maven_Id,Documentacion_ID,Plan_Pruebas_ID,Testing_ID,Informes_ID,Servicios_Terceros_ID) VALUES
(1,'ACBA',0,1,'01.00.00.17.00',null,0,'01.00.00.22.00',2,9,null,null,null,null,null,null),
(2,'ACDC',0,1,'02.01.00.01.00','02.02.00.02.00',1,null,3,9,2,null,null,null,null,null),
(3,'ACSP',1,1,'01.01.00.02.00','01.03.02.02.00',null,'01.03.02.02.00',null,8,null,null,null,null,1,null),
(4,'BASC',0,0,null,null,null,null,null,8,null,null,null,null,null,null),
(5,'CEHA',1,1,null,null,null,null,null,9,null,null,null,null,null,null),
(6,'CEJA',0,1,null,null,null,null,null,9,null,null,null,null,null,null),
(7,'COIP',1,1,'02.00.00.00.00','02.00.00.00.00',1,null,null,9,null,1,3,3,3,3),
(8,'COIR',0,1,'06.01.06.03.00','06.02.00.03',1,'06.02.00.03',2,9,null,null,null,null,2,null),
(9,'DAOL',0,1,'07.00.03.00.00','07.00.03.00.00',0,'07.00.03.00.00',2,9,2,1,1,null,3,3),
(10,'EMOP',0,1,null,null,null,'02.02.02.00.00',null,9,null,null,null,null,null,null),
(11,'PCOT',1,1,'5.0.1','5.0.2',1,null,2,8,null,1,null,null,1,null),
(12,'PLPE',1,1,null,null,null,null,null,9,null,null,null,null,null,null),
(13,'PMOP',1,1,'03.04.00.00.01','4.1.1',1,null,1,9,null,null,null,null,null,null),
(14,'PPAG',0,1,'07.00.00.00.01','07.00.00.02.00',1,null,3,9,1,null,null,null,null,1),
(15,'PSOB',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(16,'RENO',0,0,null,null,null,'09.01.01.00.00',null,8,null,null,null,null,null,null),
(17,'RESP',1,1,null,'1.3.3',1,'01.02.02.00.00',3,8,null,null,null,null,null,3),
(18,'SAPO',0,1,'03.01.00.01.00','03.03.00.00.00',1,null,1,9,null,null,null,null,null,null),
(19,'SCNF',0,1,'03.00.00.01.01','03.00.00.01.04',1,null,1,9,null,1,null,null,null,1),
(20,'SDIE',0,1,'04.00.00.01.00','04.00.00.01.00',1,'04.00.00.01.00',2,9,null,2,2,null,3,3),
(21,'SEST',0,1,null,null,null,null,null,9,null,null,null,null,null,null),
(22,'SFUN',0,1,'03.00.00.02.00','03.00.00.02.00',1,null,1,9,null,1,null,null,3,3),
(23,'SLET',0,1,'07.00.00.03.00','07.00.00.03.00',1,'07.00.00.03.00',1,9,null,2,2,null,3,3),
(24,'SNOR',0,1,null,null,null,null,null,9,2,null,null,null,null,null),
(25,'SOBA',0,1,'06.04.15.06.00','06.04.15.10.00',1,'06.04.15.09.00',2,9,null,1,null,null,2,3),
(26,'SPAD',0,1,null,null,null,null,null,9,2,null,null,null,null,null),
(27,'STEP',1,1,null,null,null,null,null,9,null,null,null,null,null,null),
(28,'STRN',0,0,null,null,null,null,null,8,null,null,null,null,null,null),
(29,'ERCP',0,1,null,null,null,'03.02.00.00.00',null,9,null,null,null,null,null,null),
(30,'GFAD',0,1,null,null,null,'03.01.00.00.00',null,9,null,null,null,null,null,null),
(31,'GFOR',0,1,null,null,null,'02.55.00.17.00',null,9,null,1,null,null,null,2),
(32,'CASI',1,1,'2.8.1','2.8.1',1,'2.8.1',null,9,3,1,null,null,3,1),
(33,'FRDG',1,0,null,null,null,null,null,8,null,null,null,null,null,null),
(34,'GEBE',1,1,null,null,null,null,null,9,null,null,null,null,null,null),
(35,'NCEP',1,1,'6.4.0','6.4.0',1,'6.4.0',null,9,null,1,1,2,1,2),
(36,'SCCD',1,0,'2.0.2','2.0.2',0,'2.0.2',null,9,null,2,null,null,1,3),
(37,'SCCI',1,1,null,null,1,'03.04.02.00.00',null,8,null,1,null,null,1,3),
(38,'SCNO',1,0,'Sin codigo','1.5.0',0,'01.09.00.00.00',null,8,null,2,null,null,1,3),
(39,'SCPA',1,0,'1.26.3','1.26.3',1,'01.26.01.00.00',null,8,null,2,null,null,1,3),
(40,'SCSE',1,1,'2.4.0','2.4.0',1,'2.4.0',null,9,null,1,null,null,1,3),
(41,'SCSG',1,1,'2.1.0','2.1.0',1,'2.1.0',null,9,null,1,null,2,1,3),
(44,'TCON',1,1,'2.3.0','2.3.0',1,'2.3.0',null,9,null,2,null,2,1,3),
(46,'COUP',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(47,'GEPE',1,1,null,null,null,null,null,9,null,null,null,null,null,null),
(48,'GSII',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(49,'GSIN',1,1,'1.0.7',null,null,'1.0.7',null,9,null,null,null,2,null,null),
(56,'WE12',0,1,null,null,null,null,null,null,2,null,null,null,null,null),
(59,'GCNT',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(60,'GCSL',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(61,'GEAP',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(62,'GINF',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(63,'SEJU',1,1,null,null,null,null,null,8,null,null,null,null,null,null),
(64,'SJCO',1,1,null,null,null,null,null,8,null,null,null,null,null,null);

INSERT INTO Situacion_Aplicaciones(ID_Situacion,Codigo_Aplicacion,Prosa,Grupo_GIT) VALUES
(42,'SIPR',0,0,),
(43,'SPRS',0,0,),
(45,'CNLB',1,1,),
(50,'NE01',0,0,),
(51,'SALM',0,1,),
(52,'WE01',0,0,),
(53,'WE02',0,0,),
(54,'WE10',0,1,),
(55,'WE11',0,1,),
(57,'WE13',0,1,),
(58,'FSED',0,1,);

INSERT INTO Comentarios_Situacion(Situacion_Id, ID_Comentario, Comentario) VALUES
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
64, 1, 'No tiene estructura correcta. Todo dentro de SJSS');

/*INSERT INTO Devops_Aplicacion(Codigo_Aplicacion,DevOps) VALUES
('ACSP','Sí'),
('COIP','Solicitada en devops'),
('COIR','Mavenizada'),
('PCOT','Sí'),
('PLPE','En Proceso'),
('PMOP','Sí'),
('PSOB','Solicitada en devops'),
('RESP','Sí'),
('SNOR','Mavenizando'),
('STEP','Solicitada en devops'),
('GFAD','Sí'),
('CASI','Sí'),
('GEBE','Sí'),
('NCEP','Sí'),
('SCCD','Sí'),
('SCCI','Sí'),
('SCNO','Sí'),
('SCPA','Sí'),
('SCSE','Sí'),
('SCSG','Sí'),
('TCON','Sí'),
('COUP','Sí'),
('GEPE','Sí'),
('GSIN','Sí'),
('SALM','No'),
('WE11','Sí'),
('WE12','Sí'),
('WE13','Sí'),
('GCSL','Sí'),
('GEAP','Sí'),
('GINF','Sí'),
('SJCO','Sí');

INSERT INTO Int_Aplicacion(Codigo_Aplicacion,Int_Aplicacion) VALUES
('ACSP','Sí'),
('PCOT','Sí'),
('PMOP','Sí'),
('RESP','Sí'),
('GFAD','Sí'),
('CASI','Sí'),
('GEBE','Sí'),
('NCEP','Sí'),
('SCCD','Sí'),
('SCCI','Sí'),
('SCNO','Sí'),
('SCPA','Sí'),
('SCSE','Sí'),
('SCSG','Sí'),
('TCON','Sí'),
('COUP','Sí'),
('GEPE','Sí'),
('GSIN','Sí'),
('WE11','Sí'),
('WE12','Sí'),
('WE13','En curso'),
('GCSL','Sí'),
('GEAP','Sí'),
('GINF','Sí'),
('SJCO','Sí');

INSERT INTO Cer_Aplicacion(Codigo_Aplicacion,Cer) VALUES
('ACSP','Sí'),
('PCOT','Sí'),
('PMOP','Sí'),
('RESP','Sí'),
('GFAD','Sí'),
('CASI','Sí'),
('GEBE','Sí'),
('NCEP','Sí'),
('SCCD','Sí'),
('SCCI','Sí'),
('SCNO','Sí'),
('SCPA','Sí'),
('SCSE','Sí'),
('SCSG','Sí'),
('TCON','Sí'),
('COUP','Sí'),
('GEPE','Sí'),
('GSIN','Sí'),
('WE11','Sí'),
('WE12','Sí'),
('GCSL','Sí'),
('GEAP','Sí'),
('GINF','Sí'),
('SJCO','Sí');

INSERT INTO Pre_Aplicacion (Codigo_Aplicacion, Pre) VALUES
('PCOT','Sí'),
('PMOP','Sí'),
('RESP','Sí'),
('CASI','Sí'),
('GEBE','Sí'),
('NCEP','Sí'),
('SCCD','Sí'),
('SCNO','Sí'),
('SCPA','Sí'),
('SCSE','Sí'),
('SCSG','Sí'),
('TCON','Sí'),
('COUP','Sí'),
('GEPE','Sí'),
('GSIN','Sí'),
('WE11','Sí'),
('WE12','Sí'),
('GCSL','Sí'),
('GEAP','Sí'),
('SJCO','Sí');

INSERT INTO Pro_Aplicacion (Codigo_Aplicacion, Pro) VALUES
('PCOT','En Proceso'),
('CASI','Sí'),
('NCEP','Sí'),
('SCCD','Sí'),
('SCPA','Sí'),
('SCSE','Sí'),
('SCSG','Sí'),
('TCON','Sí'),
('GSIN','Sí'),
('WE11','Sí'),
('GCSL','Sí'),
('SJCO','Sí');

INSERT INTO Infra_Aplicacion (Codigo_Aplicacion, Infra) VALUES
('CASI','9.0.1.23'),
('NCEP','9.0.1.22'),
('SCCD','9.0.1.23'),
('SCSE','9.0.2.18'),
('SCSG','9.0.1.23'),
('TCON','9.0.1.22'),
('GSIN','9.0.1.21');

INSERT INTO Comentarios_Aplicacion (Codigo_Aplicacion, Comentario) VALUES
('ACSP','1.4.0'),
('CEHA','Dada de baja, se integra en RESP'),
('CEJA','Se va a decomisionar'),
('PCOT','5.0.2'),
('PLPE','Dada de baja, se integra en RESP'),
('PPAG','Se va a decomisionar'),
('RESP','1.3.3'),
('STRN','Se va a decomisionar'),
('GFAD','3.1.0'),
('CASI','Versión 2.8.1'),
('FRDG','Es de los funcionarios'),
('GEBE','1.0.0'),
('NCEP','Versión 6.6.0'),
('SCCD','2.0.2'),
('SCCI','3.5.0'),
('SCNO','2.0.0'),
('SCPA','1.26.3'),
('SCSE','2.4.0'),
('SCSG','2.1.0'),
('SPRS','Es de los funcionarios'),
('TCON','2.3.0'),
('CNLB','Se va a decomisionar'),
('COUP','2.0.3'),
('GEPE','3.5.20'),
('GSIN','1.0.7'),
('NE01','Se va a decomisionar'),
('WE01','Se va a decomisionar'),
('WE02','Se va a decomisionar'),
('WE10','Se va a decomisionar'),
('WE11','1.2.4'),
('WE12','1.4.4');

INSERT INTO Seguimiento_Aplicacion (Codigo_Aplicacion, Fecha, Seguimiento) VALUES
('ACSP', 26/04/24, 'Parada en CER porque no funciona el registro electrónico en INT'),
('COIP', 16/02/24, 'Se le ha pedido a Begoña que solicite el alta en la base de datos de Pros@'),
('COIR', 16/02/24, 'Begoña quiere desplegar "normal" la v06.02'),
('PCOT', 16/02/24, 'Nos piden cambiar infra, objetivo subir a PRO semana del 19 de febrero'),
('PMOP', 16/02/24, 'Hay errores en los certificados en PRE desde la SEDE'),
('PMOP', 02/07/24, 'Se desbloque el problema con el acceso por la SEDE. Cuando se suba a PRO hay que avisar que informen el contextRoot. PASS = 108393'),
('PSOB', 16/02/24, 'Se le ha pedido a Begoña que solicite el alta en la base de datos de Pros@'),
('RESP', 16/02/24, 'Begoña no quiere subir a PRO. Entender el por qué no quiere'),
('STEP', 16/02/24, 'Se le ha pedido a Begoña que solicite el alta en la ase de datos de Pros@'),
('CASI', 25/04/24, 'Subida v2.8.1'),
('GEBE', 01/01/01, 'Se está subiendo la 1.1'),
('SCCI', 01/01/01, 'Pendiente que MJ hable con usuarios para ver como se la app'),
('SCNO', 01/01/01, 'Se esta subiendo en WAS9'),
('SCPA', 01/01/01, 'Se va a migrar a WAS9');*/