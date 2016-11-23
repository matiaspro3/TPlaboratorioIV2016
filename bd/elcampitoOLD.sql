-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-11-2016 a las 19:32:22
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
  `id-emple` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `legajo` int(11) NOT NULL,
  `cargo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id-emple`, `nombre`, `legajo`, `cargo`) VALUES
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
-- Estructura de tabla para la tabla `local-empleado`
--

CREATE TABLE `local-empleado` (
  `id-emple` int(11) NOT NULL,
  `id-local` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `local-empleado`
--

INSERT INTO `local-empleado` (`id-emple`, `id-local`) VALUES
(1, 1),
(2, 1),
(3, 1),
(5, 1),
(6, 1),
(4, 2),
(7, 2),
(8, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `local-producto`
--

CREATE TABLE `local-producto` (
  `id-prod` int(11) NOT NULL,
  `id-local` int(11) NOT NULL,
  `comprada` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `local-producto`
--

INSERT INTO `local-producto` (`id-prod`, `id-local`, `comprada`) VALUES
(1, 1, 0),
(2, 1, 1),
(3, 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id-prod` int(11) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `oferta` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id-prod`, `direccion`, `oferta`) VALUES
(1, 'Bacacay 3112', 0),
(2, 'Franco 3303', 1),
(3, 'Av. San Martin 3703', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `id-sucu` int(11) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `fotos1` varchar(50) NOT NULL,
  `foto2` varchar(50) NOT NULL,
  `foto3` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`id-sucu`, `direccion`, `fotos1`, `foto2`, `foto3`) VALUES
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
  ADD PRIMARY KEY (`id-emple`);

--
-- Indices de la tabla `local-empleado`
--
ALTER TABLE `local-empleado`
  ADD PRIMARY KEY (`id-emple`),
  ADD KEY `id-local` (`id-local`);

--
-- Indices de la tabla `local-producto`
--
ALTER TABLE `local-producto`
  ADD PRIMARY KEY (`id-prod`),
  ADD KEY `id-local` (`id-local`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id-prod`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`id-sucu`);

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
  MODIFY `id-emple` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id-prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `id-sucu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `local-empleado`
--
ALTER TABLE `local-empleado`
  ADD CONSTRAINT `empleado` FOREIGN KEY (`id-emple`) REFERENCES `empleados` (`id-emple`),
  ADD CONSTRAINT `local` FOREIGN KEY (`id-local`) REFERENCES `sucursales` (`id-sucu`);

--
-- Filtros para la tabla `local-producto`
--
ALTER TABLE `local-producto`
  ADD CONSTRAINT `locales` FOREIGN KEY (`id-local`) REFERENCES `sucursales` (`id-sucu`),
  ADD CONSTRAINT `producto` FOREIGN KEY (`id-prod`) REFERENCES `productos` (`id-prod`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
