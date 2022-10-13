## iBikes

iBikes is a simple web application to rent bikes in Orlando Area.

### How to run with Docker

1. Clone the repository
2. Run `npm run docker`
3. Run `npm run container`
4. Install dependencies with `npm run install:all`
5. Start the frontend with `npm run frontend`
6. Start the backend with `npm run backend`

### How to run without Docker

1. Clone the repository
2. Install dependencies with `npm run install:all`
3. Start the frontend with `npm run frontend`
4. Start the backend with `npm run backend`

### Checklist

- [x] The application is React-based.
- [x] 2 User Roles: Manager and User.
- [x] Users can create an account and log in.
- [x] Users can view a list of available bikes.
- [x] Each bike have the following information in the profile:
  - [x] Model.
  - [x] Color.
  - [x] Location.
  - [x] Rating.
  - [x] A checkbox indicating if the bike is available for rental or not.

Managers can:

- [x] Create, Read, Edit, and Delete Bikes.
- [x] Create, Read, Edit, and Delete Users and Managers.
- [x] See all the users who reserved a bike, and the period of time they did it.
- [x] See all the bikes reserved by a user and the period of time they did it.

Users can:

- [x] See a list of all available bikes for some specific dates.
- [x] Filter by model, color, location, or rate averages.
- [x] Reserve a bike for a specific period of time.
- [x] Rate the bikes with a score of 1 to 5.
- [x] Cancel a reservation.

### Technologies

- [x] React
- [x] Redux Toolkit
- [x] Node.js
- [x] Express
- [x] MySQL
- [x] Docker
- [x] Docker Compose
- [x] Sequelize
- [x] React Router
- [x] MUI

Safer login with JWT, bcrypt, and http only cookies.