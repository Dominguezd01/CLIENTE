document.querySelector("table").addEventListener("mouseover", e =>{
    e.target.classList.add("highlight")
})
document.querySelector("table").addEventListener("mouseout", e =>{
    e.target.classList.remove("highlight")
})