git add .
date /t > publish_date.txt
time /t > publish_time.txt
set /p DATEVAR=<publish_date.txt
set /p TIMEVAR=<publish_time.txt
git commit -m "auto %DATEVAR% %TIMEVAR%"
git push