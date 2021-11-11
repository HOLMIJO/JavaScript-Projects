var Me = { "name":"Joe", "age":52, "city":"West Memphis" };
var myJSON = JSON.stringify(Me);
document.getElementById("aboutMe").innerHTML = myJSON;
/* This is a JSON string variable */
var dog = '{"name": "Ace", "breed": "Boxer", "color": "Brindle"}';
/* Converts JSON strings to JavaScript objects */
var JSONstring = JSON.parse(dog);
document.getElementById("myDog").innerHTML = JSONstring.name + " the " + JSONstring.breed;

/*set the data as a key/value pair to be saved locally in your browser*/
localStorage.setItem("Name", "Mister Bear");
/*then use the key "Name" to return it's value "Mister Bear"*/
document.getElementById("myDog2").innerHTML = localStorage.getItem("Name");
