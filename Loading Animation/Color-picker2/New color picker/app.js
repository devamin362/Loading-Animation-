const cp = document.getElementById("color picker");
cp.addEventListener("input",()=>{
    document.body.style.backgroundColor = cp.value;
    document.getElementById("hexacode").innerText = cp.value;
})

document.getElementById("text-copy").addEventListener("click",()=>{
    let TextToBeCopy = document.getElementById("hexacode").innerText ;
    navigator.clipboard.writeText(TextToBeCopy);
})