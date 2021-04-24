import { spawn, exec, execFile, fork } from 'child_process';




exec('"../lua/lua54.exe"', (error, stdout, stderr) => {
    if(error) {
        console.log('Error:', error.message);
    }
    if(stderr) {
        console.log('Stderr:', stderr);
    }
    console.log('Stdout:', stdout);
});