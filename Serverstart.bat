@echo off
REM Change to the current directory
cd /d "%~dp0"

REM Check if Node.js is installed by checking the version
node -v >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Installing Node.js...
    REM You can customize this part based on how you want to install Node.js.
    REM For this example, we'll download and install it via an installer URL.
    
    REM Download the Node.js installer (you can update the URL to match the latest version)
    set "nodeInstallerURL=https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi"
    set "installerPath=%TEMP%\node-installer.msi"

    REM Download Node.js installer
    powershell -Command "Invoke-WebRequest -Uri %nodeInstallerURL% -OutFile %installerPath%"
    
    REM Run the installer silently
    msiexec /i "%installerPath%" /quiet /norestart
    
    REM Check if the installation was successful
    node -v >nul 2>nul
    if %errorlevel% neq 0 (
        echo Failed to install Node.js. Exiting.
        pause
        exit /b
    )
    echo Node.js installed successfully.
)

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
