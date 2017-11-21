@ECHO OFF 
echo. 
echo. 
echo Simple Script to Restart Windows Explorer 
echo. 
echo hiuCMD 
echo. 
echo. 
echo STEP 1: Closing Explorer . . . 
echo. 
TASKKILL /F /IM explorer.exe 
echo. 
echo. 
echo STEP 2: Starting Explorer . . . 
start explorer.exe 
echo. 
echo SUCCESS: Explorer is running. 


