let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeFoulCount = document.getElementById("home-foul-count")
let guestFoulCount = document.getElementById("guest-foul-count")

let count = 0

// console.log(guestScore)
    
////// Home Scores Start here//////
function add2(){
    count += 2
    homeScore.textContent = count
   }
   
function add3(){
    count += 3
    homeScore.textContent = count
    }

function add5(){
    count += 5
    homeScore.textContent = count
    }

function add7(){
    count += 7
    homeScore.textContent = count
    }

// FOUL COUNT  - HOME TEAM
    function homeNaughties(){
    count += 1
    homeFoulCount.textContent = count
  }


    function minusHomeNaughties() {
    homeFoulCount.textContent -= 1
      
    }

/////// ends Home Scores//////


// Guest Score Count///
function guestAdd2(){
    count += 2
    guestScore.textContent = count
    }

function guestAdd3(){
    count += 3
    guestScore.textContent = count
    }

function guestAdd5(){
    count += 5
    guestScore.textContent = count
    }

function guestAdd7(){
    count += 7
    guestScore.textContent = count
    }


// Start of guest Foul Count?///
function guestNaughties(){
    count += 1
    guestFoulCount.textContent = count
    // guestFoul.textContent = 0
    }




// Reset buttons ///

function resetAll(){
        count = 0
        guestFoulCount.textContent = count
        guestScore.textContent = count
        homeScore.textContent = count
}

// function resetAll(){
//         count = 0
//         guestFoulCount.textContent = count
//         guestScore.textContent = count
//         homeScore.textContent = count
// }

function resetHomeFoul(){
        count = 0
        homeFoulCount.textContent = count
        guestFoulCount.textContent = count
}


function resetHomeFoul(){
        count = 0
        homeFoulCount.textContent = count
        // guestFoulCount.textContent = count
}

function resetGuestFoul(){
        count = 0
        guestFoulCount.textContent = count
}


function minusGuestNaughties() {
    guestFoulCount.textContent -= 1
}



timer 
window.onload = function() {
  var minute = 9;
  var sec = 60;
  setInterval(function() {
    document.getElementById("timer").innerHTML = minute + ":" + sec;
    sec--;

    if (sec == 00) {
      minute--;
      sec = 60;

      if (minute == 0) {
        minute = 1.5;
      }
    }
  }, 1000);
}