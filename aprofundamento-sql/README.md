ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

SHOW tables;

-- A) DROP COLUMN salary excluiria a coluna de salariio

-- B) Mudaria o sexo do ator

-- C) Alteraria o genero novamente

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

SELECT * FROM Actor;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET birth_date = "1981-03-12"
WHERE id = "003";

UPDATE Actor
SET name = "Will Smith"
WHERE id = "003";

UPDATE Actor
SET name = "Angelina Jolie"
WHERE id = "003";

DELETE FROM Actor WHERE name = "Nicolas Cage";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
    SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "male";

SELECT AVG(salary) FROM Actor


SELECT * FROM Actor LIMIT 3

SELECT * FROM Actor ORDER BY name ASC LIMIT 4


SELECT * FROM Actor ORDER BY name ASC LIMIT 4