const { execFile } = require("child_process");
const code = `

local x = 5;
print(x);

LCD:displayText("Nigga");

`;




execFile('./lua54.exe', ['./execute.lua', code], function(err, data) {
    if(err) {
        console.log(err)
    }
    else 
    console.log(data.toString());
});