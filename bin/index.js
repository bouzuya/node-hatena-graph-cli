var fs = require('fs');
var commander = require('commander');

commander.version(JSON.parse(fs.readFileSync('package.json')).version);

commander
.command('get [target] [graphname]')
.description('get data/config')
.action(function(graphname, options) {
  console.log('target: ' + target);
  console.log('graph : ' + graphname);
  console.log(options);
});

commander
.command('post data [graphname]')
.description('post data/config')
.action(function(target, graphname, options) {
  console.log('target: ' + target);
  console.log('graph : ' + graphname);
  console.log(options);
});

commander.parse(process.argv);

