var X = 25; //Defined variable with number
function Add_numbers1() { //Defined function and gave name
    console.log(10 + X + "<br>"); //Displays output in console
}
function Add_numbers2() { //Defined function and gave name
    console.log(X + 50); //Displays output in console
}
Add_numbers1(); //Pertains to function name
Add_numbers2(); //Pertains to function name

var Y = 15; //Defined variable with number
function Add_numbers3() { //Defined function and gave name
    console.log(10 + Y + "<br>"); //Displays output in console

}
function Add_numbers4() {  //Defined function with name
     console.log(Y + 80); //Displays in console
    }
Add_numbers3(); //Pertains to function name
Add_numbers4();  //Pertains to function name

function get_Date() { //Defined function with a name
    const d = new Date(); //Defined construct
    if (new Date().getHours() < 23) {
        document.getElementById("Greeting").innerHTML = d.getHours() + " How are you today?";
    }
}

function MyNumbers(a) {  //Defined function
    let result; //Let statement for result
    if (a > 3) {  //If statement for result
        result = 'positive';
    } else {  // Else statement for result
        result = 'NOT positive';
    }
    return result;  //Return for result
}
console.log(MyNumbers(-2)); //Returns 'NOT positive' to console


function Age_Verification() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "Cheers! You ARE old enough to drink!";
    }
    else {
        Drink = "Sorry, You are NOT old enough to drink!";
    }
    document.getElementById("Can_You_Drink?").innerHTML = Drink;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It\'s morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It\'s the afternoon.";
    }
    else {
        Reply = "It\'s evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
