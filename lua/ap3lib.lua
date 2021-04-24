
local interface = 'ap3lib::'

local module = {};

module.display = {};

module.display.setText = function(self, text)
    print(interface .. 'display:setText(' .. text .. ')')
end

module.display.clear = function(self)
    print(interface .. 'display:clear(' .. ')')
end

module.led = {};

module.led.setOutput = function(self, led, state)
    print(interface .. 'led:setOutput(' .. led .. ', ' .. state .. ')');
end


return module
