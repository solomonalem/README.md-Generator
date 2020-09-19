// function to generate markdown for README
function licenseCreator(arr) {
  arr.forEach((el) => {
    return `![License: ${el}](https://img.shields.io/badge/License-${el}-lightgrey.svg)`;
  });
}
function generateMarkdown(data) {
  const { name, license, description, installation, usage, credits } = data;
  console.log(data);

  // console.log("line-19");
  // console.log("qqq" + license);
  // console.log("we" + license);
  // console.log(licenseCreator(license));
  return `# ${name}


## Description 
${description}
## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}
## Usage 
${usage}

## Credits
${credits}

## License

${license.map((el) => {
  return `![License: ${el}](https://img.shields.io/badge/License-${el}-lightgrey.svg)\n`;
})}


## Badges

## Contributing

## Tests

`;
}

module.exports = generateMarkdown;
