let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".rst-btn");
let newBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let winPattern=[
  [0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,3,6],[2,5,8],[0,4,8],[2,4,6]
];
let count=0;
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText="O";
      turnO=false;
      box.style.color="green";
        }
    else{
      box.innerText="X";
      box.style.color="red";
      turnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkwinner();
    
    if(count==9 && !isWinner){
      noWinner();
    }
  });
});

const noWinner=()=>{
  msg.innerText=`Oops its a draw!!!`;
  msgcontainer.classList.remove("hide");
  disableBox();
}
const disableBox=()=>{
for(let box of boxes){
  box.disabled=true;
}
}

const enableBox=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
  }


const showWinner=(winner)=>{
  msg.innerText=`Congratulations ${winner} is the winner!!`;
  msgcontainer.classList.remove("hide");
  disableBox();

}

const checkwinner=()=>{
  for(let pattern of winPattern){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText);
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
          if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            showWinner(pos1);
          }
          
        }

  }
 }
 const resetGame=()=>{
         turnO=true;
         enableBox();
         msgcontainer.classList.add("hide");
 }

 newBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);
