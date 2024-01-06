var edamamKEY = "d1dff8cbcbfaa0cdfb00112c92e85cf8";
var edamamID = "ea182cd5";
var edamamURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=ea182cd5&app_key=d1dff8cbcbfaa0cdfb00112c92e85cf8";

function getRecipes() {
    fetch(edamamURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
//getRecipes();

/* Element Selectors */

var quizEl = document.querySelector("#survey");
var startQuizEl = document.querySelector("#start-quiz");
var submitbtnEl = document.querySelector('#submitbtn');

var quizHeaderEl = document.querySelector('#question');
var answersEl = document.querySelector("#answers");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");


/* Food Variables */

const mexicanFoods = {
    heavy: ['Burrito', 'Tacos', 'Enchiladas'],
    light: ['Nachos', 'Quesadilla', 'Fajitas']
};

const indianFoods = {
    heavy: ['butter-chicken', 'chicken-masala', 'tikka', 'biryani', 'pakora'],
    light: ['naan', 'samosa']
}

const thaiFoods = {
    heavy: ['pad-thai', 'khao-pad', 'pad-kra-pao-moo'],
    light: ['panang-curry', 'tom-yum-goong', 'tom-kha-gai']
}

const americanFoods = {
    heavy: ['burgers', 'steak', 'wings', 'fried-chicken', 'french-fries'],
    light: ['salad', 'hot-dog']
}

const italianFoods = {
    heavy: ['spaghetti', 'pizza', 'lasagna', 'chicken-parm'],
    light: ['bruscetta', 'risotto']
}

const jewishFoods = {
    heavy: ['knish', 'deli-sammy', 'challah', 'latkes'],
    light: ['matzo-ball-soup', 'creamcheese-lox']
}

const chineseFoods = {
    heavy: ['orange-chicken', 'mongolian-beef', 'kung-pao-shrimp'],
    light: ['eggroll', 'lo-mein', 'fried-rice']
}

const vietnameseFoods = {
    heavy: ['bahn-mi', 'com-tam', 'bun-cha', 'goi-cuon'],
    light: ['spring-roll', 'pho']
}

const japaneseFoods = {
    heavy: ['ramen', 'teriyaki', 'tempura', 'katsudon'],
    light: ['sushi', 'takoyaki']
}

const iceCreamFoods = {
    heavy: ['ice-cream-cake', 'banana-split', 'milkshake'],
    light: ['ice-cream-cone', 'sundae', 'mochi']
}

const bakeryFoods = {
    heavy: ['cake', 'pie', 'brownies'],
    light: ['crossiant', 'cookies', 'donut']
}

const frenchFoods = {
    heavy: [],
    light: []
}

const foodCategories = [

    spicy = [
        {
            name: 'Mexican',
            foods: mexicanFoods
        },

        {
            name: 'Indian',
            foods: indianFoods
        },

        {
            name: 'Thai',
            foods: thaiFoods
        },
    ],

    homestyle = [
        {
            name: 'American',
            foods: americanFoods
        },

        {
            name: 'Italian',
            foods: italianFoods
        },

        {
            name: 'Jewish',
            foods: jewishFoods
        },
    ],

    asian = [
        {
            name: 'Chinese',
            foods: chineseFoods
        },

        {
            name: 'Japanese',
            foods: japaneseFoods
        },

        {
            name: 'Vietnamese',
            foods: vietnameseFoods
        },
    ],

    sweet = [
        {
            name: 'Ice Cream',
            foods: iceCreamFoods
        },

        {
            name: 'Bakery',
            foods: bakeryFoods
        },

        {
            name: 'French',
            foods: frenchFoods
        },
    ]

]

console.log(foodCategories[0][0].name)

/* Quiz Functions */

var questions = ["What kind of food are you craving?", "What sounds more appetizing?", "Are you looking for something heavy or light?"]
var options = [["Spicy", "Homestyle", "Asian", "Sweet"], ["Mexican", "Indian", "Thai"], ["American", "Italian", "Jewish"], ["Chinese", "Vietnamese", "Japanese"], ["Ice Cream", "Bakery", "French"], ["Heavy", "Light"]]

var questionSelector = 0
var optionsGroup = 0

function startQuiz() {
    var questionSet = [questions[questionSelector], options[optionsGroup][0], options[optionsGroup][1], options[optionsGroup][2], options[optionsGroup][3]]
    quizHeaderEl.textContent = questionSet[0];
    answer1El.textContent = questionSet[1];
    answer2El.textContent = questionSet[2];
    answer3El.textContent = questionSet[3];
    answer4El.textContent = questionSet[4];
}

function nextQuestion() {
        questionSelector++
        var questionSet = [questions[questionSelector], options[optionsGroup][0], options[optionsGroup][1], options[optionsGroup][2], options[optionsGroup][3]]
    quizHeaderEl.textContent = questionSet[0];
    answer1El.textContent = questionSet[1];
    answer2El.textContent = questionSet[2];
    answer3El.textContent = questionSet[3];
    answer4El.textContent = questionSet[4];

    console.log(questionSet)
    console.log(questionSelector)
}

function endQuiz() {
    quizEl.setAttribute("style", "height: 600px");
    answer1El.setAttribute("style", "display: none;");
    answer2El.setAttribute("style", "display: none;");
    answer3El.setAttribute("style", "display: none;");
    answer4El.setAttribute("style", "display: none;");
    quizHeaderEl.textContent = "Figure it out"
}

startQuizEl.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("#start-quiz")) {
        var state = element.getAttribute("data-state");

        if (state === "visible") {
            element.dataset.state = "hidden";
            element.setAttribute("style", "display: none;");

        };

        quizEl.setAttribute("style", "height: 600px");
        answer1El.setAttribute("style", "display: block;");
        answer2El.setAttribute("style", "display: block;");
        answer3El.setAttribute("style", "display: block;");
        answer4El.setAttribute("style", "display: block;");
        startQuiz();


    };

});

answer1El.addEventListener("click", function (event) {
    var element = event.target;

    if (element.textContent === "Spicy") {
        optionsGroup = 1
    } else {optionsGroup = 5}
    console.log(optionsGroup)


    nextQuestion()
})

answer2El.addEventListener("click", function (event) {
    var element = event.target;

    if (element.textContent === "Homestyle") {
        optionsGroup = 2
    } else {optionsGroup = 5}


    nextQuestion()
})

answer3El.addEventListener("click", function (event) {
    var element = event.target;

    if (element.textContent === "Asian") {
        optionsGroup = 3
    } else {optionsGroup = 5}


    nextQuestion()
})

answer4El.addEventListener("click", function (event) {
    var element = event.target;

    if (element.textContent === "Sweet") {
        optionsGroup = 4
    } else {optionsGroup = 5}


    nextQuestion()
})


  var quickBtn = document.getElementById("quick-pick-btn");
  var quickReturn = document.getElementById("quick-pick-return");
  var foodsArray = ['taco', 'burrito', 'nachos', 'fajitas', 'quesadilla', 'enchilada', 'butter-chicken', 'chicken-masala', 'samosa', 'naan', 'tikka', 'biryani', 'pakora',
  'tom-kha-gai', 'pad-thai', 'khao-pad', 'pad-kra-pao-moo', 'tom-yum-goong', 'panang-curry', 'burgers', 'hot-dog', 'steak', 'wings', 'fried-chicken', 'french-fries', 'salad',
  'spaghetti', 'pizza', 'lasagna', 'bruscetta', 'chicken-parm', 'risotto', 'matzo-ball-soup', 'knish', 'creamcheese-lox', 'deli-sammy', 'challah', 'latkes', 
  'orange-chicken', 'mongolian-beef', 'lo-mein', 'fried-rice', 'kung-pao-shrimp', 'eggroll', 'sushi', 'ramen', 'teriyaki', 'tempura', 'katsudon', 'takoyaki',
  'spring-roll', 'pho', 'bahn-mi', 'com-tam', 'bun-cha', 'goi-cuon', 'ice-cream-cone', 'ice-cream-cake', 'sundae', 'banana-split', 'milkshake', 'mochi',
  'cake', 'donut', 'cookies', 'crossiant', 'pie', 'brownies', 'crepe', 'tarte-tatin', 'mille-fueille', 'macarons', 'creme-brulee', 'palmiers', 'madeleines'];
  
  quickBtn.addEventListener("click", function() {
    var random = (foodsArray[Math.floor(Math.random() * foodsArray.length)]);
   quickReturn.innerHTML=random;
    // console.log(random);
  });
