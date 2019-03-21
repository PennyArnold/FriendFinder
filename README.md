# FriendFinder

Javascript application using Node.js and Express to handle routing while using get and post methods.

Packages included are body-parser, express and path.

The logic of the app is comparing differences between a sum total of numbers entered by the user and the array of numbers for each possible friend.

Once the closest match is determined, it displays in a pop-up module (modal).

The Friend Finder app file structure:

FriendFinder
  - .gitignore
  - app
    - data
      - friends.js
    - public
      - home.html
      - survey.html
    - routing
      - apiRoutes.js
      - htmlRoutes.js
  - node_modules
  - package.json
  - server.js

The first step entailed installing the npm install body-parser and express through Node.js.

Then, in the server.js file, I copied and pasted my packages, and my port and tested my port connection by typing node server in the terminal.  The terminal responds:  "Listening on port 3000"

Then, I added the body-parser structure (which returns json and string text and sets the type) and applied api and html routes for paths to files.

Then, I make my json array in the friends.js which acts as my database for this project.  Each object contains a name, image and array of numbers (scores) that will be summed and compared to the sum of the score that the user puts into the form.  The last line of code exports the file.

The next step is to build the html home and survey pages.  This is self explanitory in the code.


  


