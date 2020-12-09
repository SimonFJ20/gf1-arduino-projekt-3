@echo off

set FLASK_APP=server.py
set FLASK_ENV=dev

python -m flask run
