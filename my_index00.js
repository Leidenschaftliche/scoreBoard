let scoreHome=0
let scoreGuest=0

let homeScore=document.getElementById("home_score")
let guestScore=document.getElementById("guest_score")

function homeP1(){
    scoreHome+=1
    homeScore.textContent=scoreHome
}

function homeP2(){
    scoreHome+=2
    homeScore.textContent=scoreHome
}

function homeP3(){
    scoreHome+=3
    homeScore.textContent=scoreHome
}


function guestP1(){
    scoreGuest+=1
    guestScore.textContent=scoreGuest
}

function guestP2(){
    scoreGuest+=2
    guestScore.textContent=scoreGuest
}

function guestP3(){
    scoreGuest+=3
    guestScore.textContent=scoreGuest
}