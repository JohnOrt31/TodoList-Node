require('colors');

const { 
    inquirerMenu, 
    pause, 
    readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    let opt = '';
    const tasks= new Tasks();

    do {
        opt = await inquirerMenu(); 

        switch (opt) {
            case '1':
                // Add task
                const descr = await readInput('Description: ');
                tasks.addTask( descr );
            break;

            case '2':
                console.log( tasks.listArray );
            break;
        
            default:
                break;
        }
       
        await pause();
          
    } while ( opt !== '0' );
    
}

main();