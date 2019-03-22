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



The first step entailed installing the npm install body-parser and express through Node.js.In the terminal, npm init -y and npm install express.

Then, in the server.js file, I copied and pasted my packages, and my port and tested my port connection by typing node server in the terminal.  The terminal responds:  "Listening on port 3000"

Then, I added the body-parser structure (which returns json and string text and sets the type) and applied api and html routes for paths to files.

Then, I made my json array in the friends.js which acts as my database for this project.  Each object contains a name, image and an array of numbers (scores) that are summed and compared to the sum of the score that the user puts into the form.  The last line of code exports the friends file.

##Public Folder
The next step is to build the html home and survey pages. This creates the look for my application. I used a background picture to give the survey a unique look. Also included in the survey html is the javacript that performs the action for the modal that displays the match based on the users input.

Also included are the photos used for the friends match which are part of the json database (friends.js).

##Routing Pages
HTML -The routing paths apply to the buttons in the htlm documents.
API - Connects the json file (array of objects) - includes a get request and post request.  Also, this contains the code to parse the user's score to best match the json to the user's input.









  


