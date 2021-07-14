// import lib classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// import fs and node inquirer 
const fs = require("fs");
const inquirer = require("inquirer");

// init array
const team = [];

// init application, called at bottom
function initialise() {
//  initHTML
 addTeamMember();
}

function addTeamMember() {
 inquirer.prompt([{
     message: "Please enter the name of the team member you would like to add:",
     name: "name"
    },

    {
     type: "list",
     message: "Please choose the team member's role:",
     choices: [
         "Engineer",
         "Intern",
         "Manager"
        ],
         name: "role"
    },

    {
     message: "Please enter team member's id number:",
     name: "id"
    },

    {
     message: "Please enter team member's email address:",
     name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleSelect = "";
        if (role === "Engineer") {
         roleSelect = "GitHub:";
        } else if (role === "Intern") {
         roleSelect = "School:";
        } else {
         roleSelect = "Office Number:";
        }
        inquirer.prompt([{
         message: `Enter team member's ${roleSelect}`,
         name: "roleSelect"
        },
        {
         type: "list",
         message: "Would you like to anyone else to the team?",
         choices: [
             "Yes",
             "No"
            ],
         name: "addMore"
        }])

        .then(function({roleSelect, addMore}) {
         let newMember;

            if (role === "Engineer") {
             newMember = new Engineer(name, id, email, roleSelect);
            } else if (role === "Intern") {
             newMember = new Intern(name, id, email, roleSelect);
            } else {
             newMember = new Manager(name, id, email, roleSelect);
            }
            team.push(newMember);
            appendHtml(newMember)
            .then(function() {
             if (addMore === "yes") {
                 addMember();
                } else {
                 finaliseHtml();
                }
            });
            
        });
    });
}

// initialises empty html with styling etc
function initHTML() {

}
// appends new members to html
function appendHtml(newMember){

}


initialise();