const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your project name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "What is your project username? (Required)",
    validate: (usernameInput) => {
      if (usernameInput) {
        return true;
      } else {
        console.log("Please enter your username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your project email? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the project Description? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter your project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?  (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter steps required to install your project!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmUsage",
    message: "Would you like to enter some information how to use the project?",
    default: true,
  },
  {
    type: "input",
    name: "usage",
    message: "Provide some 'Usage' information:",
    when: ({ confirmUsage }) => confirmUsage,
  },
  {
    type: "confirm",
    name: "confirmCredits",
    message: "Would you like to enter any credits?",
    default: true,
  },
  {
    type: "input",
    name: "credits",
    message: "Provide some 'credits' information:",
    when: ({ confirmCredits }) => confirmCredits,
  },
  {
    type: "checkbox",
    name: "license",
    default: "ISC",
    message: "What did you this project with? (Check all that apply)",
    choices: [
      "EPL",
      "GPL",
      "IPL",
      "MIT",
      "MPL",
      "Perl",
      "OFL",
      "Unlicense",
      "WTFPL",
      "Zlib",
    ],
  },
];

const promptQuestions = () => {
  return inquirer.prompt(questions);
};

// function to write README file
// function writeToFile(fileName, data) {}

const writeToFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "README.md File created!",
      });
    });
  });
};

// function to initialize program
function init() {}

// function call to initialize program
init();
promptQuestions()
  .then((result) => {
    return generateMarkdown(result);
  })
  .then((readmeData) => {
    return writeToFile(readmeData);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  });
