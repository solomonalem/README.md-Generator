// function to generate markdown for README
function licenseCreator(arr) {
  arr.forEach((el) => {
    return `![License: ${el}](https://img.shields.io/badge/License-${el}-lightgrey.svg)`;
  });
}
function generateMarkdown(data) {
  const {
    name,
    username,
    email,
    license,
    description,
    installation,
    usage,
    credits,
  } = data;
  console.log(data);

  const usages = () => {
    if (usage) {
      return `## Usage\n ${usage}`;
    }
    return "";
  };
  const credit = () => {
    if (credits) {
      return `## Credits\n ${credits}`;
    }
    return "";
  };
  const user = () => {
    if (username) {
      return `[My Github Profile](https://github.com/${username})`;
    }
    return "";
  };
  const emailAddress = () => {
    if (email) {
      return `Email : ${email}`;
    }
    return "";
  };
  const installationSteps = () => {
    if (installation) {
      return `##Installation\n${installation}`;
    }
    return "";
  };

  return `# ${name}

  ${license.map((el) => {
    return `![License: ${el}](https://img.shields.io/badge/License-${el}-green.svg)\n`;
  })}

  

## Description 
${description}
## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}

${usages()}


${credit()}
${user()}

## License

${license.map((el) => {
  return `![License: ${el}](https://img.shields.io/badge/License-${el}-lightgrey.svg)\n`;
})}

## Contributing

${installationSteps()}


## Tests
## How to reach me with additional questions
${emailAddress()}
`;
}

module.exports = generateMarkdown;
