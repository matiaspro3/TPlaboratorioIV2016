-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2016 a las 16:28:03
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
  `cargo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emple`, `nombre`, `legajo`, `cargo`) VALUES
(1, 'Pedro', 5898, 'enca'),
(2, 'Martin', 5899, 'emple'),
(3, 'Marcela', 8996, 'emple'),
(4, 'Maria', 8956, 'enca'),
(5, 'Micaela', 8796, 'emple'),
(6, 'Ruben', 8946, 'emple'),
(7, 'Roberto', 8396, 'emple'),
(8, 'Jaime', 1996, 'emple');

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
(2, 1),
(3, 1),
(6, 1),
(4, 2),
(7, 2),
(8, 2),
(5, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `local_producto`
--

CREATE TABLE `local_producto` (
  `id_prod` int(11) NOT NULL,
  `id_local` int(11) NOT NULL,
  `comprada` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `local_producto`
--

INSERT INTO `local_producto` (`id_prod`, `id_local`, `comprada`) VALUES
(1, 1, 0),
(2, 1, 1),
(3, 2, 0);

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
  `oferta` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_prod`, `produDir`, `fotoProd1`, `fotoProd2`, `fotoProd3`, `oferta`) VALUES
(1, 'Bacacay 3112', '', '', '', 1),
(2, 'Franco 3303', '', '', '', 1),
(3, 'Av. San Martin 3703', '', '', '', 0);

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
(1, 'Heleguera y Rivadavia', '', '', ''),
(2, 'Heleguera y Bacacay', '', '', ''),
(3, 'Heleguera y Pacheco', '', '', '');

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
  `pathfoto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `perfil`, `email`, `pathfoto`) VALUES
(6, 'matias', 444, 'admin', 'admin@administrador', ''),
(7, 'encargado', 321, 'enca', 'enca@encargado', ''),
(8, 'empleado', 454, 'emple', 'emple@empleado', ''),
(9, 'cliente', 123, 'clien', 'clien@cliente', '');

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
  MODIFY `id_emple` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `id_sucu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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
