const ora = require('ora')
const chalk = require('chalk')

const spinner = ora()
let lastMsg = null
let isPaused = false

const logWithSpinner = (symbol, msg) => {
  if (!msg) {
    msg = symbol
    symbol = chalk.green('✔')
  }
  if (lastMsg) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text
    })
  }
  spinner.text = ' ' + msg
  lastMsg = {
    symbol: symbol + ' ',
    text: msg
  }
  spinner.start()
}

const stopSpinner = (persist) => {
  if (!spinner.isSpinning) {
    return
  }

  if (lastMsg && persist !== false) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text
    })
  } else {
    spinner.stop()
  }
  lastMsg = null
}

const pauseSpinner = () => {
  if (spinner.isSpinning) {
    spinner.stop()
    isPaused = true
  }
}

const resumeSpinner = () => {
  if (isPaused) {
    spinner.start()
    isPaused = false
  }
}

const failSpinner = (text) => {
  spinner.fail(text)
}

const chalkTag = msg => chalk.bgBlackBright.white.dim(` ${msg} `)

const log = (msg = '', tag = null) => {
  tag ? console.log(format(chalkTag(tag), msg)) : console.log(msg)
}


module.exports = {
  logWithSpinner,
  stopSpinner,
  pauseSpinner,
  resumeSpinner,
  failSpinner,
  chalk,
  log
}