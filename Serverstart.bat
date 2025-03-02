@echo off
REM Change to the current directory
cd /d "%~dp0"

REM Search for server.js in the current folder and subfolders
for /r %%i in (server.js) do (
    set "serverPath=%%i"
    goto :found
)

REM If server.js is not found, exit
echo server.js not found in the current folder or subfolders.
pause
exit /b

:found
echo Found server.js at %serverPath%
echo Starting server...
node "%serverPath%"
pause
