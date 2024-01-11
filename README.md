# Foodr

## Description

Foodr is a quiz application that helps users decide what food to eat based on various choices.  We built this project to help people make one less decision a day.  It solves the problem of deciding what to eat by using the site to access a short survey that narrows the options down to one choice based on the user's answers.  After receiving that one choice, then a link for recipes and local Houston restaurants which serve the food item will be presented.  Some things we learned throughout Foodr are collaborating through time management and equal teamwork, resolving merge conflicts, how to make a next set of answers or options dependent on the previous answer, navigating and referencing large amounts of data within arrays of arrays, researching multiple server-side APIs which worked for our project's purpose, and reading and understanding documentation for how to fetch particular data while addressing any potential errors.

## Installation

To fetch Edamam and Maps Data APIs, specific keys had to be requested and saved within the JavaScript file.  Then, parameters which allow variable search terms must be added to API calls through query URLs so that specific requested data can be obtained.  After concatenating API Key variables to the URLs, the API calls return response data in the form of URLs.  These URLs are then used to display information regarding food items searched in the application.       

## Usage

To run Foodr, open up the webpage to see a short description about the application and instructions next to the header "foodr."  Below the header and description is the "Start" button which starts the quiz.  If a user wants to randomly generate food without running the quiz, then they can click the "Feed me!" button within the Quick Pick box below "Start."  After clicking "Start," the question "What kind of food are you craving?" appears.  After clicking one of the four food categories, then the next question "What sounds more appetizing?" appears with group options based on the previous answer.  After clicking one of the three group options, the final question "Are you looking for something heavy or light?" appears.  Clicking "Heavy" or "Light" displays a randomly generated food item which matches all three questions' parameters.  Below the final food item are "Recipe," "Restaurant," and "Restart" buttons.  While "Recipe" will open up a random generated recipe URL based on the food item, "Restaurant" will open up a local Houston restaurant's URL which serves the food item.  Finally, "Restart" will reload the page back to the start screen.  As each food item is searched, a list of the most recently searched items will display below the "Start" and "Restart" buttons.  

Attached is a screenshot before starting quiz:

![Before Quiz Screenshot](./assets/images/Foodr%20Before%20Screenshot.png)

Attached is a screenshot during quiz:

![During Quiz Screenshot](./assets/images/Foodr%20During%20Screenshot.png)

Attached is a screenshot after quiz:

![After Quiz Screenshot](./assets/images/Foodr%20After%20Screenshot.png)

## Deployed Site

[Deployed Site](https://camwhritenour.github.io/Foodr/)

## Credits

Collaborators:
[Tyler Knapp](https://github.com/Tyler-KD)
[Cameron Whritenour](https://github.com/camwhritenour)
[Ella Gaul](https://github.com/mymashedpotatoes)
[Derek Medrano](https://github.com/derekmedrano)

[Edamam API](https://developer.edamam.com/edamam-docs-recipe-api)

[Maps Data API](https://rapidapi.com/alexanderxbx/api/maps-data)

## License

Copyright (c) 2024 Tyler-KD camwhritenour mymashedpotatoes derekmedrano

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Features

Included features: use.fontawesome, fonts.googleapis, fonts.gstatic, kit.fontawesome, bootstrap, Edamam API, Maps Data API, LocalStorage