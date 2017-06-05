INSERT INTO rol (nombre_rol)
VALUES ('Encargado'), ('Asistente');

INSERT INTO integrante (nombre_integrante, apellido_integrante, cedula_integrante, usuario_integrante, clave_integrante)
VALUES 
	('Constanza', 'Alvarado', 1234, NULL, NULL),
	('Hernando', 'Camargo', 1232, NULL, NULL),
	('Carlos', 'Ortíz', 4324, NULL, NULL),
	('Germán', 'Vargas', 4563, NULL, NULL),
	('Germán', 'Campos', 45645, NULL, NULL),
	('Guiovana', 'Sabogal', 8762, NULL, NULL),
	('Natalia', 'Parra', 7274, 'natalia.parra', MD5('asdf1234')),
	('Amparo', 'Mejía', 9823, NULL, NULL);

INSERT INTO comite (nombre_comite, f_creacion_comite, banner_comite, icono_comite, url_comite )
VALUES
	('Responsabilidad social', CURRENT_DATE, 'Banner_rsu.png', 'icon_rsu_circle.png', NULL),
	('Egresados', CURRENT_DATE, 'Banner_egresados.png', 'icon_egresados_circle.png', NULL),
	('Calidad', CURRENT_DATE, 'Banner_Calidad.png', 'icon_calidad_circle.png', NULL),
	('Curricular', CURRENT_DATE, 'Banner_Curricular.png', 'icon_curricular_circle.png', NULL),
	('Comunicaciones', CURRENT_DATE, 'Banner_Comunicaciones.png', 'icon_comunicaciones_circle.png', NULL),
	('Investigaciones', CURRENT_DATE, 'Banner_investigaciones.png', 'icon_investigación_circle.png', NULL),
	('Prácticas empresariales', CURRENT_DATE, 'Banner_externo.png', 'icon_externo_circle.png', NULL),
	('Éxito estudiantil', CURRENT_DATE, 'Banner_exito.png', 'icon_exito_circle.png', NULL),
	('Internacionalización', CURRENT_DATE, 'Banner_internacionalizacion.png', 'icon_internacionalizacion_circle.png', 'prueba.html');

INSERT INTO integrante_comite (cod_comite, cod_integrante, cod_rol)
VALUES (1, 1, 1), (2, 2, 1), (3, 3, 1), (4, 4, 1), (5, 3, 1), (5, 5, 1),
	(6, 6, 1), (7, 1, 1), (8, 7, 1), (9, 8, 1);

INSERT INTO menu_comite (nombre_menu, contenido_menu, url_menu, cod_comite, cod_integrante_reg)
VALUES
        /*¿Quiénes somos?*/
	('¿Quiénes somos?', NULL, 'quienes.html', 1, 1),
	('¿Quiénes somos?', 'Contenido de base de datos', NULL, 2, 2),
	('¿Quiénes somos?', NULL, 'quienes.html', 3, 3),
	('¿Quiénes somos?', 'Contenido de base de datos', NULL, 4, 4),
	('¿Quiénes somos?', NULL, 'quienes.html', 5, 5),
	('¿Quiénes somos?', 'Contenido de base de datos', NULL, 6, 6),
	('¿Quiénes somos?', NULL, 'quienes.html', 7, 7),
	('¿Quiénes somos?', 'Contenido de base de datos', NULL, 8, 8),
	('¿Quiénes somos?', NULL, 'quienes.html', 9, 8),
        /*OTROS: Internacionalización*/
	('Alianzas con países', NULL, 'alianzaPaises.html', 9, 8),
	('Alianzas con instituciones', 'Contenido de base de datos', NULL, 9, 8),
        /*OTROS: Éxito estudiantil*/
	('Orientación vocacional y profesional', NULL, 'orientacion.html', 8, 8),
	('Talleres para el aprendizaje', 'Contenido de base de datos', NULL, 8, 8),
	('Grupos de apoyo', NULL, 'apoyo.html', 8, 8),
	('PAE', 'Contenido de base de datos', NULL, 8, 8),
        /*OTROS: Investigaciones*/
	('Grupos de investigación', NULL, 'grupos.html', 6, 6),
	('Proyectos financiables', 'Contenido de base de datos', 'grupos.html', 6, 6),
        /*Contáctenos*/
	('Contáctenos', NULL, '/contacto', 1, 1),
	('Contáctenos', NULL, '/contacto', 2, 2),
	('Contáctenos', NULL, '/contacto', 3, 3),
	('Contáctenos', NULL, '/contacto', 4, 4),
	('Contáctenos', NULL, '/contacto', 5, 5),
	('Contáctenos', NULL, '/contacto', 6, 6),
	('Contáctenos', NULL, '/contacto', 7, 7),
	('Contáctenos', NULL, '/contacto', 8, 8),
	('Contáctenos', NULL, '/contacto', 9, 8);
