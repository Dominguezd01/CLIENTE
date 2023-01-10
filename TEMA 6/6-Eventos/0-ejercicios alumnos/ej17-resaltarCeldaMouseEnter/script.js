document.querySelectorAll("td").forEach(td =>{
    td.addEventListener("mouseenter", e=>{
        e.target.classList.add("highlight")
    })
    td.addEventListener("mouseleave", e=>{
        e.target.classList.remove("highlight")
    })
})