let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-container");
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