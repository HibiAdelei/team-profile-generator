// imports Employee constructor
const Employee = require("./Employee");

// manager constructor 
class Manager extends Employee {
 constructor (name, id, email, officeNumber) {
     // employee constructor called
     super (name, id, email);
     // manager needs officeNumber link
     this.officeNumber = officeNumber; 
    }
 // returns officeNumber link based on input
    getofficeNumber () {
     return this.officeNumber;
    }
 // role override
    getRole () {
     return "Manager";
    }
}

module.exports = Manager; 