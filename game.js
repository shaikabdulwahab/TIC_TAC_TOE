let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector(".New");
let turnO =true;

const winPtn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        count+=1;
        if(turnO)
        {
            box.innerText="O";
        }
        else{
            box.innerText="X";
        }
        turnO=!turnO;
        box.disabled=true;
        checkWinner();
    })
});

let p=document.querySelector("#win");
const checkWinner=()=>{
    for(let ptn of winPtn)
    {
        let pos1=boxes[ptn[0]].innerText;
        let pos2=boxes[ptn[1]].innerText;
        let pos3=boxes[ptn[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                flag=false;
                p.innerText="Hurrah! "+pos1+" wins the game";
                p.style="text-decoration:underline";
                msgContainer.style="display:inline";
                disableAll();
            }
            else{
                if(count==9)
                {
                    p.innerText="Ohh no! the game is draw please start the new game";
                    p.style="text-decoration:underline";
                }
            }
        }
    }
};

resetBtn.addEventListener("click", ()=>{
    resetNow();
    empt();
    enableAll();
});

newBtn.addEventListener("click", ()=>{
    resetNow();
    empt();
    enableAll()
});
const disableAll= ()=>
{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};

const enableAll= ()=>
{
    boxes.forEach((box)=>{
        box.disabled=false;
    });
};
const empt=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
};
const resetNow=()=>{
    msgContainer.style="display:none";
};

