import pyautogui
import time 

comments = ["Hello, It is just an experiment.","So be relax, It is just for fun, be patient.","BTW, it is funny!","Do you still think, I am bot!. No, I am not.","It is normal and last of all","How are You Right now?","Tell me."]
time.sleep(5)

for i in range(21):
    pyautogui.typewrite(comments[i%7])
    pyautogui.typewrite("\n")
    time.sleep(2)
    