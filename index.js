let player = {                                   
    name : "Kundan Kumar Mehta",
    Developer : "Developed by "
}

let cards= []
let sum = 0  
let hasBlackJack = false
let isAlive=false
let message =" "
let messageEl = document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.Developer + player.name 
function getRandomCard(){                                                                         
    let randomnumbers = Math.floor( Math.random()*13) + 1
    if(randomnumbers === 1) {                                                            
        return 11}
    else if (randomnumbers >10){                                                          
        return 10 }
    else {
        return randomnumbers}
    }


function startGame(){
    isAlive=true

    let firstCard = Math.floor( Math.random()*13) + 1                                                                     //Generate two random numbers
    let secondCard = Math.floor( Math.random()*13) + 1
    cards = [firstCard + secondCard]                                                                                     //Re-assign the cards and the sum variable so that game can start
    sum = firstCard + secondCard
    renderGame()
}
    
    
function renderGame(){  

cardsEl.textContent="Cards:"  
for(let i=0;  i < cards.length;  i++){                                           
        cardsEl.textContent += cards[i]+ " "
}
       
sumEl.textContent="Sum:"+sum
if(sum<=20){       
    message="Do you want to draw a new card ?"                                                                 
}
else if(sum === 21){
    message="Wohoo! You've got Blackjack!"
    hasBlackJack = true
}
else{
    message="You're out of the game! "
    isAlive=false
}
messageEl.textContent= message
}


function newCard(){
if ( isAlive===true && hasBlackJack === false){                                                             
    let card = getRandomCard()                                                     
    sum +=card
    cards.push(card)                                                                
    renderGame()
}
}