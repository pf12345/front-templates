const fs = require('fs');
const path = require("path");
const context = process.cwd()

const getPathRelativeRoot = (str) => {
  return str ? path.resolve(context, str) : path.resolve(context, "");
}

const matchCdnUrl = (str) => {
  const reg = /https\:(.*?)\.js/ig;
  const matchs = str.match(reg);
  return matchs && matchs.length ? matchs.join(",") : ""
}

const materialsInfoFilePath = getPathRelativeRoot("materials.json");
const getMaterialsInfoByFile = () => {
  const initInfo = {
    source: [],
    createTime: Date.now()
  };
  if(!fs.existsSync(materialsInfoFilePath)) {
    return initInfo;
  } else {
    try {
      return require(materialsInfoFilePath)
    } catch (e) {
      return initInfo;
    }
  }
}

module.exports = {
  getPathRelativeRoot,
  matchCdnUrl,
  getMaterialsInfoByFile
}