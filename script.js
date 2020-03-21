var likesToTravel = false;

if (likesToTravel === true) {
    console.log("Bon voyage!")
}
else {
    console.log("Enjoy your couch!")
}

// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.

var favoriteFood = "fried pickles"

if (favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls") {
    console.log("Congrats! You have excellent taste!")
}
else {
    console.log("Clearly you have not tried fried pickles or pepperoni rolls")
}
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.

// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
if  (1 + 1 >= 5){
    console.log("True Fact")
} else {
    console.log("LIES!")
}
// Is the product of 4 and 5 less than our equal to 20?
if (4 * 5 <= 20){
    console.log("True fact")
} else {
    console.log("LIES!")
}
// Is the difference between 6 and 2 greater than or equal to 0?
if (6 - 2 >= 0){
    console.log("True fact")
} else {
    console.log("LIES!")
}

// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
var likesDogs = false;

if (likesDogs = true){
    console.log("You're a dog person")
} else {
    console.log("You're a cat person!")
}

// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.

var birthYear = 1998;

if (birthYear <= 1964){
    console.log("You're a baby boomer")
} else if (birthYear <=1979){
    console.log("You're Gen X")
} else if(birthYear <=1994){
    console.log("You're a millenial")
} else if(birthYear <= 2015){
    console.log("You're Gen Z")
} 
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
var sarahObject = {
    firstName: "Sarah",
    lang: "Spanish"
}

if (sarahObject.lang === "English"){
    console.log(`Hello, ${sarahObject.firstName}!`)
} else if(sarahObject.lang === "Spanish"){
    console.log(`Hola, ${sarahObject.firstName}`)
} else if(sarahObject.lang === "French"){
    console.log(`Bonjour, ${sarahObject.firstName}`)
}
// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
var time = "12:00pm"
var isHungry = false;

// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
if (time === "12:00pm" && isHungry === true){
    console.log("What time is it? It's time for lunch! It's lunchtime. Hey, what's for lunch?")
} else if (time === "7:30am" && isHungry === true){
    console.log("It's breakfast time")
} else if (time === "7:00pm" && isHungry === true){
    console.log("It's dinner time!")
} 
if (isHungry === true){
    console.log("Eat a cookie!")
} else if (isHungry === false){
    console.log("Eat a cookie anyway!")
}
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.

// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
var grade = 95

// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
if (grade >= 0 && grade <= 69){
    console.log("You got an F")
}
// If it's between 70 and 76, log "You got a D" to the console.
else if (grade <= 76){
    console.log("You got a D")
}
// If it's between 77 and 84, log "You got a C" to the console.
else if (grade <= 84){
    console.log("You got a C")
}
// If it's between 84 and 92, log "You got a B" to the console.
else if (grade <=92){
    console.log("You got a B")
}
// If it's between 93 and 100, log "You got an A" to the console.
else if(grade <= 100){
    console.log("You got an A")
}

