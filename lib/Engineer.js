// imports Employee constructor
const Employee = require("./Employee");

// engineer constructor 
class Engineer extends Employee {
 constructor (name, id, email, github) {
     // employee constructor called
     super (name, id, email);
     // engineer needs github link
     this.github = github; 
    }
 // returns github link based on input
    getGithub () {
     return this.github;
    }
 // role override
    getRole () {
     return "Engineer";
    }
}

module.exports = Engineer; 