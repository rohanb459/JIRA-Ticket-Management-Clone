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
        modalCont.style.display = "none";
        addFlag = false;
        textareaCont.value = "";
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
    ticketLock.addEventListener("click", (e)=>{
        if(ticketLock.classList.contains(lockClass))
        {
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
        }
        else
        {
            ticketLock.classList.remove(unlockClass);
            ticketLock.classList.add(lockClass);
        }
    })
}