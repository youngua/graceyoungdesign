/**
 * Change background color based on time of day
 */
var hours = new Date().getHours();

// morning
if (hours >= 0 && hours < 12) {
    document.write('<body style="background: linear-gradient( #fff, #ffecd0)">'); //white

    // afternoon
} else if (hours >= 12 && hours < 17) {

    document.write('<body style="background: linear-gradient(hsla(228, 100%, 63%, 0.25), #FFFBF5)">'); //blue

    // evening
} else if (hours > 17 && hours < 24) {

    document.write('<body style="background: linear-gradient( hsla(32, 37%, 27%, 0.45), #FFFBF5)">'); //brown

} else {

    document.write('<body style="background: linear-gradient( #fff, #ffecd0)">'); //white

};