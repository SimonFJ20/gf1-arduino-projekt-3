import { execFile } from 'child_process';
import path from 'path';

const lua54Executable = path.join(__dirname, '../lua/lua54.exe');
const luaConfigScript = path.join(__dirname, '../lua/config.lua');

const checkOutput = (data: string) => {
    const regex = /([^\s:]*)::([^\s:]*):([^\s:]*)\(([^\)]*)\)/g; // capture std::display:setText(one, two)
    let capture: RegExpExecArray | null;


    while ((capture = regex.exec(data)) !== null) {
        const libraryName = capture[1]; // --> "std"
        const interfaceName = capture[2]; // --> "display"
        const funcName = capture[3]; // --> "setText"
        const args = capture[4].split(/[\s,]/); // --> ["one", two"]

        console.log(libraryName + "::" + interfaceName + ":" + funcName + "(" + args + ")");
    }
}

export const executeLua = async (code: string) => {

    execFile(lua54Executable, [luaConfigScript, code], (error: any, data: any) => { // (!!!) requires data types, i think/suggest error: Error, data: Buffer | String
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
