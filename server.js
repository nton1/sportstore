/* previuos version
var connect = require('connect');
connect.createServer(
connect.static("../angularjs")
).listen(5000);
*/

/*This file should be placed into nodejs filder ( for instance C:\Program Files\nodejs )*/


var connect = require('connect');
connect.createServer(
/*connect.static("../../Users/ivan.benegiamo/Documents/AngularProjects/sportsstore")*/
/*connect.static("../../Users/ivan.benegiamo/Documents/AngularProjects/app")*/
connect.static("../../Users/ivan.benegiamo/Documents/GitHub/sportstore/app")
).listen(5000);
console.log('Server running at http://127.0.0.1:5000/' + 
			'/\n\n' +  '---------Attention ! --------' + 
			'/\n\n' + 'to stop node.js server ctrl+c');