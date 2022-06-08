const mysql = require("mysql2")
const inquirer = require("inquirer")
require("console.table")
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database:"employee_tracker"
})
connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to Employee tracker back end app")
    console.log("-----------------------------------------------")
    init()
})
function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View Department", "View Roles", "View Employees", "Add Department", "Add Roles", "Add Employees", "Update Employee Role", "Exit App"],
            name: "userselection"
        }
    ]).then(function (response) {
        switch (response.userselection) {
            case "View Department":
                viewDept()
                break;
            case "View Roles":
                viewRol()
                break;
            case "View Employees":
                viewEmp()
                break;
            case "Add Department":
                addDept()
                break;
            case "Add Roles":
                addrol()
                break;

            case "Add Employees":
                addemp()
                break;
            case "Update Employee Role":
                updateEmpRol()
                break;
            case "Exit App":
                connection.end()
                process.exit(0)
                break;

        }
    })
}

function viewDept(){
    connection.query("select * from department;",function(err,data){
        if(err)console.log(err)
        console.table(data)
        init()
    })
}
function viewRol(){
    connection.query("select * from roles;",function(err,data){
        if(err)console.log(err)
        console.table(data)
        init()
    })
}
function viewEmp(){
    connection.query("select * from employee;",function(err,data){
        if(err)console.log(err)
        console.table(data)
        init()
    })
}