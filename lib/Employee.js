// constructor for employee
class Employee {

 constructor (name, id, email) {
     this.name = name;
     this.id = id;
     this.email = email;
    }

    // returns employee name from given input
    getName () {
     return this.name;
    }

    // returns employeeID from given input
    getId () {
     return this.id;
    }   

    // returns employee email from given input
    getEmail () {
     return this.email;
    }

    // returns employee role from given input 
    getRole () {
     return 'Employee'; 
    }
};

module.exports = Employee; 

