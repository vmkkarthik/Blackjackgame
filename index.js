
let player = {
    name:"karthik",
    chips:200
}

let cards = []
let sum = 0 
 let hasblackjack = false
let message = ""
let isAlive = false

let messageEl= document.getElementById("message-el")
let sumEl = document . getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document . getElementById("player-el")
playerEl . textContent = player.name + ": $" + player.chips
 
function getrandomcard (){
let randomnumber =  Math.floor(Math.random()*13) + 1
if ( randomnumber > 10){
return 10
} 
else if (randomnumber === 1 ){
    return 11

}
else {
   return randomnumber 
}


}

function startgame(){
isAlive = true 
let firstcard = getrandomcard()
let secondcard =getrandomcard()
cards= [firstcard,secondcard]
sum = firstcard + secondcard

    rendergame()
}


function rendergame(){
cardsEl.textContent= "cards:" 
for ( let i=1; i< cards.length; i++){
    cardsEl.textcontent += cards[i] + " "
}


sumEl.textContent="sum:"+sum 
    let message = ""
    if (sum <= 20){
        message ="Do you want to draw a new card";
    }
    else if( sum ===21){
        message = "wahoo you got a blackjack";
    }
    else {
        message = "you're out of the game";
        isAlive = false
    }
    messageEl.textContent = message
   
}

function newcard (){
    if ( isAlive === true && hasblackjack === false){
let card = getrandomcard()
sum += card 
cards.push(card)


rendergame()


    }

}











