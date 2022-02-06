let display=document.querySelector(".display h2");
let buttons=document.getElementsByTagName("button");

for(let i=0;i<buttons.length; i++)
{
    buttons[i].addEventListener("click",function(event)
    {
        // display.innerText = display.innerText + event.target.innerText;
        switch(event.target.innerText)
        {
            case "C" : display.innerText=""; 
            break;

            case "←": display.innerText = display.innerText.slice(0,-1);
            break;

            case "=" : display.innerText = eval(display.innerText);     break;

            default: display.innerText += event.target.innerText;
        }
    })
}


