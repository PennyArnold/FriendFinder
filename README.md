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