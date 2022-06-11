const mysql = require("mysql2")
const inquirer = require("inquirer")
require("console.table")
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "employee_tracker"
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

function viewDept() {
    connection.query("select * from department;", function (err, data) {
        if (err) console.log(err)
        console.table(data)
        init()
    })
}
function viewRol() {
    connection.query("select * from roles;", function (err, data) {
        if (err) console.log(err)
        console.table(data)
        init()
    })
}
function viewEmp() {
    connection.query("select * from employee;", function (err, data) {
        if (err) console.log(err)
        console.table(data)
        init()
    })
}

function addDept() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter department_name",
            name: "department_name"
        },
       
          
        

    ]).then(({department_name}) => {
        connection.query("insert into department(department_name) values(?);",
            department_name, function (err, data) {
                if (err) console.log(err)
                console.table(data)
                init()
            })
    })
}

function addemp() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employee firstname",
            name: "first_name"
        },
        {
            type: "input",
            message: "Enter Employee lastname",
            name: "last_name"
        },
        {
            type: "list",
            message: "Enter Employee role",
            name: "role_id",
            choices: [
                { name: "Manager-IT", value: 1 },
                { name: "Manager_Accounting", value: 2 },
                { name: "Manager_Sales", value: 3 },
                { name: "Manager_Marketing", value: 4 },
                { name: "Intern-IT", value: 5 },
                { name: "Intern_Accounting", value: 6 },
                { name: "Intern_Sales", value: 7 },
                { name: "Intern_Marketing", value: 8 },
            ]
        },
        {
            type: "list",
            message: "Enter manager's id",
            name: "manager_id",
            choices: [
                { name: "Henry Goldman", value: 1 },
                { name: "Melvin Barr", value: 2 },
                { name: "Randy Kamal", value: 3 },
                { name: "Yasmin Malik", value: 4 }
            ]
        },

    ]).then(({ first_name, last_name, role_id, manager_id }) => {
        connection.query("insert into employee(first_name,last_name,role_id,manager_id) values(?,?,?,?);",
            [first_name, last_name, role_id, manager_id], function (err, data) {
                if (err) console.log(err)
                console.table(data)
                init()
            })
    })
}

function addrol() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter role Title",
            name: "title"
        },
        {
            type: "input",
            message: "Enter salary",
            name: "salary"
        },
        {
            type: "list",
            message: "Enter department_id",
            name: "deparment_id",
            choices: [
                { name: "IT", value: 1 },
                { name: "Accounting", value: 2 },
                { name: "Sales", value: 3 },
                { name: "Marketing", value: 4 },
                { name: "Production", value: 5}
                
            ]
        },
     

    ]).then(({ title, salary, department_id}) => {
        connection.query("insert into roles(title,salary,deparment_id) values(?,?,?);",
            [title, salary, department_id], function (err, data) {
                if (err) console.log(err)
                console.table(data)
                init()
            })
    })
}
function updateEmpRol(){

    inquirer.prompt([
       
        {
            type: "list",
            message: "Enter Employee role Id",
            name: "role_id",
            choices: [
                { name: "Manager-IT", value: 1 },
                { name: "Manager_Accounting", value: 2 },
                { name: "Manager_Sales", value: 3 },
                { name: "Manager_Marketing", value: 4 },
                { name: "Intern-IT", value: 5 },
                { name: "Intern_Accounting", value: 6 },
                { name: "Intern_Sales", value: 7 },
                { name: "Intern_Marketing", value: 8 },
            ]
        },
        {
            type: "list",
            message: "Enter employee_id",
            name: "employee_id",
            choices: [
                { name: "Henry Goldman", value: 1 },
                { name: "Melvin Barr", value: 2 },
                { name: "Randy Kamal", value: 3 },
                { name: "Yasmin Malik", value: 4 },
                { name: "Elvia Vreal", value: 5 },
                { name: "Perla Smith", value: 6 },
                { name: "Jean Pasco", value: 7 },
                { name: "Mo Zanaty", value: 8 }
            ]
        },

    ]).then(({ role_id, employee_id }) => {
        connection.query("update employee set role_id=? where id=?; ",
            [role_id, employee_id], function (err, data) {
                if (err) console.log(err)
                console.table(data)
                init()
            })
    })
}