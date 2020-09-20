function generateMarkdown(data) {
  const {
    name,
    username,
    email,
    license,
    description,
    installation,
    contribution,
    usage,
    test,
    credits,
  } = data;
  console.log(data);

  const descriptions = () => {
    if (description) {
      return `## Description\n ${description}`;
    }
    return "";
  };

  const installationSteps = () => {
    if (installation) {
      return `## Installation\n${installation}`;
    }
    return "";
  };
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

  const emailAddress = () => {
    if (email) {
      return `## How to reach me with additional questions\n Email : ${email}`;
    }
    return "";
  };

  const contr = () => {
    if (contribution) {
      console.log("00000" + contribution);
      return `## Contribution \n ${contribution}`;
    }
    return "";
  };
  const user = () => {
    if (username) {
      return `[My Github Profile](https://github.com/${username})`;
    }
    return "";
  };
  const testGuide = () => {
    if (test) {
      return "## Test \n``` javascript \n👉 " + test;
    }
    return "";
  };

  // return ---
  return `# ${name}

  ${license.map((el) => {
    return `![License: ${el}](https://img.shields.io/badge/License-${el}-green.svg)\n`;
  })}

  


${descriptions()}
##  Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


${installationSteps()}

${usages()}

${credit()}


## License

${license.map((el) => {
  return `![License: ${el}](https://img.shields.io/badge/License-${el}-green.svg)\n`;
})}


${contr()}

${user()}

${emailAddress()}

${testGuide()}
`;
}

module.exports = generateMarkdown;
