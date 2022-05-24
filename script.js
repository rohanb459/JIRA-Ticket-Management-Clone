let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-container");
let mainCont = document.querySelector(".main-container")
let textareaCont = document.querySelector(".textarea-cont")
let allPriorityColors = document.querySelectorAll(".priority-color")
let removeBtn = document.querySelector(".remove-btn");
let lockElem = document.querySelector(".ticket-lock");


let colors = ["pr-1", "pr-2", "pr-3", "pr-4"]
let modalPriorityColor = "pr-4";
let addFlag = false;
let removeFlag = false;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

addBtn.addEventListener("click", (e)=>{
    // generate modal
    
    // if addflag = true -> display modal
    // addFlag = false -> modal none
    addFlag = !addFlag;
    if(addFlag){
        modalCont.style.display = "flex";
    }
    else{
        modalCont.style.display = "none";
    }
})


removeBtn.addEventListener("click", (e)=>{
    removeFlag = !removeFlag;
})


// Listener for modal priority coloring
allPriorityColors.forEach((colorElem, idx)=>{
    colorElem.addEventListener("click", (e)=>{
         allPriorityColors.forEach((priorityColorElem, idx)=>{
             priorityColorElem.classList.remove("border");
         })
         colorElem.classList.add("border");
         modalPriorityColor = colorElem.classList[0];
    })
})

modalCont.addEventListener("keydown", (e)=>
{
    let key = e.key;
    if(key=="Shift")
    {
        createTicket(modalPriorityColor, textareaCont.value, shortid());
        addFlag = false;
        textareaCont.value = "";
        modalCont.style.display = "none";
    }
})

function createTicket(ticketColor, ticketTask, ticketID){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">#${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    `;
    mainCont.appendChild(ticketCont);

    handleLock(ticketCont);
    handleColor(ticketCont);
    handleRemoval(ticketCont);
}



function removeTicket(ticket)
{
    // removes ticket
    // removeFlag is true then removes ticket 
    if(removeFlag)
    ticket.remove();
}

function handleLock(ticket)
{
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketLockElem.children[0];
    let ticketTaskArea = ticket.querySelector(".task-area");
    ticketLock.addEventListener("click", (e)=>{
        if(ticketLock.classList.contains(lockClass))
        {
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            ticketTaskArea.setAttribute("contenteditable", "true");
        }
        else
        {
            ticketLock.classList.remove(unlockClass);
            ticketLock.classList.add(lockClass);
            ticketTaskArea.setAttribute("contenteditable", "false");
        }
    })
}



function handleColor(ticket){
    let ticketColor = ticket.querySelector(".ticket-color");
    ticketColor.addEventListener("click", (e)=>{
        let currentTicketColor = ticketColor.classList[1];
        // Get Ticket color idx
        let currentTicketColorIdx = colors.findIndex((color)=>
        {
            return currentTicketColor === color;
        })
        console.log(currentTicketColor, currentTicketColorIdx);
        currentTicketColorIdx++;
        let newTicketColorIdx = currentTicketColorIdx % colors.length;
        let newTicketColor = colors[newTicketColorIdx];
        ticketColor.classList.remove(currentTicketColor);
        ticketColor.classList.add(newTicketColor);
    })
}