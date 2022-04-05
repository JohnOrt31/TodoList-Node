const { v4: uuidv4 } = require('uuid');

class Task {
    id = '';
    descr = '';
    completedIn = null;

    constructor(descr) {
        this.id = uuidv4();
        this.descr = descr;
        this.completedIn = null;
    }
}

module.exports = Task;