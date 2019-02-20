for /f %%i in ('c:\cygwin64\bin\date.exe +"%%Y%%m%%d%%H%%M%%S"') do set datetime=%%i
git add .
git commit -m "auto %datetime%"