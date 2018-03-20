

//----------------
// Global variables
//---------------

// make the 4 random number for crystal1-4.
// from 1 to 12
var cry1, cry2, cry3, cry4;
// set counters for html
var userTotal;
var guess_number;
var wins = 0;
var losses = 0;



//create function to randomGerate 2 values
// for cystalrs 1 to 12. for mystery number 19 - 120

function randomGenerator(upperlimit) {
    return Math.floor(Math.random() * upperlimit) + 1;
}


// the guess number . this randgen give us 19 to 120
var guess_number = randomGenerator(102) + 18;
$('#numToGuess').html(guess_number);






// routine to create 4 unique random numbers 1 - 12
// create empty array . and push random number when indexOf = -1.
function uniquenumbersArr() {
    var tempArr = [];

    while (tempArr.length < 4) {
        var xnum = randomGenerator(12);
        console.log("xnum", xnum);
        var inxVal = tempArr.indexOf(xnum);
        console.log("inxval", inxVal);
        if (inxVal === -1) {
            tempArr.push(xnum);
            console.log("temparr", tempArr);
        };

    };

    console.log("returning arr:", tempArr);
    return tempArr;

}


function resetGame() {
    var tempArr = uniquenumbersArr();
    cry1 = tempArr[0];
    cry2 = tempArr[1];
    cry3 = tempArr[2];
    cry4 = tempArr[3];
    //set vars to zero = empty html
    userTotal = 0;

    //fill in the rest of html - total you guess- 0 to start
    // wims and losses

    // the guess number . this randgen give us 19 to 120
    guess_number = randomGenerator(102) + 18;
    $('#numToGuess').html(guess_number);

    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
    console.log(cry1, cry2, cry3, cry4, "magicNum:",guess_number);
}





//add click event to 4 crystals - using randomnumber class placed on it
$('.randomnumber').click(function () {
    var id = $(this).attr('id');

    console.log("id of click crystal: ", id);
    var incrementtor = 0;

    switch (id) {
        case 'crystal1':
            incrementtor = cry1;
            break;
        case 'crystal2':
            incrementtor = cry2;
            break;
        case 'crystal3':
            incrementtor = cry3;
            break;
        case 'crystal4':
            incrementtor = cry4;
            break;
        default:
            alert("Game Error line 60");
    }

    userTotal += incrementtor;
    $('#totalNum').html(userTotal);
    console.log("usertotal", userTotal , "increment val:", incrementtor);

    //check to see if game won/loss/or continue
    gameResultCheck();

})

function gameResultCheck() {
    //checks to see if game was won or lost. if neither nothing happens
    if (userTotal === guess_number) {
        wins++;
        $('#wins').html(wins);
        resetGame();
    } else if (userTotal > guess_number) {
        losses++;
        $('#losses').html(losses);
        resetGame();
    }

}

$(document).ready(function () {
    resetGame();
})
