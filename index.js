
let count=0;

function fincrement(){
    console.log("successfully clicked");
    count += 1;
    document.getElementById('entry_val').innerText=count;
    
}

function fsave(){
    console.log("entered to Save mode")
    let pstring=document.getElementById('par_val');
    pstring.innerText += count + " - "
    console.log("the value of string is "+pstring.innerText)
    count=0;
    document.getElementById('entry_val').innerText=0;
}