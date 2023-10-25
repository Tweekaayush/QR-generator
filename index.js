import qr from 'qr-image'
import inquirer from 'inquirer';
import fs from "fs"

inquirer
  .prompt([
    {
        message:"Type your URL: ",
        name: "URL",
    },
    {
        message:"Enter Site name: ",
        name: "NAME",
    }
  ])
  .then((answers) => {
    var url = answers.URL
    var name = answers.NAME
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`${name}.png`));
    console.log(`${name}-QR Generated`)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 