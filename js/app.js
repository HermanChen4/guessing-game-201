'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my guessing game ${siteVisitor}! Answer the following questions about me!`);

let color = prompt('what is my favorite color?');
if (typeof(color) === 'string') {
  color = color.toLowerCase();
}
if (color === 'red') {
  alert('You got it, red is my favorite color'); 
} else {alert('Nope that is not my favorite color.')}

let major = prompt('what is my college major.');
if (typeof(major) === 'string') {
  major = major.toLowerCase();
}
if (major === 'biology') {
  alert('Nice! I am a biology major.');
} else {alert('Sorry I am not majoring in that subject.')}

let pet = prompt('what pet do I currently own?');
if (typeof(pet) === 'string') {
  pet = pet.toLowerCase();
}
if (pet === 'turtle') {
  alert('How did you know I had a turtle, you are correct!');
} else {alert('Nope I do not own that animal.')}

let city = prompt('which city was I born and raised in?');
if (typeof(city) === 'string') {
  city = city.toLowerCase();
}
if (city === 'new york city') {
  alert('It is what the say, the greatest city in the world, you are correct!');
} else {alert('Sorry I was not born there.')}

let food = prompt('what is my favorite food?');
if (typeof(food) === 'string') {
  food = food.toLowerCase();
}
if (food === 'tacos') {
  alert('Authentic tacos are the best! You are correct!');
} else {alert('Sorry, that is not my favorite food.')}

alert(`Thanks for playing ${siteVisitor}! How many did you get right? How many did you get wrong?`);
