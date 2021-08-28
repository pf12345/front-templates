#!/usr/bin/env node
const { exec, execSync } = require("child_process");
const { logWithSpinner, chalk, log, stopSpinner } = require("../spinner");
const { getPathRelativeRoot } = require("../util");
const packageJson = require(getPathRelativeRoot("package.json"));
const { version, name } = packageJson;
const publish = () => {
  let command = "npm publish";
  if(version.indexOf('beta')!== -1) {
    command = "npm publish --tage=beta"
  }
  logWithSpinner('⚓', `Component publish`);
  exec(command, (error, stdout, stderr) => {
    if (error) {
      log(`
${chalk.red("执行出错:")} 
${chalk.red(error)}
      `);
      stopSpinner();
      return;
    }
    if(stdout) {
      log(stdout)
    }
    stopSpinner();
    const showInfo = `
  name: ${name}
  version: ${version}
    `;
    log(`${chalk.green('✔ Successfully publish Component: ')}  ${chalk.cyan(showInfo)}`);
  })
}

execSync(`rm -rf ${getPathRelativeRoot("dist/common")}`);

logWithSpinner('⚓', `Component build`);
exec("npm run build:common", (error, stdout, stderr) => {
  if (error) {
    log(`
${chalk.red("执行出错")} 
${chalk.red(error)}`)
    return;
  }
  if(stdout) {
    log(stdout)
  }
  stopSpinner();
  log(`${chalk.green('✔ Successfully build Component')}`);
  publish();
})



