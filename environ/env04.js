
function askMood(whatMood) {
    let userMood = prompt("pick a mood: happy, sad, or angry?");

    if (userMood == "happy") {
        $("#output").html("Sackboy is happy");
         $("body").css( "background-image", "none" );
         $("body").css( "background-color", "yellow" );
    }
    else if (userMood == "sad") {
        $("#output").html("Sackboy is sad");
         $("body").css( "background-image", "none" );
         $("body").css( "background-color", "blue" );
    }
    else if (userMood == "angry") {
        $("#output").html("Sackboy is angry");
        $("body").css( "background-image", "none" );
         $("body").css( "background-color", "red" );
    }
}
$("#mood-button").click(function () {
    askMood(5);
});



let environmentTitle = "Sackboy's galaxy";

let count = 0;

let mainEntity = {
    name: "Little Big Planet",
    temperature: "cold",
    mood: "creative",
    gravity: false,
    texture: "yarn",
};


$("#needy-button").click(function () {

    count = count + 1;
let message = "<p> This universe is called " + mainEntity.name + ", home of Sackboy.</p>";

$("#output").html(message)
    console.log(count);

});

$("#needy-button-temp").click(function () {

    count = count + 1;
let message = "<p> the temperature of this universe is very " + mainEntity.temperature + ", reaching degrees as low as -270.5 C.</p>";

$("#output").html(message)
    console.log(count);

});

$("#needy-button-mood").click(function () {

    count = count + 1;
let message = "<p> The goal of sackboy's very universe is to be  " + mainEntity.mood + ", This world values the joys and beauty of creating things with your own hands.</p>";

$("#output").html(message)
    console.log(count);

});$("#needy-button-gravity").click(function () {

    count = count + 1;
let message = "<p> If you were to ask if this galaxy has gravity the answer would be " + mainEntity.gravity + ", There's no gravity in this galaxy!</p>";

$("#output").html(message)
    console.log(count);

});

$("#needy-button-texture").click(function () {

    count = count + 1;
let message = "<p> Sackboy, a creature made of string, zipper, and wool has the texture of  " + mainEntity.texture + ", something comfy and cozy.</p>";

$("#output").html(message)
    console.log(count);

});

