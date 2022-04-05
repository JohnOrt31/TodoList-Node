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

    addTask( descr = '' ) {
        const task = new Task(descr);

        this._list[task.id] = task;

    }

}

module.exports = Tasks;