function Master_Mind() { //Defined function and gave name
    var str = "The Master Mind is feeling blue!"; //defined variable with string
    var result = str.fontcolor("blue"); //Used fontcolor method on string variable
    document.getElementById("Blue_Text").innerHTML = result; //Put value of result into "Blue_Text" ID of HTML element
}

function Book_Worm() { //Defines function and gave name
    var sentence = "If everything else was gone"; //Defined variable with string
    sentence += " I\'d be happiest with a book!"; //added operator to variable as string
    document.getElementById("Concatenate").innerHTML = sentence; //Put value of result into "Concatenate" ID of HTML element 
}



function Math_Whiz(X, Y) { // code to be executed
    return X * Y; //returns result of math problem
}
document.getElementById("math").innerHTML = Math_Whiz(5, 4); //puts result into "Math" ID of HTML

function Sunshine() { //Defined function and gave name
    document.getElementById("smile").innerHTML = "Good Morning, Sunshine!"; //Put value of "smile" ID into HTML element
}

function addition_Function() {
    var addition = 10 + 2;
    document.getElementById("Math").innerHTML = "10 + 2 =" + addition;
}