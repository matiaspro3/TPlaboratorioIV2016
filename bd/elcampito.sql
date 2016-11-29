-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2016 a las 23:59:40
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `elcampito`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_emple` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `legajo` int(11) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emple`, `nombre`, `legajo`, `cargo`, `estado`) VALUES
(1, 'Pedro', 5898, 'enca', 'activo'),
(2, 'Martin', 5899, 'emple', 'activo'),
(3, 'Marcela', 8996, 'emple', 'activo'),
(4, 'Maria', 8956, 'enca', 'activo'),
(5, 'Micaela', 8796, 'emple', 'activo'),
(6, 'Ruben', 8946, 'emple', 'activo'),
(7, 'Roberto', 8396, 'emple', 'activo'),
(8, 'Jaime', 1996, 'emple', 'activo'),
(9, 'pedro', 45678, 'enca', 'activo'),
(10, 'Anibal', 7966, 'emple', 'baja'),
(11, 'Belen', 5611, 'enca', 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `local_empleado`
--

CREATE TABLE `local_empleado` (
  `id_emple` int(11) NOT NULL,
  `id_local` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `local_empleado`
--

INSERT INTO `local_empleado` (`id_emple`, `id_local`) VALUES
(1, 1),
(6, 1),
(7, 2),
(3, 5),
(4, 5),
(8, 5),
(2, 6),
(5, 6),
(9, 6),
(10, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `local_producto`
--

CREATE TABLE `local_producto` (
  `id_prod` int(11) NOT NULL,
  `id_local` int(11) NOT NULL,
  `comprada` tinyint(1) NOT NULL DEFAULT '0',
  `comprador` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `local_producto`
--

INSERT INTO `local_producto` (`id_prod`, `id_local`, `comprada`, `comprador`) VALUES
(1, 1, 0, ''),
(2, 3, 1, '9'),
(3, 2, 1, '8'),
(5, 6, 1, '9'),
(6, 7, 1, '9'),
(7, 7, 1, '8');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_prod` int(11) NOT NULL,
  `produDir` varchar(50) NOT NULL,
  `fotoProd1` varchar(50) NOT NULL,
  `fotoProd2` varchar(50) NOT NULL,
  `fotoProd3` varchar(50) NOT NULL,
  `precio` int(11) NOT NULL,
  `oferta` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_prod`, `produDir`, `fotoProd1`, `fotoProd2`, `fotoProd3`, `precio`, `oferta`) VALUES
(1, 'Bacacay 3112', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png', 5656, 1),
(2, 'Franco 3303', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png', 42545, 1),
(3, 'Av. San Martin 3703', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png', 4256, 0),
(4, 'peron 488', 'peron 488-1.jpg', 'peron 488-2.jpg', 'peron 488-3.jpg', 1254, 0),
(5, 'Castelli 789', 'Castelli 789-1.jpg', 'Castelli 789-2.jpg', 'Castelli 789-3.jpg', 78122, 0),
(6, 'rivadavia 789', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png', 20003, 0),
(7, 'campana 98', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png', 20010, 0),
(10, 'Av. San Martin 201113', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png', 20018, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `id_sucu` int(11) NOT NULL,
  `localDir` varchar(50) NOT NULL,
  `fotoLocal1` varchar(50) NOT NULL,
  `fotoLocal2` varchar(50) NOT NULL,
  `fotoLocal3` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`id_sucu`, `localDir`, `fotoLocal1`, `fotoLocal2`, `fotoLocal3`) VALUES
(1, 'Heleguera y Rivadavia', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png'),
(2, 'Heleguera y Bacacay', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png'),
(3, 'Heleguera y Pacheco', 'pordefecto.png', 'pordefecto.png', 'pordefecto.png'),
(5, 'Av. San Martin 2013', 'Av. San Martin 2013-1.jpg', 'Av. San Martin 2013-2.jpg', 'Av. San Martin 2013-3.jpg'),
(6, 'Franco 3330', 'Franco 3330-1.jpg', 'Franco 3330-2.jpg', 'Franco 3330-3.jpg'),
(7, 'Av. Belgrano 2368', 'Av. Belgrano 2368-1.jpg', 'Av. Belgrano 2368-2.jpg', 'Av. Belgrano 2368-3.jpg'),
(8, 'peron 1212', 'peron 1212-1.jpg', 'peron 1212-2.jpg', 'peron 1212-3.jpg'),
(10, 'Cabildo 9984', 'Cabildo 9984-1.jpg', 'Cabildo 9984-2.jpg', 'Cabildo 9984-3.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` int(11) NOT NULL,
  `perfil` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `perfil`, `email`, `estado`) VALUES
(6, 'matias', 444, 'admin', 'admin@administrador', 'activo'),
(7, 'encargado', 321, 'enca', 'enca@encargado', 'activo'),
(8, 'empleado', 454, 'emple', 'emple@empleado', 'activo'),
(9, 'cliente', 123, 'clien', 'clien@cliente', 'activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_emple`);

--
-- Indices de la tabla `local_empleado`
--
ALTER TABLE `local_empleado`
  ADD PRIMARY KEY (`id_emple`),
  ADD KEY `id-local` (`id_local`);

--
-- Indices de la tabla `local_producto`
--
ALTER TABLE `local_producto`
  ADD PRIMARY KEY (`id_prod`),
  ADD KEY `id-local` (`id_local`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_prod`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`id_sucu`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_emple` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `id_sucu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `local_empleado`
--
ALTER TABLE `local_empleado`
  ADD CONSTRAINT `empleado` FOREIGN KEY (`id_emple`) REFERENCES `empleados` (`id_emple`),
  ADD CONSTRAINT `local` FOREIGN KEY (`id_local`) REFERENCES `sucursales` (`id_sucu`);

--
-- Filtros para la tabla `local_producto`
--
ALTER TABLE `local_producto`
  ADD CONSTRAINT `locales` FOREIGN KEY (`id_local`) REFERENCES `sucursales` (`id_sucu`),
  ADD CONSTRAINT `producto` FOREIGN KEY (`id_prod`) REFERENCES `productos` (`id_prod`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
