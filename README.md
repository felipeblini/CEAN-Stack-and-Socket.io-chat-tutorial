#CEAN-Stack-and-Socket.io-chat-tutorial-part1

## Installing this Project

    $ git clone https://github.com/felipeblini/CEAN-Stack-and-Socket.io-chat-tutorial.git cean-chat
    $ cd cean-chat

### Installing Back-end Packages

`$ npm install`

### Installing Front-end (Angular) Packages

    $ cd public
    $ npm install

## Running the Application

#### Build the Angular Project to Production

Inside the `public` folder, run:

    $ ng build -p

It should create the `dist` folder. Then:

#### Run Application

Go back to the root folder and run:

    $ node app

Open `htp://localhost:3000`.
