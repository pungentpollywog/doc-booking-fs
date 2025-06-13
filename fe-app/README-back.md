# Doctors Office App - Backend project 

## Tasks

Create a simple CRUD (Create, Read, Update, Delete) RESTful API application using Express.js and either MongoDB Node driver or Mongoose. 
For each resource (doctors, patients, doctor-schedules, appointments, results, etc.) provide routing and CRUD operations. Note: see if you can work smart and DRY up your code by using a generic controller for common functionality. Then just change the resource name in each resource's router module accordingly. 

If using Mongoose, define **Schema** and **models** for each resource. 

Be sure to add error handling in each middleware function using `try-catch`.

Be sure to connect and disconnect from the Mongo DB instance too. Connect in the `try` block and disconnect in a `finally` block. 

Add pagination when reading all resources.

## Setup (Locally on your PC)
Setup a JavaScript project for a new express app by running the following commands. (Note you can use either `mongodb` or `mongoose` in the **npm install** command below.)

```bash
mkdir doctors-office-api
cd doctors-office-api
npm init   # (When prompted, specify app.js as the start file.) 
git init
echo 'node_modules/' > .gitignore
npm install express body-parser mongodb mongoose cors --registry http://192.168.1.49:4873
```

Open VSCode with: `code .`  

Add `"type": "module"`, to the `package.json` file.

Create a file called `app.js` and add your server code.

## Create a Gitlab project

Create a new, blank project in Gitlab in your namespace called **doctors-office-api**. 

Remember to uncheck the README file create option. 

Get the project URL located behind the Code button.

In your Git bash terminal, set the remote using the following command. 
```bash
git remote add origin <url>
```
Then, add, commit, and push up your main branch.  

