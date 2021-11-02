function NewSentence() {  //Defined function and gave name
    var part1 = "She says she "; //Variable defined with string
    var part2 = "has the ability "; //Variable defined with string
    var part3 = "to hear the soundtrack "; //Variable defined with string
    var part4 = "of your life."; //Variable defined with string
    var whole_sentence = part1.concat(part2, part3, part4); //Variable defined with concatination
    document.getElementById("String1").innerHTML = whole_sentence; 
    //Displays whole concatenation as attached in "String1" ID in HTML
}

function sliced_Method() { //defined function and gave name
    var Words = "I want more detailed information."; //Defined variable with string
    var Numbers = Words.slice(12, 20); //Defined variable with slice cuts
    document.getElementById("SlicedUp").innerHTML = Numbers; //Displays in HTML
}

function Function1() { //Defined function and gave name
    var str = "hello world!"; //Defined variable with string
    var res = str.toUpperCase(); //Variable changes string to Uppercase
    document.getElementById("UpYours").innerHTML = res; //Displays result in HTML
}

function Searching() { //Defined function and gave name
    let str = "It\'s a beautiful day!"; //Defined variable with let statement and string
document.getElementById("Where").innerHTML = str.search("beautiful"); //Displays result in HTML
}

function Strings() { //Defined function with name
    var X = 135  //Defined variable with numbers
    document.getElementById("StringOfNumbers").innerHTML = X.toString();
    //Displays result as attached in "StringOfNumbers" ID in HTML
}

function precise_Method() { //Defined function gave name
    var X = 37580.8748675309; //Defined variable with number
    document.getElementById("Precise").innerHTML = X.toPrecision(12);
    //Displays result as attached in "Precise" ID in HTML
}

function FixerUpper() {  //Defined function with name
    let text = "Hello World!"; //Let statement with string
    let result = text.fixed(); //Let statement for fixed result
    document.getElementById("FixedUp").innerHTML = result;
    //Displays result as attached in "FixedUp" ID in HTML
}


function Valuables() { //Defined function and gave name
    let str = "Hello World!"; //Defined let statement with string
    document.getElementById("Value").innerHTML = str.valueOf();
    //Displays result as attached in "Value" ID in HTML
}




