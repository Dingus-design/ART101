// clicker button value

let count = 1;

$("#needy-button").click( function() {
    // what to do when button is clicked
   count = count + 3;
   //adds 1 per click
   $("#needy-button").html("You microwaved " + count + " hamster");

})


