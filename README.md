# Prerequisites

1. Node Js
 - to run javascript on sever side
2. Vs Code
 - to write code
3. Mongodb Community Server
 - to save dat in database
4. Postman  
 - to test api's
5. MongoCompass 
 - A GUI to see the stored data of db in json format




 # step 1: (Installations & Setup)
--------------------------------------------------------------------------------------------
 -> Download & Install all the above softwares from their official websites

 -> after installation is done check the node & npm version by running the command "node -v" or "node --version" 
    & "npm -v" or "npm --version"

 -> after installing Mongodb  we need to set the db path to save data in particular folder for that create a folder 
    called data in "c" drive and db folder in the data folder.
 
 -> after setting the db path set the environment variable for mongodb to run in any directory directly for that go
    to the downloaded mongodb folder and copy path up to bin like "C:\Program Files\MongoDB\Server\5.0\bin" then open the 
    edit environment  variables screen  and edit the path variable and the the mongodb path after that run the command 
    "mongod" in any directory and check mongodb running or not.

 -> after running the mongodb open the mongo compass and create a database or we can create from the node js project also
----------------------------------------------------------------------------------------------



# step 2 : (Project Setup)
-----------------------------------------------------------------------------------------------
 -> Create folder based on the project name which will act as root directory for entire project ex. ecomerce

 -> after creation of folder change directory the created folder in terminal and type the command "npm init" it creates package.json
    file in root directory to track the dependencies

 -> create a file called index.js or server.js as you like to start the node project this file will be the main & starting file to execute when server started

 -> to build apis  in node js we need a package called express we can download it from npm with the following command "npm install express --save" or "npm install express"
    the difference bw two commands is if we use --save flag it will added to package.json in dependencies list other wise it wont. read the documentation to understand how we 
    can use express to write apis.
 -> initialize the express server by importing and invoking , give a port number to make server listen on particular port. and run the index.js file by using command "node index.js" in root directory

 -> after that by using get,post,put,delete http methods etc will build the apis read the documentation to know how we can write apis.
-----------------------------------------------------------------------------------------------


# step 3 : Connecting to DB 
-----------------------------------------------------------------------------------------------

-> to connect mongodb in node js we use mongoose which is a npm package we can install it by command "npm install mongoose --save"

-> after installing we need to import mongoose and connect to db using connection string looks like  "mongodb://localhost:27017/ecommerce"
   
   localhost -> is the host name where mongodb running
   27017     -> is the port where mongodb server listening
   ecommerce -> data base name

-> after that create models(Collections) and their schemas and import these models where ever we want and use it to save,edit,delete and get the data from mongodb.
------------------------------------------------------------------------------------------------

# step 4 : testing the apis using postman
------------------------------------------------------------------------------------------------
-> Create the postman account and create a workspace

-> write down the apis we build with method name (get or post etc).

-> hit the apis we build with the data from postman and check the responses given if any errors rectify those.if all the data saved successfully can see in mongo compass
-------------------------------------------------------------------------------------------------

# step 5 : Using MongoCompass to see the data in db
-------------------------------------------------------------------------------------------------
-> Connect the mongo compass to local connection string after successful connection we can see the databases in out local system.

-> click on the particular db where you will see collections(tables) in the db 

-> click on the particular table then u can see the data in table that u created from postman.


# Concepts to understand
-------------------------------------
1. How to install npm modules
2. how to import installed modules and use it by reading their documentation.
3. http methods and how those will work
4. What is Api End point how actually it looks.
5. callbacks, promises , async await to control the flow of execution
6. structuring the folders


 


