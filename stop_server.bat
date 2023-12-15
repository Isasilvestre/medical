@echo off
for /f "tokens=5" %%p in ('netstat -aon ^| find ":3003" ^| find "LISTENING"') do (
    taskkill /F /PID %%p
)