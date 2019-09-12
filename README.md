# Trackingr

A website that allows its users to sign in and report their whereabouts and safety to a designated supervisor during emergancy situations.
- Log on and save login info for quick access later.
- Allow tracking of students using scannable QR codes.
- Allow student to select the degree of safety they have.

## Who Is This For?

Rockwood School District

## Goals

Making access to students whereabouts and safety quick and easy for all involved during an emergancy.

## User Stories

User stories describe tasks and outcomes by which we will judge the completeness of the application.

- [ ] As a supervisor I can add/create a group (i.e. create a school).
- [ ] As a supervisor I add/remove users from the group.
- [ ] As a supervisor I can look at an overview of the school and the people in it.
- [ ] As a supervisor I can share this information easily with parents and emergancy services.
- [ ] As a user I can login and preload my information.
- [ ] As a user I can quickly scan a QR code to upload my location to the database.
- [ ] As a user I can manually input my location and safety if need be.
- [ ] Have a stable server that can handle large quick surges of requests.

## Data Entities

### User

A user is anyone who is present in the group.

Field:
- Group
- Location
- Status

### Supervisor

A user who has access to the information of everyone in the group.

Field:
- Group
- Group Manager
- Location
- Status

### Group

A location or group of users who are managed by a supervisor.

Field:
- Supervisors
- Users
- Location
- Status
