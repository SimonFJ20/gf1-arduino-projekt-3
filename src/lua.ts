import { execFile, ExecFileException } from 'child_process';
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

    execFile(lua54Executable, [luaConfigScript, code], (error: ExecFileException | null, stdout: string, stderr: string) => { // (!!!) requires data types, i think/suggest error: Error, data: Buffer | String
        if(error) {
            //console.error(error.message.replace(code, '').replace(lua54Executable, '').replace(luaConfigScript, ''));
            console.error(error.message) //.replace(code, '').replace(/[\S]*\\[\s\S]*\\(\S*)/, '$1'));
        } else if(stderr) {
            console.log(stderr.toString());
        } else {
            console.log(stdout.toString());
        }
        
        
        

    });


}

executeLua(`
print("Start");

ap3lib.display:setText("brijh");
ap3lib.display:clear();

ap3lib.led:setOutput(0, 1);

io.write('dfgoikjdf')

`);
