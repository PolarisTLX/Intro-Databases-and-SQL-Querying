//Lesson 5 using MS sample database: AdventureWorks

//comments in SQL are done with --

use [AdventureWorks2012]
//use this database

//--PATTERN:
//--SELECT [column-name(s)] FROM [table-name]


SELECT * FROM [HumanResources].[Department]
//* means EVERTYTHING/ ALL COLUNMS

//--SHOW ME ALL THE DEPARTMENT NAMES ONLY
SELECT NAME FROM [HumanResources].[Department]

//--SHOW ME ALL THE GROUPS
SELECT GROUPNAME FROM [HumanResources].[Department]

//--SHOW ME ALL DISTINCT(unique) GROUPS
SELECT DISTINCT GROUPNAME FROM [HumanResources].[Department]

//--SHOW ANY RECORD WITH THE WORD "MANUFACTURING" IN IT
SELECT NAME, GROUPNAME FROM [HumanResources].[Department]
WHERE GROUPNAME LIKE 'MANUFACTURING'


//--GIVE ALL EMPLOYEES FROM THE EMPLOYEE TABLE
SELECT * FROM [HumanResources].[Employee]

//--GIVE LIST OF ALL EMPLOYEES WHO HAVE ORG-LEVEL = 2
SELECT * FROM [HumanResources].[Employee] WHERE ORGANIZATIONLEVEL = 2

//--GIVE LIST OF ALL EMPLOYEES WHO HAVE ORG-LEVEL = 2 or 3
SELECT * FROM [HumanResources].[Employee] WHERE ORGANIZATIONLEVEL IN(2,3)

//--GIVE LIST OF EMPLOYEES WHO HAVE TITLE = FACILITIES MANAGER
SELECT * FROM [HumanResources].[Employee] WHERE JOBTITLE LIKE 'Facilities Manager'

//--SAME BUT spelled in different case = same result, so text is not case sensitive
//--GIVE LIST OF EMPLOYEES WHO HAVE TITLE = FACILITIES MANAGER
SELECT * FROM [HumanResources].[Employee] WHERE JOBTITLE LIKE 'FACILITIES MANAGER'

//--GIVE LIST OF EMPLOYEES WHO THE WORD MANAGER IN THE TITLE
SELECT * FROM [HumanResources].[Employee] WHERE JOBTITLE LIKE 'Manager'
//--GIVES no results because nothing is EXACT match to "manager"

//--SAME BUT WITH % symbol
//--GIVE LIST OF EMPLOYEES WHO THE WORD %MANAGER IN THE TITLE
SELECT * FROM [HumanResources].[Employee] WHERE JOBTITLE LIKE '%Manager'
//--'%Manager' means anything can be before the word manager, but nothing can be after it
//--GIVES no results because nothing is EXACT match to "manager"

//--SAME BUT WITH % symbol before and after
//--GIVE LIST OF EMPLOYEES WHO THE WORD %Control% IN THE TITLE
SELECT * FROM [HumanResources].[Employee] WHERE JOBTITLE LIKE '%Control%'
//--'%Control%' means anything can be before OR after the word control

//--GIVE ALL EMPLOYEES WHO ARE BORN AFTER Jan-1-1980
SELECT * FROM [HumanResources].[Employee] WHERE Birthdate > '1/1/1980'

//--GIVE ALL EMPLOYEES WHO ARE BORN between Jan-1-1970 and Jan-1-1980
SELECT * FROM [HumanResources].[Employee] WHERE Birthdate > '1/1/1970' AND Birthdate < '1/1/1980'
//--OR
SELECT * FROM [HumanResources].[Employee] WHERE Birthdate BETWEEN '1/1/1970' AND '1/1/1980'
//--Also works
