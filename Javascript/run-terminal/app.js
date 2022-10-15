const { execSync } = require('child_process')

const output = execSync('ls', { encoding: 'utf-8' });
const output1 = execSync('touch testing.txt', { encoding: 'utf-8' });

console.log('The output is:');
console.log(output);
console.log(output2);