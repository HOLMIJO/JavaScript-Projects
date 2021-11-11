function validateForm() {
    let X = document.forms["myForm1"]["email"].value;
    if (X == "") {
        alert("Field must be filled out.");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm2").style.display = "none";
}