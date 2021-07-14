// imports Employee constructor
const Employee = require("./Employee");

// intern constructor 
class Intern extends Employee {
 constructor (name, id, email, school) {
     // employee constructor called
     super (name, id, email);
     // intern needs school link
     this.school = school; 
    }
 // returns school link based on input
    getschool () {
     return this.school;
    }
 // role override
    getRole () {
     return "Intern";
    }
}

module.exports = Intern; 