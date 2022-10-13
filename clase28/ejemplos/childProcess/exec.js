const { exec, execFile } = require('child_process');

// exec('ls -lh', (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }

//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }

//     console.log(`stdout: ${stdout}`);
// })

execFile(__dirname + '/lsFile.sh', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
});

