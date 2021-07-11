# finance-secretary
Carey's personal finance reporting system  [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)


## TLDR

- I use google calendar events to keep track of my daily expenditure, which is a mixture of cash and digital spendings
- Wanted a build a convenient expenditure tracking system on top of this existing workflow
~~- Receive email every week so I could be reminded of my spendings before I spend again~~
Feels more intuitive to click the script and I get my spendings for the month to date
## Setup
I am using Clasp, a node project developed by google to push my code to my google account. Wanted to use vs code as the editor, but realised there isn't any popular syntax extensions for apps script.

1. Create a new project on script.google.com, copy the Script ID in project settings 
2. Go to https://script.google.com/home/usersettings and toggle "Google Apps Script API"
3. `npm i -g @google/clasp@2.3.2 
   Note: the latest version doesn't work and gives you an async error
4. `clasp login` from any directory (since clasp was installed globally). A browser window pops up and asks to allow Clasp in your Google account 
5. navigate to your project directory, `clasp clone [scriptID]`. 

*Note: DO NOT commit the `.clasp.json` created by `clasp clone [scriptID]`. It contains your script ID.*

Happy hacking!

## TODO
- [x] setup clasp workflow
- [x] date fetching logic
- [x] iterate through time period, search for $
- [x] summation logic
- [x] parsing string to int? (not automatic in js)
- [x] decide on medium to receive info - html email? sms? link it to a react component and put on Vercel? 
~~- [ ] set periodic triggers~~
- [ ] why isn't my native js methods like array.reduce or parseInt() showing up in autocomplete suggestions?
- [ ] Download types@google-apps-script, try clasp's feature to transpile ts to js

## Resources
- https://www.youtube.com/watch?v=4Qlt3p6N0es&ab_channel=LearnGoogleSpreadsheets
- https://github.com/google/clasp/tree/d6fbaae5e6ad6353fe8dc9ff771c1aed1b6b1a59
- https://stackoverflow.com/questions/15890958/how-to-install-a-previous-exact-version-of-a-npm-package
- https://github.com/google/clasp/issues/853
- https://groups.google.com/g/adwords-scripts/c/JGSb0cvXO2k?pli=1