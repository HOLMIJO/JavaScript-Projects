function Call_Loop() { //Defined function gave name
    let text = ""; //Let statement assigning string
    let i = 1; //Let statement assigning number
    while (i < 9) {
        text += "<br>The number is " + i; //Makes text show string
        i++; //Makes i increment
    }
    document.getElementById("Loop").innerHTML = text;
    //Displays return to "Loop" ID in HTML
}

function Stringy() { //Defined function and named it
    let text = "What\'s going on?"; //Let statement using string
    document.getElementById("String").innerHTML = text.length;;
    //Displays return to "String" ID in HTML
}

var BallTypes = ["Baseball", "Football", "Soccer Ball", "Raquetball", "Golf Ball"]; //Defined variable in array gave value
var Content1 = ""; //Defined variable gave string value
var A; //Defined variable

function Balls() { //Defined function gave name
    for (A = 0; A < BallTypes.length; A++) {
        Content1 += BallTypes[A] + "<br>";
    }
    document.getElementById("Types_of_Balls").innerHTML = Content1;
    //Displays result in HTML
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Defined variable in array with string
var Content = ""; //Defined variable with string
var Y; //Defined variable

function for_Loop() { //Defined function and gave name
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
    //Displays result in HTML
}

function cat_pics() { //Defined function and gave name
    var Cat_Pictures = []; //Defined variable with array
    Cat_Pictures[0] = "sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Pictures[2] + ".";
    //Displays result with concatenated string in HTML
}

function array_Function() { //Defined function and gave name
    Dog_Breed = [] //Defined variable with array
    Dog_Breed[0] = "Boxer";
    Dog_Breed[1] = "Boston Terrier";
    Dog_Breed[2] = "Chihuahua"
    Dog_Breed[3] = "Labrador"
    document.getElementById("Array").innerHTML = Dog_Breed[1] + " is my favorite dog breed!";
    //Displays result with concatenated string in HTML
}

const cars = ["Saab", "Volvo", "BMW"]; //Defined constant with strings in array
function constant_function() { //Defined function with name
    document.getElementById("Constant").innerHTML = cars[1] + " is a car I want to own.";
    //Displays concatenated result to "Constant" ID in HTML
}
cars.push("Jeep"); //Pushes string to cars array at last position
document.getElementById("Constant").innerHTML = cars[3] + " is my new favorite!";
//Displays concatenated result to "Constant ID in HTML

var B = "old enough."; //Defined variable with a string

function Old_Enough() { //Defined function and gave name
    let B = "NOT old enough."; //Let statement with string
    document.getElementById("OldEnough").innerHTML = "I am " + B;
    //Displays concatenated result in "OldEnough" ID in HTML

}

function HelloWorld(name) { //Defined function and gave name
    return "Hello " + name; //Gave return with string
}
document.getElementById("Hello").innerHTML = HelloWorld("Joseph");
//Displays concatenated result to "Hello" ID in HTML

function CarWars() {
    let myCar = (
        make: "Dodge "; model: "Journey "; year: "2009 "; color: "gold "; description: CarWars() {
            return "My car is a " + this.year + this.color + this.make + this.model;
        }
    );
}
document.getElementById("MyCar").innerHTML = myCar.description();