CREATE TABLE rol
(
	cod_rol SERIAL NOT NULL,
	nombre_rol VARCHAR(20) NOT NULL,
	CONSTRAINT pk_cod_rol PRIMARY KEY (cod_rol),
	CONSTRAINT uk_nombre_rol UNIQUE (nombre_rol)
);

CREATE TABLE integrante
(
	cod_integrante SERIAL NOT NULL,
	nombre_integrante VARCHAR(40) NOT NULL,
	apellido_integrante VARCHAR(40) NOT NULL,
	cedula_integrante INT NOT NULL,
	CONSTRAINT pk_cod_integrante PRIMARY KEY (cod_integrante),
	CONSTRAINT uk_cedula_integrante UNIQUE (cedula_integrante)
);

CREATE TABLE comite
(
	cod_comite SERIAL NOT NULL,
	nombre_comite VARCHAR(50) NOT NULL,
	f_creacion_comite DATE NOT NULL,
	icono_comite VARCHAR(100) NOT NULL,
	banner_comite VARCHAR(100) NOT NULL,
	estado_comite BOOLEAN NOT NULL DEFAULT TRUE,
	CONSTRAINT pk_cod_comite PRIMARY KEY (cod_comite),
	CONSTRAINT uk_nombre_comite UNIQUE (nombre_comite)
);

CREATE TABLE integrante_comite
(
	cod_integrante_comite SERIAL NOT NULL,
	cod_comite INT NOT NULL,
	cod_integrante INT NOT NULL,
	cod_rol INT NOT NULL,
	f_ingreso DATE NOT NULL DEFAULT CURRENT_DATE,
	CONSTRAINT pk_int_com UNIQUE (cod_comite, cod_integrante),
	CONSTRAINT fk_cod_comite FOREIGN KEY (cod_comite) REFERENCES comite (cod_comite),
	CONSTRAINT fk_cod_integrante FOREIGN KEY (cod_integrante) REFERENCES integrante (cod_integrante),
	CONSTRAINT fk_cod_rol FOREIGN KEY (cod_rol) REFERENCES rol (cod_rol)
);

CREATE TABLE menu_comite
(
	cod_menu SERIAL NOT NULL,
	nombre_menu VARCHAR(50) NOT NULL,
	estado_menu BOOLEAN NOT NULL DEFAULT TRUE,
	url_menu VARCHAR(100) NOT NULL,
	cod_comite INT NOT NULL,
	CONSTRAINT fk_cod_comite_menu FOREIGN KEY (cod_comite) REFERENCES comite (cod_comite)
);
