<h1 align="center">
iCar API (in devlopment)
</h1>

<p align="center">A car rentals API build with Node.js.</p>

<p align="center">
  <a href="https://github.com/Rocketseat/youtube-clone-twitter/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/rocketseat/youtube-clone-twitter?color=%236633cc&logoColor=%236633cc&style=flat" alt="Contributors">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/rocketseat/youtube-clone-twitter?color=%236633cc&logo=mit" alt="License">
  </a>
</p>

<hr>

## Participants

[<img src="https://avatars.githubusercontent.com/u/46445777?v=4" width="75px;"/>](https://github.com/brcaua)

[Breno Lima](https://github.com/brcaua)

## Techs

- [x] Node.js
- [x] Postgres
- [x] TypeORM
- [x] TypeScript
- [x] Insomnia 
- [x] Swagger
- [x] Jest  

## Ideas to implement

- [ ] Create an interface using React.js (e.g. Initial page)

## Features
RF => Functional Requisites
RNF => Non Functional Requisites
RN => Business Rules
### Registering a Car
* **RF**
[x] It should be possible to register a new car in the database.

* **RN**
[x] Should not be possible to register more than one car with the same license plate.
[x] Every car should be registered as available for rental by default.
[x] Only admin users can register a car.

### Listing Registered Cars
* **RF**
It should be possible to list all available cars.
It should be possible to list all available cars by name.
It should be possible to list all available cars by category.
It should be possible to list all available cars by brand.

* **RN**
An user does not need to be logged in to list all available cars.

### Registering Car Specifications
* **RF**
[x] It should be possible to register a new specification for a car.

* **RN**
[x] Should not be able to register a specification for a non existing car.
[x] Should not be able to register an existing specification for the same car.
[x] Only admin users can register a specification for a car.

### Registering Car Images
* **RF**
[x] It should be possible to register a new image for a car.

* **RNF**
[x] Use multer for uploading files.

* **RN**
Should not be able to register an image for a non existing car.
It should be possible to register multiple images for the same car.
[x] Only admin users can register an image for a car.

### Renting a Car

* **RF**
[x] It should be possible to register a new car rental.

* **RN**
The minimun duration of a rental must be 24 hours.
[x] Should not be able to register a new car rental for an user already renting a car.
[x] Should not be able to register a new car rental for a non available car.

## Usage
1. Clone this repo
2. Run `npm install` or `yarn install`.<br />
3. Run `yarn start`.<br />

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.
