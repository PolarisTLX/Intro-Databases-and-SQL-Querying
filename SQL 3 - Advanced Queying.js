//Moving onto advanced Queying

//CALCULATED COLUMNS

/*
KEYWORDS:

AS
INTO
"#"

DELETE
UPDATE

*/


//--CREATE NEW COLUMN IN EXISTING TABLE:  AS
SELECT NAME, LISTPRICE, LISTPRICE + 10 AS ADJUSTED_LIST_PRICE FROM [Production].[Product]


//--CREATE A NEW PERMANENT TABLE IN THE DATABASE: INTO
SELECT NAME, LISTPRICE, LISTPRICE + 10 AS ADJUSTED_LIST_PRICE INTO [Production].[Product_2] FROM [Production].[Product]

SELECT * FROM [Production].[Product_2]

//--CREATE A TEMPORARY TABLE:  #tempname
SELECT NAME, LISTPRICE, LISTPRICE + 10 AS ADJUSTED_LIST_PRICE INTO #tempname FROM [Production].[Product]

SELECT * FROM #tempname

//--DELETE DATA FROM TABLE
DELETE FROM [Production].[Product_2] WHERE NAME LIKE 'Bearing Ball'

//--SAME BUT NICER TO READ
DELETE FROM [Production].[Product_2]
WHERE NAME LIKE 'Bearing Ball'

/*--UPDATE:
--give condition of
--what should be updated:   SET NAME = 'BLADE_NEW'
--and what should be affected: WHERE NAME LIKE 'BLADE' */
UPDATE [Production].[Product_2]
SET NAME = 'BLADE_NEW'
WHERE NAME LIKE 'BLADE'
