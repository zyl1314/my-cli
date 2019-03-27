const download = require('download-git-repo');
const URL = 'zyl1314/react-template';

module.exports = function (url = URL, path = process.cwd()) {
  download(url, path, function (err) {
    console.log(err ? `Error: ${err}` : 'Download Success');
  })
}
