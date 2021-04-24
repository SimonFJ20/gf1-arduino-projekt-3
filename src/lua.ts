import { execFile } from 'child_process';
import path from 'path';

const lua54Executable = path.join(__dirname, '../lua/lua54.exe');
const luaConfigScript = path.join(__dirname, '../lua/config.lua');

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
