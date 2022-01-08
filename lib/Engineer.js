
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        // passes arguments to employee class constructor to initialize properties
        // on this engineer class constructor.
        super(name, id, email);

        this.github = github;
    }

    getGithub(){
        return this.github
    }

    // overrides employee method
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;