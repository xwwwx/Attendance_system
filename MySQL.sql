-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- 主機: localhost
-- 產生時間： 2018 年 04 月 10 日 09:47
-- 伺服器版本: 5.7.17-log
-- PHP 版本： 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： ``
--

-- --------------------------------------------------------

--
-- 資料表結構 `absence`
--

CREATE TABLE `absence` (
  `absence_id` varchar(14) COLLATE utf8_unicode_520_ci NOT NULL,
  `course_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `absence_student`
--

CREATE TABLE `absence_student` (
  `absence_student_id` int(10) UNSIGNED NOT NULL,
  `absence_id` varchar(14) COLLATE utf8_unicode_520_ci NOT NULL,
  `absence_lesson` varchar(20) COLLATE utf8_unicode_520_ci NOT NULL,
  `student_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

CREATE TABLE `account` (
  `account_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `account_password` varchar(64) COLLATE utf8_unicode_520_ci NOT NULL,
  `identity` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `administer`
--

CREATE TABLE `administer` (
  `administer_id` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL,
  `administer_name` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `administer_birthday` date NOT NULL,
  `administer_gender` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `administer_email` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class`
--

CREATE TABLE `class` (
  `class_id` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL,
  `class_name` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `teacher_id` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `course`
--

CREATE TABLE `course` (
  `course_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `course_name` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL,
  `course_lesson` varchar(20) COLLATE utf8_unicode_520_ci NOT NULL,
  `course_day` int(1) NOT NULL,
  `teacher_id` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL,
  `student_limit` int(3) NOT NULL,
  `class_id` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL,
  `classroom` varchar(6) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `course_student`
--

CREATE TABLE `course_student` (
  `course_student_id` int(11) NOT NULL,
  `student_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `course_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `leaves`
--

CREATE TABLE `leaves` (
  `leaves_id` int(10) UNSIGNED NOT NULL,
  `leaves_day` date NOT NULL,
  `leaves_kind` varchar(1) COLLATE utf8_unicode_520_ci NOT NULL,
  `leaves_reason` varchar(200) COLLATE utf8_unicode_520_ci NOT NULL,
  `leaves_check_state` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `leaves_lesson` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL,
  `student_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `student`
--

CREATE TABLE `student` (
  `student_id` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `student_name` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `student_email` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL,
  `student_gender` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `student_birthday` date NOT NULL,
  `class_id` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `teacher`
--

CREATE TABLE `teacher` (
  `teacher_id` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL,
  `teacher_name` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `teacher_gender` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL,
  `teacher_birthday` date NOT NULL,
  `teacher_email` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`absence_id`);

--
-- 資料表索引 `absence_student`
--
ALTER TABLE `absence_student`
  ADD PRIMARY KEY (`absence_student_id`);

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`);

--
-- 資料表索引 `administer`
--
ALTER TABLE `administer`
  ADD PRIMARY KEY (`administer_id`);

--
-- 資料表索引 `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`);

--
-- 資料表索引 `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- 資料表索引 `course_student`
--
ALTER TABLE `course_student`
  ADD PRIMARY KEY (`course_student_id`);

--
-- 資料表索引 `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`leaves_id`);

--
-- 資料表索引 `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- 資料表索引 `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `absence_student`
--
ALTER TABLE `absence_student`
  MODIFY `absence_student_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用資料表 AUTO_INCREMENT `course_student`
--
ALTER TABLE `course_student`
  MODIFY `course_student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- 使用資料表 AUTO_INCREMENT `leaves`
--
ALTER TABLE `leaves`
  MODIFY `leaves_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
