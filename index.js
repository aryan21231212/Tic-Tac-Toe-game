let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbutton = document.querySelector(".newbtn")
let winn = document.querySelector(".win");
let msgg = document.querySelector("#msg");


let turn0 = true; // 0 turn

let resetgame = () =>{
    
    
    enabled();
}

let Wpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener('click',() => {
console.log('button was clicked');
    if(turn0){
        box.innerHTML = "0";
        turn0 = false;
    }else{
        box.innerHTML = "x";
        turn0 = true;
    }
    box.disabled = true;
    checkwinner();
    });

});

const winnerr = (wineeeer) => {
 msgg.innerHTML = `Winner is ${wineeeer}` ;
 winn.classList.remove("hide");
}
 

const dissabled = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enabled = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

 let checkwinner = () =>{
    for(let pattern of Wpatterns){
        let post1 = boxes[pattern[0]].innerHTML;
        let post2 = boxes[pattern[1]].innerHTML;
        let post3 = boxes[pattern[2]].innerHTML;

        if(post1!= "" && post2!="" && post3!=""){
            if(post1===post2 && post2===post3){
                dissabled();
                winnerr(post1);
                alert("Game is over");
                console.log("winner is",post1)

            }
        }

    }
}
resetbtn.addEventListener('click',resetgame);
newbutton.addEventListener('click',resetgame);