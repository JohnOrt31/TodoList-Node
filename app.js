require('colors');

const { 
    inquirerMenu, 
    pause, 
    readInput,
    listDeleteTasks,
    confirm,
    showListCheckList
 } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();

    const taskDB = readDB();

    if( taskDB ) { // load tasks
        tasks.loadTaksFromArray( taskDB );

    }


    do {
        opt = await inquirerMenu(); 

        switch (opt) {
            case '1':
                // Add task
                const descr = await readInput('Description: ');
                tasks.addTask( descr );
            break;

            case '2':
                tasks.completedList();
            break;

            case '3':
                tasks.showPendingCompletedTasks(true);
            break;

            case '4':
                tasks.showPendingCompletedTasks(false); 
            break;

            case '5':
                const ids = await showListCheckList( tasks.listArray );
                tasks.toggleCompleted( ids );
                
            break;

            case '6':
                const id =  await listDeleteTasks( tasks.listArray);
                if( id !== '0'){
                    const ok = await confirm('Are you sure?');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('Task deleted');
                    }
                }
                
            break;
        
            default:
                break;
        }

        saveDB( tasks.listArray );
       
        await pause();
          
    } while ( opt !== '0' );
    
}

main();