function markdown(data) {
    return `

    # ${data.title} ![GitHub package.json version]
    
    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * [Credits](#credits)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.licenses}

    ## Contributing
    ${data.contribute}

    ## Tests
    ${data.tests}

    ## Questions
    ![Profile Avatar](${data.pfp})
    For any question please e-mail at ${data.email}.

    ## Credits
    Github: [${data.username}](${data.url})

    Copyright ${data.name}. All rights reserved.

    `;

};

module.exports = markdown;