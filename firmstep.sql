-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2017 at 01:47 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `firmstep`
--

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `Service_Id` int(11) NOT NULL,
  `Service_Name` varchar(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`Service_Id`, `Service_Name`) VALUES
(1, 'Housing'),
(2, 'Benifits'),
(3, 'Council Tax'),
(4, 'Fly-tipping'),
(5, 'Missed Bin');

-- --------------------------------------------------------

--
-- Table structure for table `service_que`
--

CREATE TABLE `service_que` (
  `Id` int(11) NOT NULL,
  `Type` varchar(15) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Service_Name` varchar(15) NOT NULL,
  `Queued_Time` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service_que`
--

INSERT INTO `service_que` (`Id`, `Type`, `Name`, `Service_Name`, `Queued_Time`) VALUES
(1, 'Citizen', 'Mr. Jon Snow', 'Missed Bin', '10:11:00'),
(2, 'Citizen', 'Mrs. Lois Griffin', 'Housing', '10:47:00'),
(3, 'Organisation', 'Brian', 'Fly-Tipping', '10:52:00'),
(4, 'Anonymos', 'Anonymos', 'Fly-Tippping', '11:06:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`Service_Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
