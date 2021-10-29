function Dictionary1() { //Defined function and gave name
    var Animal = { //Defined variable
        Species: "Dog", //Defined variable with string
        Color: "Black", //Defined variable with string
        Breed: "Labrador", //Defined variable with string
        Age: 15, //Defined variable with integers
        Sound: "Bark!" //Defined variable with string
    };
    delete Animal.Sound; //Deletes entry from dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Put value of "Dictionary" ID into HTML element
}

function Dictionary2() { //Defined function and gave name
    var Music = { //Defined variable
        Genre: "80\'s", //Defined variable with string
        Bands: "The Cars, The Police, Duran Duran, Joan Jett", //Defined variable with string
        Songs: "Drive, Synchronicity II, The Reflex, I love Rock and Roll", //Defined variable with string
        Songs: "Who can it be now?" //Defined variable with string
    };
    document.getElementById("Musical").innerHTML = Music.Songs; //Put value of "Musical" ID into HTML element
}