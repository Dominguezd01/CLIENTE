

for(let i = 1; i<=100;i++){
    if(i%2 == 0){
        document.body.innerHTML +="<p>"+ i + " Es múltiplo de dos"+ "</p>"
    }else if(i%3 == 0){
        document.body.innerHTML += "<p>" + i + " Es múltiplo de tres"+ "</p>"
    }else if(i%2 == 0 && i%3 == 0){
        document.body.innerHTML += "<p>" + i+  " Es múltiplo de dos y tres "+ "</p>"
    }else{
        document.body.innerHTML += "<p> El " + i
    }
}