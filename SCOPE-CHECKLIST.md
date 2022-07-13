# Scope Review Checklist

> Note: There are exceptions to almost every rule here. If you have a good reason, it's possible that one of these checkboxes may not apply to you, but they apply to most, so they are good guideposts.

- [x] Project Title
    - [x] Has a title
    - [x] It's name doesn't change throughout the scope
- [x] Application Overview
    - [x] 2-5 Sentences explaining the application in non-technical terms
        This application is able to take a specific car and a driving route to give you the total co2 emissions for the trip. Once the trip is saved, you will get comparisions to everyday object weights that compare to the pounds of emission you let off into the atmosphere. The goal is to be able to quantify, at least to some degree, what we are placing into the atmosphere for every mile we drive a gasoline-fueled vehicle.
    - [x] Someone who has never heard of the application can start to picture what it does.
    - [x] Not a description of the problem is that it is solving (generally speaking, clients will know what the problem is)
- [x] Functional Requirements/Application Views
    - [x] Each view has a title
    - [x] Each view has bullets describing what it does
    - [x] Each view has a wireframe
    - [x] If there are buttons, it should be clear what each button does. This can be listed on the wireframe or as a bullet
        - [x] If a button takes a user to a different view, a bullet should call out the view name that it navigates to
    - [x] If the view is only accessible to some users, it should be clearly described in a bullet
    - [x] Each view has a description of how users arrive there.
    - [x] Ideally, stretch goals that the user feels are likely should be included in the views and noted as stretch goals in a bullet
- [x] Project Schedule
    - [x] At a minimum, each view should have a date associated with it
    - [ ] The schedule is broken into features -- that is, a feature is a chunk of functionality that delivers demonstratable value
    - [ ] Each feature should have an appropriate due date (if all dates are the same, that is not valid)
    - [ ] There should be at least one feature per day, if a feature will take longer than a day, it is too large and should be broken down
    - [ ] The schedule should support a working, demonstrable CRUD app complete on the Thursday of the first week of work
    - [ ] All Base Mode features should be complete on the following Thursday (the week before final presentations)
- [x] Browsers
    - [x] Only include browsers you will actually be testing
        Chromium: 103 (Official Build) (arm64)
    - [x] Round up to the nearest whole number (ex Chrome 66, not Chrome 66.2384.239)
    - [x] If you are including mobile browsers, include the phone you are supporting as well
- [ ] Database/Entity Relationship Diagrams
    - [x] Each table holds information about a _single Entity_ (Trip)
    - [ ] Each table has attributes, describing properties of the Entity
    - [ ] Everything shown in the wireframes is represented somewhere in the ERD
    - [x] All data in the ERD is represented in the wireframes
    - [x] Joins are used to describe one-to-many and many-to-many relationships (None)
    - [x] Joined tables have `REFERENCE`'ing ids in the correct table (UserId)
- [ ] Review everything on every view. If it is not hard-coded it must be saved in the database.
- [x] Technologies
    - [x] All node modules installed with `npm install`
        See below for modules
    - [x] Database
        Postgres
    - [x] File storage (Filestack, AWS, etc)
        None
    - [x] CSS library/framework
        Joy UI or Material UI
    - [x] Deployment technologies
        Heroku
- [ ] Stretch/Future Goals
    - [ ] Should include feature title and brief description
    - [ ] Should take several months of full time effort to complete

Node Modules Installed:
"@emotion/react": "^11.9.3",
"@emotion/styled": "^11.9.3",
"@mui/material": "^5.9.0",
"@mui/x-data-grid": "^5.13.0",
"axios": "^0.21.1",
"bcryptjs": "^2.4.3",
"cookie-session": "^2.0.0",
"dotenv": "^8.6.0",
"express": "^4.17.1",
"passport": "^0.4.1",
"passport-local": "^1.0.0",
"pg": "^8.5.1",
"prop-types": "^15.7.2",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-redux": "^7.2.6",
"react-router-dom": "^5.2.0",
"react-scripts": "^5.0.1",
"redux": "^4.1.2",
"redux-logger": "^3.0.6",
"redux-saga": "^1.1.3"

## Final Pass

- [ ] All instructions in the scope are removed. It should no longer say things like: _This section should be short. Most of the details should be included in the views section._
- [ ] Is this actually reasonable?
    - [ ] Will CRUD be complete within a week?
    - [ ] Can base mode be completed on time for presentations?
