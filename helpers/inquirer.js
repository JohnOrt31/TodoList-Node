const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Add task`
            },
            {
                value: '2',
                name: `${ '2.'.green } Show tasks`
            },
            {
                value: '3',
                name: `${ '3.'.green } Show completed tasks`
            },
            {
                value: '4',
                name: `${ '4.'.green } Show pending tasks`
            },
            {
                value: '5',
                name: `${ '5.'.green } Complete task(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Delete task`
            },
            {
                value: '0',
                name: `${ '0.'.green } Exit`
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('====================='.green);
    console.log(' Select an option'.green);
    console.log('=====================\n'.green);
    const { option } = await inquirer.prompt(questions);
    return option;
}

const pause = async() => {
    const  question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue` 
        }
    ]

    console.log('\n')
    await inquirer.prompt(question)
}

const readInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'descr',
            message,
            validate( value ) {
                if( value.length === 0) {
                    return 'Please, enter a value'
                }
                return true;
            }
        }
    ];

    const { descr } = await inquirer.prompt(question);
    return descr;
}

module.exports = {
    inquirerMenu,
    pause, 
    readInput
}