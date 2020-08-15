# P4 - miniBlab

## Description
**miniBlab:**  A simple chatroom app ala Chatroulette with minimalist design using Vue.js

## Intended User
Bored? I don't have a userbase but you can shout into the void until a userbase coalesces -- worked for the solar system on a long enough timeframe.

## Team
Myself as Dev and my cat, Paris, for moral support.

## Possible Roadblocks
1. Never used Vue.js
    * Learn and implement effectively depends on me grasping things quickly
    * Need a momentum boost? Literally a youtube tutorial existed for replacing parts of the exact model of my old 2005 Toyota Corolla so getting stuck somewhere is because I'm not looking **(bad)** or don't know what I'm looking for **(bad but understandable)**
2. Never used Socket io
    * Lots of documentation, it'll be fine just get caffienated. 
    * Repeat momentum boost step from above if needed.
3. Life's tough, get a helmet

![](https://media1.tenor.com/images/3e8ae9316032197b00ee6488d2f360cc/tenor.gif)


## MVP
- [ ] Username input to differentiate chat participants
- [ ] Text input box + send button 
- [ ] Display chat window and chat history in appropriately sized content section
    - [ ] Chat history includes Username: Text
- [ ] Pretty because i 💖 frontend way more

## Stretch Goals
- [ ] Mobile friendly
- [ ] SPA if possible because I love SPAs
- [ ] Register username for unique use
- [ ] Browseable history log of chatroom any time window is refreshed.
    - [ ] Maybe limit to 100 messages that can be retrieved
    - [ ] Might need to clear recent chat for historical messages each time 100+ messages retrieved.
- [ ] Allow images to be sent 

## Wireframe

![wireframe](https://github.com/jimmygranadino/seir_526_p4/blob/master/wireframe/wireframe-spa.png)

## Plan
#### Day 1:
- [x] Research Vue.js
- [x] Research Socket NPM docs and how nicely it plays with Vue.js
- [x] Vue.js crash course (OMG ITS NOT AS HARD AS ITHOUGHT)
- [x] README pull request
- [x] Create the repo and initial commit
- [x] Look up neat Vue.js tricks & tips for how to most effective use this part of my tech stack.
- [x] npm installs + coffee + scaffolding
- [x] 🌊 GIT COMMIT OFTEN!! 🌊

#### Day 2:
- [x] Coffee + scaffolding pt.2
- [x] Setup and test server with Vue.js
- [ ] Low 80s weekend forecast for LA, enjoy sunshine.
- [ ] Test ugly implementation of Socket w/ Vue when day cools off
- [ ] 🌊 GIT COMMIT(s) 🌊

#### Day 3:
- [ ] Simple chat app should be somewhat operational?
- [ ] Implement username
- [ ] Slap some CSS on to make it pretty
- [ ] 🌊 GIT COMMIT(s) 🌊

#### Day 4:
- [ ] Stretch goal time, need DB to store chat history and username registration.
- [ ] Have a TA or Instructor take a look if progress is sufficient and share any struggles with stretch goal.
- [ ] 🌊 GIT COMMIT(s) 🌊

#### Day 5: 
- [ ] TBD

#### Day 6:
- [ ] TBD


## Tech Stack
* Vue.js
* Node.js
* Express
* Bootstrap for layout + Custom CSS
* BACKEND: MongoDB maybe? But Postgres will let me deploy to Heroku

## Deployment
* Netlify (love it) or Heroku (fussy but will host a postgres DB)