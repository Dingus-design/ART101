function askNumber(whatNumber) {
    let userNumber = prompt("pick a number between 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("You got it, "+ whatNumber +  " is my favorite number!");
    }
    else {
        $("#output").html("WRONG LOSER");
    }
}

$("#good-button").click(function () {
    askNumber(5);
});