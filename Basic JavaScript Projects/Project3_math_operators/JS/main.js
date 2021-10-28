function Lets_Do_Math() { //Defined function and named it
    var addition = 15 + 7; //Defined variable and math operation
    document.getElementById("Math").innerHTML = "15 + 7 =" + addition; //Put value of result into "Math" ID of HTML element 
}

function subtraction_Function() { //Defined function and named it
    var Subtraction = 25 - 4; //Defined variable and math operation
    document.getElementById("Math2").innerHTML = "25 - 4 =" + Subtraction; //Put value of result into "Math2" ID into HTML element
}

function multiply() { //Defined function and named it
    var simple_Math = 9 * 4; //Defined variable and math operation
    document.getElementById("Math3").innerHTML = "9 X 4 =" + simple_Math; //Put value of result into "Math3" ID into HTML element
}

function division() { //Defined function and named it
    var simple_Math1 = 48 / 6; //Defined variable and math operation
    document.getElementById("Math4").innerHTML = "48 / 6 =" + simple_Math1; //Put value of result into "Math4" ID into HTML element
}

function more_Math() { //Defined a function and named it
    var simple_Math2 = (1 + 2) * 10 / 2 - 5; //Defined variable and complex math operation 
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math2;
    //Put value of result into "Math5" ID into HTML element.
}

function modulus_Operator() { //Defined function with name
    var simple_Math3 = 50 % 8; //Defined variable and math operation resulting in a remainder
    document.getElementById("Math6").innerHTML = "When you divide 50 by 8 you have a remainder of: " + simple_Math3;
}

function neg_Operator() { //Defined function with name
    var x = 25; //Defined variable with equation
    document.getElementById("Math7").innerHTML = -x; //Put value of result into "Math7" ID into HTML element
}

function increase() { //Defined function with name
    var X = 25; //Defined variable with equation
    X++; // Incremental designator of variable
    document.write(X); //To display result of operation
}

function decrease() { //Defined function with name
    var X = 7.75 //Defined variable with equation
    X--; //Decremental designator of variable
    document.write(X); //To display result of operation
}