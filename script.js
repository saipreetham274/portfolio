document.getElementById("theme-toggle").addEventListener("click",function(){
document.body.classList.toggle("light")
if(document.body.classList.contains("light")){
    document.getElementById("theme-toggle").textContent= "Dark mode"
}
else{
    document.getElementById("theme-toggle").textContent="Light mode"
}
})
