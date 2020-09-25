const files = require("files"); // To Manipulate Files
const chalk = require("chalk"); // To Color Console Output

//Run this command with the command "gulp"
function defaultTask(cb) {
  files.mkdir("cheese");
  console.log(chalk.bgGreen.black("Created a Folder Called Cheese"));
  cb();
}

//Run this command with the command "gulp brick"
function brickTask(cb) {
  files.mkdir("brick");
  console.log(chalk.bgGreen.black("Created a Folder Called brick"));
  cb();
}

// export the tasks
exports.default = defaultTask;
exports.brick = brickTask;
