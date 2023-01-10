

document.querySelector("table").addEventListener("mouseover", e =>{
    let celdaEv = e.target.closest("td")
    if(celdaEv){
        celdaEv.classList.add("highlight")
    }
})
document.querySelector("table").addEventListener("mouseout", e =>{
    let celdaEv = e.target.closest("td")
    if(celdaEv){
        celdaEv.classList.remove("highlight")
    }
})




/*
document.querySelectorAll("td").forEach(td =>{
    td.addEventListener("mouseover", e=> e.target.classList.add("highlight"))
    td.addEventListener("mouseout", e=> e.target.classList.remove("highlight"))
})
*/
