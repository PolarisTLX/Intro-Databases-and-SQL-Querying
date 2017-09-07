//--TSQL DATE FUNCTIONS

/*
KEYWORDS:

GETDATE

DATEADD
DATEPART

*/



//--simple get current date:
SELECT GETDATE()

//--substract 2 days from this:
SELECT GETDATE()-2



//--DATEPART (time between two dates?)

//--Get current year
SELECT DATEPART(yyyy, GETDATE())
//--Get current month
SELECT DATEPART(mm, GETDATE())
//--Get current day
SELECT DATEPART(dd, GETDATE())

//--same but return it in a named column
SELECT DATEPART(yyyy, GETDATE()) AS YEARNUMBER



//--DATEADD

//--example: add 4 days to current date:
SELECT DATEADD(day, 4, GETDATE())
//--example: add 4 days to the date 7/4/2015:
SELECT DATEADD(day, 4, '7/4/2015')
//--example: add 4 months to the date 7/4/2015:
SELECT DATEADD(month, 4, '7/4/2015')


//--EXAMPLES from database
SELECT TOP 10 * FROM [Production].[WorkOrder]

SELECT workOrderID, ProductID, StartDate, EndDate, DATEDIFF(day, StartDate, EndDate) AS TotalDays
FROM [Production].[WorkOrder]



--Get previous day:
SELECT (DATEPART(day, GETDATE()) -1 )

/*
--Get first day of this month:
--If today is the 10th othe month
--then the previous day is the 9th
--so subtract the value of the prious day (9) from today (10), gives you the first day of this month */
SELECT DATEADD(dd, -(DATEPART(day, GETDATE()) -1 ), GETDATE())
