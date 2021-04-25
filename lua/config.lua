local overrides = [[
local ap3lib = require('ap3lib')

collectgarbage = nil
dofile = nil
_G = nil
getfenv = nil
getmetatable = nil
load = nil
loadfile = nil
loadstring = nil
rawequal = nil
rawget = nil
rawset = nil
setfenv = nil
setmetatables = nil
coroutine = nil
module = nil
require = nil
package = nil
io = nil
os = nil
debug = nil
]]

assert(load(overrides .. arg[1]))()