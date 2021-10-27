window.alert("This is a new alert! The old one is gone."); //Setting an alert to trigger upon opening the page
document.write('Hello, World!'); //Prints message on screen
var A = "This is a string"; //Variable is a string
document.write(A); //Displays variable result
var J = "Joe is cool!"; //Variable is a string
window.alert(J); //Window Alert displays upon opening page
document.write("A wise man once said, \"It's better to give than receive!\""); //This is a concatenation
document.write("\"Be who you are and say what you feel," +
    " because those who mind don\'t matter and those who matter don\'t mind.\"" +
    "-Dr. Seuss");
var B = "\"In the beginning, there was\"" + //This is a concatenation
    "\ good and evil... don\'t choose evil" +
    " -God" + " What He said goes!";
document.write(B) //Displays variable result
var Family = "The Holmin's", //Assigns a variable with multiple elements
    Dad = "Joseph",
    Mom = "Becca",
    Son = "Brandon";
document.write(Dad); //Displays result from variable
var blues = "I have the blues."; //Defines variable with a string
var blues = blues.fontcolor("blue"); //Uses fontcolor method
document.write(blues); //Displays result in blue fontcolor
var Dad = Dad.fontcolor("red"); //Assigns fontcolor to variable
var Mom = Mom.fontcolor("green"); //Assign fontcolor to variable
var Son = Son.fontcolor("orange"); //Assigns fontcolor to variable
document.write(Dad, Mom, Son); //Displays multiple variable results in assigned fontcolors
document.write(12 + 9); //Displays result of math operation

function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a 
    //string value 
    var result = str.fontcolor("green"); //Using the fontcolor method on
    //str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value
    //of result into HTML element with "Green_Text" id
}