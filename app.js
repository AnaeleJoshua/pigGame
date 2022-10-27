let score, roundScore, activePlayer, isGamePlaying;
init()


document.querySelector('.dice').style.display = 'none';

// reset()


//event listener for button roll
 document.querySelector('.btn--roll').addEventListener('click', ()=>{

// if (isGamePlaying) {
    //1. Random number
    let dice = Math.floor(Math.random()*6) +  1;
    // //2. Display the result
    let diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block'; 
    diceDom.src = './images/dice-' + dice + '.png'
    
    //document.querySelector('#current--' + activeplayer).textContent = dice
    
    //3. update the round score if the rolled number is not 1
    if (dice !==1)
    {
        //add roundScore
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore
    }
    else{
        
        nextPlayer()
}

    // document.querySelector('.player--0').classList.remove('player--active')
    // document.querySelector('.player--1').classList.add('player--active')
}
)


/* function hold button
*
*/
document.querySelector('.btn--hold').addEventListener('click', () => {
   if (isGamePlaying){
    let playerConsole =  document.querySelector('.player--' + activePlayer)
    //1.Add current score to global score
    scores[activePlayer] += roundScore;
    // update ui
     document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]; 
     //check if player won the game
     if (scores[activePlayer] >= 20){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none'
        // playerConsole.style.color = 'blue'
       playerConsole.classList.add('player--winner');
        playerConsole.classList.remove('player--active');

        // isGamePlaying = false;
        document.querySelector('.btn--hold').style.display = 'none'
        document.querySelector('.btn--roll').style.display = 'none'
     }else{
        nextPlayer()
     }
   }
})


// function to call the next player
function nextPlayer() {
    activePlayer === 0 ? activePlayer=1 : activePlayer = 0; 
    roundScore = 0;

    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'

    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
    document.querySelector('.dice').style.display = 'none'
}


document.querySelector('.btn--new').addEventListener('click',() => {
    document.querySelector('.btn--hold').style.display = 'block'
    document.querySelector('.btn--roll').style.display = 'block'
    init()
})

//initiallizing function
function init(){
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;
    isGamePlaying = true;

document.getElementById('score--0').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'player 1';
document.getElementById('name--1').textContent = 'player 2';
document.querySelector('.player--0').classList.remove('player--active')
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--0').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--winner')
document.querySelector('.player--0').classList.add('player--active')
}

// function reset(){
// roundScore = 0;
// activePlayer = 0;
// playerConsole =   document.querySelector('.player--' + activePlayer)
// document.getElementById('score--0').textContent = '0';
// document.getElementById('current--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.getElementById('current--1').textContent = '0';
// scores = [0,0]
// document.querySelector('#name--0').textContent = 'player-1'
// document.querySelector('#name--1').textContent = 'player-2'
// ?
// // playerConsole.classList.add('player--active')
// }


// //new game button function
// document.querySelector('.btn--new').addEventListener('click',()=>{
//     //displays roll and hold button
//     document.querySelector('.btn--hold').style.display = 'block';
//     document.querySelector('.btn--roll').style.display = 'block'
//     reset()

//     //reset the active key
//     let playerConsole =  document.querySelector('.player--' + activePlayer)
   
//     // document.querySelector('#name--' + activePlayer).textContent = 'player-' + (activePlayer+1);
//  //reset global scores and 
    
// })











 //  document.querySelector('.btn--hold').addEventListener('click', ()=>{
//     let scores = 0;
//     scores += 
//     document.querySelector('#score--' + activeplayer).textContent = 
//     if (activeplayer==0){
//         activeplayer=1
//     }
//     else
//         activeplayer=0;
//  })


// document.querySelector('#current--' + activeplayer).textContent = dice

