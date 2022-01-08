
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){

        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }

    // overrides employee method
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;