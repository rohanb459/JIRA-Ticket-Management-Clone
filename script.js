let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-container");
let mainCont = document.querySelector(".main-container")
let textareaCont = document.querySelector(".textarea-cont")
let addFlag = false;
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

modalCont.addEventListener("keydown", (e)=>
{
    let key = e.key;
    if(key=="Shift")
    {
        createTicket();
        modalCont.style.display = "none";
        addFlag = false;
        textareaCont.value = "";
    }
})

function createTicket(){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
    <div class="ticket-color"></div>
            <div class="ticket-id">#sample_id</div>
            <div class="task-area">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis temporibus nisi culpa quidem id doloremque distinctio sequi. Amet nisi consequatur earum facere, a nostrum explicabo. Nesciunt odit omnis aut maxime.</div>
            `;

    mainCont.appendChild(ticketCont);
}