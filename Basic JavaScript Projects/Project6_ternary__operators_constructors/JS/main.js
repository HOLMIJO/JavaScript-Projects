function Ride_Function() {  //Defined function gave name
    var Height, Can_ride;  //Defined variables
    Height = document.getElementById("Height").value;  //Defined variable sending result of value 
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";  //Defines variable sending result
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";  //Document will show result and and send to HTML with "Can Ride"
}

function Voter_Age() {  //Defined function and gave a name
    var Age, Can_vote;  //Defined variables
    Age = document.getElementById("Age").value;  //Defined variable, identified value
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";  //Defined variable with a value
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; // Document will show result and display in HTML
}

function Vehicle(Make, Model, Year, Color) { //Defined function and gave name
    this.Vehicle_Make = Make; //Defined this variable
    this.Vehicle_Model = Model; //Defined this variable
    this.Vehicle_Year = Year; //Defined this variable
    this.Vehicle_Color = Color; //Defined this variable
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Defined variable with definitions
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Defined variable with definitions
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //Defined variable withe definitions
function CarFunction() { //Defined function and gave name
    document.getElementById("Keywords_and_Constructors").innerHTML =  //Document called showing result in HTML
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + //Concatenation to display in result in HTML
    " manufactured in " + Erik.Vehicle_Year; //Concatenation to display in result in HTML
}

function Vehicle(Make, Model, Year, Color) { //Defined function and gave name
    this.Vehicle_Make = Make; //Defined this variable
    this.Vehicle_Model = Model; //Defined this variable
    this.Vehicle_Year = Year; //Defined this variable
    this.Vehicle_Color = Color; //Defined this variable
}
var Becca = new Vehicle("Dodge", "Journey", 2009, "Gold"); //Defined variable with definitions
var Joe = new Vehicle("Suzuki", "XL-7", 2002, "White"); //Defined variable with definitions
var Brandon = new Vehicle("GMC", "Terrain", 2020, "Black"); //Defined variable withe definitions
function Our_Cars() { //Defined function and gave name
    document.getElementById("New_and_This").innerHTML =  //Document called showing result in HTML
    "Joe drives around in a " + Joe.Vehicle_Color + "-colored " + Joe.Vehicle_Model + //Concatenation to display in result in HTML
    " made in " + Joe.Vehicle_Year; //Concatenation to display in result in HTML
}

function person(first, last, age, eye) { //Defined function and named it
    this.first_Name = first; //Defined this variable
    this.last_Name = last; //Defined this variable
    this.age = age; //Defined this variable
    this.eyeColor = eye; //Defined this variable
}



//Created Person object

const myInfo = new person("Joe", "Holmin", 52, "blue");
const myBride = new person("Becca", "Holmin", 69, "Blue");

function Get_Me() {
//Displays info
    document.getElementById("WhoAmI").innerHTML = "I am " + myInfo.first_Name +
    myInfo.last_Name + ", age " + myInfo.age + ".";
    document.getElementById("WhoIsShe").innerHTML = "My wife's " + myBride.first_Name + "  " +
    myBride.last_Name + ", age " + myBride.age + ".";
}


function Nested() { //Defined function gave name
    document.getElementById("Nested_Function").innerHTML = Count(); //Displays info laid out in function
    function Count() { //Defined function with name
        var Starting_point = 9; //Defined variable
        function Plus_one() {Starting_point += 1;} //Defined function with name
        Plus_one();
        return Starting_point;
    }
    document.getElementById("Nested_Function").innerHTML = Plus_one(); //Displays result in HTML
}

