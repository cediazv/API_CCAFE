INSERT INTO rol (nombre_rol)
VALUES ('Encargado'), ('Asistente');

INSERT INTO integrante (nombre_integrante, apellido_integrante, cedula_integrante)
VALUES 
	('Constanza', 'Alvarado', 1234),
	('Hernando', 'Camargo', 1232),
	('Carlos', 'Ortíz', 4324),
	('Germán', 'Vargas', 4563),
	('Germán', 'Campos', 45645),
	('Guiovana', 'Sabogal', 8762),
	('Natalia', 'Parra', 7274),
	('Amparo', 'Mejía', 9823);

INSERT INTO comite (nombre_comite, f_creacion_comite, banner_comite, icono_comite)
VALUES
	('Responsabilidad social', CURRENT_DATE, 'Banner_rsu.png', 'icon_rsu_circle.png'),
	('Egresados', CURRENT_DATE, 'Banner_egresados.png', 'icon_egresados_circle.png'),
	('Calidad', CURRENT_DATE, 'Banner_Calidad.png', 'icon_calidad_circle.png'),
	('Curricular', CURRENT_DATE, 'Banner_Curricular.png', 'icon_curricular_circle.png'),
	('Comunicaciones', CURRENT_DATE, 'Banner_Comunicaciones.png', 'icon_comunicaciones_circle.png'),
	('Investigaciones', CURRENT_DATE, 'Banner_investigaciones.png', 'icon_investigación_circle.png'),
	('Prácticas empresariales', CURRENT_DATE, 'Banner_externo.png', 'icon_externo_circle.png'),
	('Éxito estudiantil', CURRENT_DATE, 'Banner_exito.png', 'icon_exito_circle.png'),
	('Internacionalización', CURRENT_DATE, 'Banner_internacionalizacion.png', 'icon_internacionalizacion_circle.png');

INSERT INTO integrante_comite (cod_comite, cod_integrante, cod_rol)
VALUES (1, 1, 1), (2, 2, 1), (3, 3, 1), (4, 4, 1), (5, 3, 1), (5, 5, 1),
	(6, 6, 1), (7, 1, 1), (8, 7, 1), (9, 8, 1);