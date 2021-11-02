
# Arduino Project 3

This project was a group project by:

- [Theis Pieter Hollebeek](https://tphollebeek.netlify.app/)
- [Simon From Jakobsen](https://simonfromjakobsen.netlify.app/)

This was the 3rd of the 3 projects in GF1 in EUX.
The assignment was to make some project including Arduino and write a 10 page report on it.
The projekt got cancelled because Covid-19, but we did write some code.

## Our goal as user-story (very ambitious)

1. User uploads Lua script to website
2. Server runs script
3. Server sends instruktions to Arduino via. Bluetooth
4. Arduino turns led on/off acordingly

## Stuff we did

### Webserver with [Flask](https://flask.palletsprojects.com/en/2.0.x/)

Knowing nothing about web development at all, we starated with flask. [Master branch](https://github.com/SimonFJ20/gf1-arduino-projekt-3/tree/master).
We eventually realised that Flask is a mess, working with static files and client side web apps.

### Webserver with [Typescript](https://www.typescriptlang.org/), [NodeJS](https://nodejs.org/en/) and [ExpressJS](https://expressjs.com/)

After failing with Flask we switched to the JavaScript Paradigm: [Javascript branch](https://github.com/SimonFJ20/gf1-arduino-projekt-3/tree/javascript).
We both like JS/TS and Express a lot.

### Firmware [Arduino C++](https://www.arduino.cc/)

We wrote a lot of firmware for the Arduino Uno. Probably more than 500 lines.
But someone very smart and knowledgeable at the time made the geinus decision not to upload the code to GitHub or even save the code.

### Bluetooth communication

We had a [HC-05](https://components101.com/sites/default/files/component_datasheet/HC-05%20Datasheet.pdf)
Bluetooth module  for the Arduino. Connected to a phone, we could send bytes one way, but because the module was 
[borked](https://www.urbandictionary.com/define.php?term=borked) it didnt work the other way.

We had to use a 3rd party phone app, as the communication was done through bluetooth serial, 
and we couldnt any software that supported bluetooth serial for our laptops.

We made our own andriod app in 
<insert tool here that i cant find, and that i dont remember the name of, 
  and i dont know what to search for, its probably MIT App Inventor, but i dont want to login and check> 
and its bluetooth functionality.

### Embedding [Lua](https://www.lua.org/)

We first tried embedding Lua in Python using [Lupa](https://pypi.org/project/lupa/). 
With varying results it was scrapped when we switched to NodeJS.

Then we tried embedding Lua in NodeJS. We wrote a module that made a `child_process` and just ran a Lua executable, and captured the output.
It worked quite well, it just lacked features and integration with the rest of the system. But the project was cancelled.
