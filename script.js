console.log("Welcome to Tic Tac Toe");
//let music= new Audio("music.mp3");
let audioTurn=   new Audio("ding.mp3");
let gameOver= new Audio("victory.mp3");
let turn="X";
let gameover=false;
//Function to change the turn
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

//Function to Check for a Win
const checkWin=()=>{
    let boxtexts= document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2,-17,5,0],
        [3,4,5,-17,15,0],
        [6,7,8,-17,25,0],
        [0,3,6,-27,15,90],
        [1,4,7,-17,15,90],
        [2,5,8,-7,15,90],
        [0,4,8,-17,15,45],
        [2,4,6,-17,15,135],
    ]
    wins.forEach(e=>{

        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=="")){
        document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" Won"
        gameover=false;
        document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="400px";
        document.querySelector(".line").style.width="30vw";
        document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        gameOver.play();
    }

    })
}

//Game Logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{

    let boxtext= element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }

        }
    })
})

//Add OnClick Listener to Reset Button 
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    gameover=false
    document.querySelector(".line").style.width="0vw";
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="0px";
    gameOver.pause();

})
