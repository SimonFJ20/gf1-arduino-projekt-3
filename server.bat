@echo off

set FLASK_APP=server.py
set FLASK_ENV=dev

cd server

python -m flask run

pause