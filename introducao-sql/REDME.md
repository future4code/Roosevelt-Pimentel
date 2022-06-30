USE `joy-419969-roosevelt-pimentel`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Carlinhos Brown",
  1200000,
  "1963-08-23", 
  "male"
);

	<!-- #	Time	Action	Message	Duration / Fetch
3	1	22:55:38	CREATE TABLE Actor (
     id VARCHAR(255) PRIMARY KEY,
     name VARCHAR (255) NOT NULL,
     salary FLOAT NOT NULL,
     birth_date DATE NOT NULL,
     gender VARCHAR(6) NOT NULL
 )	0 row(s) affected	0.172 sec
0	2	23:01:09	INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "002", 
   "Glória Pires",
   "1.200.000",
   "1963-08-23", 
   "male"
 )	Error Code: 1265. Data truncated for column 'salary' at row 1	0.140 sec
3	3	23:01:24	INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "002", 
   "Glória Pires",
   1200000,
   "1963-08-23", 
   "male"
 )	1 row(s) affected	0.157 sec
0	4	23:01:53	INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "002", 
   "Carlinhos Brown",
   1200000,
   "1963-08-23", 
   "male"
 )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.141 sec
0	5	23:06:08	INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "003", 
   "Marina Rui Barbosa",
   1500000,
   "1986-22-18", 
   "woman"
 )	Error Code: 1292. Incorrect date value: '1986-22-18' for column 'birth_date' at row 1	0.140 sec -->