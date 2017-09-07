/*

SPECIAL KEYWORDS:
CREATE

DATABASE
TABLE

INT  = number
VARCHAR(50) = string with char limit of 50

*/

/*

This will be examples that are followed along and replicated
from udemy course  Introduction to Databases and SQL Querying


to create a new datbase in Microsoft SQL Server 2014 you type:  */
create database mytestdb

/*
then press on Execute (red !) Or F5

Can also create a new one by right clicking on "Databases"
in the Object Explorer on the left side and then select
"New Database", then name it and click OK.


to create a table type:  */

use mytestdb
//this specifies which database you want to create your new table in

create table mytesttable
(
rollno int,
firstname varchar(50),
lastname varchar(50)
)

//in one line:
CREATE TABLE MYEMPLOYEE (EMPLOYEEID INT, FIRSTNAME VARCHAR(20), LASTNAME VARCHAR(20))
//CREATE [what] [nameofthisnewthing] (columnName typeOfData, columnName typeOfData, columnName typeOfData)


//to insert data into a table type:

insert into mytesttable(rollno, firstname, lastname)
values(1, 'Paul', 'Rail')


//to retrive some data from that database type:

use mytestdb
select rollno, firstname, lastname from mytesttable


/*


*/
