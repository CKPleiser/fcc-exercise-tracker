# Exercise Tracker - FreeCodeCamp

## Overview

This app was created as part of the APIs and Microservices project on [FreeCodeCamp](https://www.freecodecamp.org)

** LIVE VERSION:** [Exercise Tracker](https://ckpleiser-fcc-exercise-tracker-1.glitch.me/)

## User Stories

1. I can create a user by posting form data username to /api/v1/users/new-user and returned will be an object with username and \_id.
2. I can get an array of all users by getting /api/v1/users
3. I can add an exercise to any user by posting from data userId, description, duration, and optionally date to the /api/v1/exercises. If no date is supplied, it will use the current date.
4. I can retrieve a full exercise log of any user by getting /api/v1/users/log/:id with a parameter of userId(\_id). Return will be the user object with added array log and count (total exercise count).
5. I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)

## Running this project locally

1. Clone this project locally
2. Run `npm install` in your bash/command line
3. Create a local `config.env` environment variable and update accordingly

- NODE*ENV=\_development or production*
- PORT=_your port, e.g. 3000_
- DATABASE=_your mongodb uri_
- DATABASE*PASSWORD=\_your mongodb password*

4. Run `npm start` in your bash/command line

## Tech Used

- Uses [Express](https://www.npmjs.com/package/express)
- Uses Server-side rendering via PUG templates
- Uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## To Do's

- [ ] Add handler Factory to be more DRY and making the app future proof
- [ ] Better Error Handling
