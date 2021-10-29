function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;

    document.getElementById("Test2").innerHTML = isNaN('This is a string');

    document.getElementById("Test3").innerHTML = isNaN('007');
}