const download = require('download-git-repo');
const URL = 'zyl1314/react-template';


module.exports = function() {
    download(URL, 'test/tmp', function (err) {
        console.log(err ? 'Error' : 'Success')
    })
}
