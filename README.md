# DD-500 Editor

An editor for the Boss DD-500 delay pedal.



This is a browser-based editor. It uses [web midi](https://webaudio.github.io/web-midi-api/), which is currently only supported by Google Chrome or Opera. The editor is tested in Chrome on OSX. 

If you have any question, please send me an email: info@roaldvandillewijn.nl



# Manual

- Connect your DD-500 to your computer with a USB A/B cable or via a midi interface.

- Select the DD-500 or midi interface from the menu in the top left corner. If you don't see the pedal, please restart your browser

- Select a bank from the bank-selector menu. The editor will load all the parameter values from the pedal.

- You can edit every parameter available from the screen. When you change a parameter it will upload direct to the pedal and save it in the selected bank.





##Save a preset:

- Click on Save Patch and all the parameter values will be saved to a JSON-file. The name of the JSON-file is the name of the preset.

- The file will be saved in your downloads folder.



##Load a preset:

- Click on <u><b>Load Patch</b></u> and select the JSON file you want to store to the pedal. 

- With a click on import patch the preset will be stored to the selected bank. 

- it will overwrite all parameters in that bank on the pedal, so be carefull. 
