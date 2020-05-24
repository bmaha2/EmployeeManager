
const menu = [
    {
        type: 'rawlist',
        name: 'listing',
        message: 'What would to like to do?',
        choices:
            ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'Exit']
    }
];

const addEmployee = roleData=> [
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
        type: "rawlist",
        name: "title",
        message: "What will be new employee's role? ",
        choices: roleData.map(role=>({name: role.title, value: role.id}))
    }
]

module.exports = {menu, addEmployee};

