/*1.window.onload=function()
{
    let squares=document.querySelectorAll("#board div");
    console.log(squares);
}*/
//boolean vars
let xPlayer=true;
let gameIsLive=true;

//access the playing board in html & display  the cells/boxes on the board
var mystarter= function()
{
    let cells=document.getElementById("board").children;
    console.log(cells);
    this.boxes(cells);
}
//add the class name square
window.onload=mystarter;
function boxes(nCells)
{
    for (let s=0;s<=nCells.length;s++)
    {
       nCells[s].classList.add("square");
       // n[s].classList.toggle("square");
       //document.getElementsByTagName('#board>div')[s].setAttribute("class", "square");
    }
}


//empty array with the 9 divs
var cellDivs=[[],[],[],[],[],[],[],[],[]];
console.log(cellDivs);

//event handlers
const clickSquare=(e)=>
{
    const classList=e.target.classList;
}

if (xPlayer)
{
    classList.add('x');
    xPlayer=!xPlayer;
}
    else
{
    classList.add('0');
    xPlayer=!xPlayer;
}

//event listeners
const cDivs=document.querySelectorAll(".square");
for(const c of cDivs)
{
    c.addEventListener('click',clickSquare);
}
