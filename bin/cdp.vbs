set WshShell = WScript.CreateObject("WScript.Shell") 
WshShell.SendKeys "cd /d " 
WshShell.SendKeys "^v" 
WshShell.SendKeys "~"