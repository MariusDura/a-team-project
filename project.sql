-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017 m. Geg 21 d. 13:36
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_lithuanian_ci NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `useriai`
--

CREATE TABLE `useriai` (
  `ID` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Sukurta duomenų kopija lentelei `useriai`
--

INSERT INTO `useriai` (`ID`, `firstname`, `lastname`, `email`, `password`) VALUES
(18, 'Marius', 'Marius', 'laboras@email.com', 'Laboras11'),
(21, 'Marius', 'Marius', 'laboras@email.coms', 'Laboras11'),
(24, 'Marius', 'Marius', 'laboras@email.com1', 'Laboras11'),
(25, 'Marius', 'Marius', 'labor@g', 'Laboras11'),
(26, 'MMMMM', 'AAAAMM', 'emailas@email.com', 'Emailas1'),
(27, 'testas', 'testas', 'test@test.com', 'Slaptazodis123'),
(28, 'MKJKJKL', 'KLKLKL', 'test@test', 'Testas123'),
(30, 'MKJKJKL', 'KLKLKL', 'test@test1', 'Testas123'),
(31, 'asdasda', 'asdasda', 'test1@test', 'sha1$4214ffde$1$9e5d0646c4e7188771fee362ee78e761594bd93b'),
(32, 'asdasdas', 'sadasdasda', 'taip@taip.com', 'sha1$0e8e3a15$1$e36a1b705b15224d77ae32c2ccbe775992e6d1c1'),
(33, 'Haroldas', 'Haroldas', 'haroldas@gmail.com', 'sha1$9e1bcde1$1$b235a88d83373cd3e4ee6775f2f714b31fa577db'),
(34, 'test', 'test', 'test@test1.com', 'sha1$1bf67a8f$1$f25473192047fac5df6dd0897de607700fa62822'),
(35, 'test', 'testst', 'test11@test.com', 'sha1$d59c37a9$1$36f03bd6ac3139d97612e4d19a5d8a6a066c9761'),
(36, 'AAAAA', 'aAAA', 'tetetetet@gmail.com', 'sha1$4a35b490$1$67a90a29caa26e59fb1156cc042ab7252a15ba6f');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `useriai`
--
ALTER TABLE `useriai`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
--
-- AUTO_INCREMENT for table `useriai`
--
ALTER TABLE `useriai`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
