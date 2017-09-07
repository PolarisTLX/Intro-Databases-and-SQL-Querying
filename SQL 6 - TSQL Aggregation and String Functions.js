//--TSQL AGGREGATE FUNCTIONS & STRING WORD FUNCTIONS

/*
KEYWORDS:



*/

//--AGGREGATE FUNCTIONS:

SELECT * FROM MYSALARY

SELECT AVG(SALARY) FROM MYSALARY
SELECT SUM(SALARY) FROM MYSALARY
SELECT MIN(SALARY) FROM MYSALARY
SELECT MAX(SALARY) FROM MYSALARY
//--total number of entires:
SELECT COUNT(SALARY) FROM MYSALARY


SELECT COUNT(*) FROM MYSALARY
//--this stil gives the same as above
//because COUNT is an operator that just looks at number of rows



//--STRING FUNCTIONS

SELECT * FROM MYORDER

//--CONCAT/Join 2 strings together
PRINT CONCAT('String 1', 'String 2')

//Join a final string made up from data from various columns in a row in a table into a new column
SELECT ORDERNUMBER, ORDERNAME, CONCAT(ORDERNUMBER, ' ', ORDERNAME) AS JOINEDTEXT FROM MYORDER

//--RAND():  Random number between 0 and 1
PRINT RAND()

SELECT ORDERNUMBER, ORDERNAME, CONCAT(ORDERNUMBER, '  ', RAND()) AS JOINEDTEXT FROM MYORDER


//--LEFT function:
//--Get the first 3 characters from the rows in the column called ORDERNAME
SELECT ORDERNUMBER, ORDERNAME, LEFT(ORDERNAME, 3) FROM MYORDER
//--RIGHT function
SELECT ORDERNUMBER, ORDERNAME, RIGHT(ORDERNAME, 3) FROM MYORDER


//--Character from the middle??
//--SUBSTRING([column name, start character, number of caracters desired)
SELECT ORDERNUMBER, ORDERNAME, SUBSTRING(ORDERNAME, 3, 2) FROM MYORDER


//--LOWERCASE / UPPERCASE
SELECT ORDERNUMBER, ORDERNAME, LOWER(ORDERNAME) FROM MYORDER

//--LEN:   LENGTH of a string
SELECT ORDERNUMBER, ORDERNAME, LEN(ORDERNAME) AS LENGTHOFORDERNAME FROM MYORDER


/*
--First letter as Uppercase and the rest as lowercase
--Get the first letter in upper case:  UPPER(LEFT(ORDERNAME, 1))
--lowercase the rest of the letters, from the 2nd character, to the last character:
--LOWER(SUBSTING(ORDERNAME, 2, LEN(ORDERNAME)))
--the last character is LEN(ORDERNAME)
--join both with CONCAT()  */
SELECT ORDERNUMBER, ORDERNAME, CONCAT(UPPER(LEFT(ORDERNAME, 1)) , LOWER(SUBSTRING(ORDERNAME, 2, LEN(ORDERNAME)))) FROM MYORDER




//--TRIM (to remove spaces)


SELECT LEN('     Textwithspaces        ')
//--returns 19 characters

//--LTRIM / RTRIM
SELECT RTRIM('     Textwithspaces        ')
SELECT LTRIM('     Textwithspaces        ')
//remove whitespace from both sides
SELECT LTRIM(RTRIM('     Textwithspaces        '))
