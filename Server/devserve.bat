@echo off

set FLASK_APP=server.py
set FLASK_ENV=dev

:loop

python -m flask run

pause

goto loop
