// In order to run a gulp task from this file use this command
// gulp tiger --gulpfile moregulp.js

const files = require("files"); // To Manipulate Files
const chalk = require("chalk"); // To Color Console Output

//Run this command with the command "gulp brick"
function tigerTask(cb) {
  files.mkdir("../tiger");
  console.log(chalk.bgGreen.black("Created a Folder Called tiger"));
  cb();
}

// export the tasks
exports.tiger = tigerTask;
