import { execFile } from 'child_process';
import path from 'path';

const lua54Executable = path.join(__dirname, '../lua/lua54.exe');
const luaConfigScript = path.join(__dirname, '../lua/config.lua');

const checkOutput = (data: string) => {
    const regex = /([^\s:]*)::([^\s:]*):([^\s:]*)\(([^\)]*)\)/g;
    const capture = regex.exec(regex);


    let libraryName = capture[1] // --> "std"
    let interfaceName = capture[2] // --> "display"
    let funcName = capture[3] // --> "setText"
    let args = capture[4] // --> "pik, woop"

    const splitArgs = args.split(/[\s,]/)
    let arg0 = splitArgs[0] // --> "pik"
    let arg0 = splitArgs[1] // --> "woop"
}

export const executeLua = async (code: string) => {

    execFile(lua54Executable, [luaConfigScript, code], (error, data) => {
        if(error) {
            console.error(error)
        } else {
            console.log(data.toString());
        }
        
        
    });


}

executeLua(`
local ap = require('ap3lib')

print("Start");

ap.display:setText("brijh");
ap.display:clear();

ap.led:setOutput(0, 1);

`);
