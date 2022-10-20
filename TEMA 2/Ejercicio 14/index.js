let original = "border-left-width";

document.body.innerHTML += original + "<br>"



const camelize = (str)=>{
    return str.split('-').map((palabra, i) => i == 0 ? palabra : palabra[0].toUpperCase() + palabra.slice(1)).join('');
}



document.body.innerHTML += camelize(original) + "<br>"