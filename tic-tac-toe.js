/*window.onload=function()
{
    let squares=document.querySelectorAll("#board div");
    console.log(squares);
}*/

//access the playing board in html and add the boxes to the board
var mystarter= function()
{
    let b=document.getElementById("board").children;
    console.log(b);
    this.boxes(b);
}

window.onload=mystarter;
function boxes(n)
{
    for (let x=0;x<=n.length;x++)
    {
        n[x].classList.add("square");
    }
}