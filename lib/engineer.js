const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super (name,id, email);
        this.gitHub = github;
        this.title = "Engineer";
    };
    getGitHub(){
        return this.gitHub;
    };
    getRole(){
        return this.title;
    }
}

module.exports = Engineer