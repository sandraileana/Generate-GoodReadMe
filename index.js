const inquirer = require('inquirer');

const fs = require('fs');

const api = require('./utilities/api');

const markdown = require('./utilities/markdown');

const questions = [
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a brief project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the installation process: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage of the project: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the licenses used for the project: ",
        name: "licenses"
    },
    {
        type: "input",
        message: "Enter the contribuiting information: ",
        name: "contribute"
    },
    {
        type: "input",
        message: "Enter any tests you are running for your project: ",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter your e-mail: ",
        name: "email"
    }
];

function init(){
    return inquirer.prompt(questions);
};

function writeToFile(fileName, data){
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log("README written successfully");
    });
};

init()

.then(answers => markdown(answers))
.then(ReadMeGenerated => writeToFile('ReadMeGenerated.md', ReadMeGenerated))
.catch(err => {
    console.log(err);
});

// {
//         const UserName = answers.username;
//         const ApiData = api.getUser(UserName);
//         ApiData.then(res => {
//             const data = 
//             {
//                 name: res.name,
//                 username: answers.username,
//                 url: res.html_url,
//                 title: answers.title,
//                 description: answers.description, 
//                 installation: answers.installation,
//                 usages: answers.usage,
//                 licenses: answers.licenses,
//                 tests: answers.tests,
//                 contribute: answers.contribute,
//                 email: res.email,
//                 pfp: res.avatar_url
//             }
//             const final = markdown(data)
//             writeToFile("./output/README.md", final);
//         })
//         .cathc(err => {
//             console.log('err ', err);
//         });
//     });
// };

