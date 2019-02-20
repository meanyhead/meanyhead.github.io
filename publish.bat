for /f %%i in ('date /t') do set date=%%i
for /f %%i in ('time /t') do set time=%%i
git add .
git commit -m "auto %date% %time%"