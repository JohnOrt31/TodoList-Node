const Task = require("./task");

class Tasks {
    _list = {};

    get listArray() {
        const mylist = [];
        Object.keys(this._list).forEach(key => {
            const task  = this._list[key];
            mylist.push(task);
        })

        return mylist;
    }

    constructor() {
        this._list = {};
    }

    deleteTask( id = '' ) {
        if (this._list[id] ) {
            delete this._list[id];
        }

    }

    loadTaksFromArray ( tasks = [] ) {
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }

    addTask( descr = '' ) {
        const task = new Task(descr);

        this._list[task.id] = task;

    }

    completedList() {
        console.log();

        this.listArray.forEach( (task, i) => {
            const idx =  `${i + 1}`.green;
            const { descr, completedIn } = task;
            const status = ( completedIn ) ? 'Completed'.green : 'Pending'.red;

            console.log(`${ idx } ${ descr } :: ${ status }`);
        });
    }

    showPendingCompletedTasks( completed = true ) {
        console.log();

        let counter = 0;

        this.listArray.forEach( (task ) => {
            
            const { descr, completedIn } = task;
            const status = ( completedIn ) ? 'Completed'.green : 'Pending'.red;

            if ( completed ){
              
                if( completedIn ){
                    counter += 1;
                    console.log(`${ (counter+'.').green } ${ descr } :: ${ status }`);
                }
                    
            }else{
                if( !completedIn ){
                    counter += 1;
                    console.log(`${ (counter+'.').red } ${ descr } :: ${ status }`);
                }
            }
        });

    } 

    toggleCompleted( ids = [] ){
        ids.forEach( id => {
            const task = this._list[id];
            if( !task.completedIn){
                task.completedIn = new Date().toISOString();
            }
        });

        this.listArray.forEach( task => {
            if( !ids.includes(task.id)){
                this._list[task.id].completedIn = null; 
            }
        })
    }


}

module.exports = Tasks;