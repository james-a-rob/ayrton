const spawn = require('child_process').spawn;
// stderr is sent to stdout of parent process
// you can set options.stdio if you want it to go elsewhere
const childProcess = spawn('bash', ['-c', 'cd ../'], { stdio: 'inherit' });
const childProcess2 = spawn('bash', ['-c', 'ls'], { stdio: 'inherit' });

