
const menu = [
    {
        type: 'rawlist',
        name: 'listing',
        message: 'What would to like to do?',
        choices:
            ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'Exit']
    }
];

const addEmployee = [
    {
        type: "input",
        name: "first_name",
        message: "What is new employee's first name? "
    },
    {
        type: "input",
        name: "last_name",
        message: "What is new employee's last_name? "
    },
    {
        type: "input",
        name: "title",
        message: "What will be new employee's title? "
    },
    {
        type: "input",
        name: "salary",
        message: "What will be new employee's salary? "
    },
    {
        type: "rawlist",
        name: "department",
        message: "Which department will new employee assigned to?",
        choices: ["Legal", "Engineering", "Accounting", "Sales"] 
    },
    {
        type: "input",
        name: "department_id",
        message: "Enter Department_id 1 for Legal 2 for Engineering, 3 for Accounting 4 for Sales"
    }

]

module.exports = {menu, addEmployee};
