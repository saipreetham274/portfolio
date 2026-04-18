document.getElementById("theme-toggle").addEventListener("click",function(){
document.body.classList.toggle("light")
if(document.body.classList.contains("light")){
    document.getElementById("theme-toggle").textContent= "Dark mode"
}
else{
    document.getElementById("theme-toggle").textContent="Light mode"
}
})
const fullText = "Aspiring full stack developer from Bengaluru"
let index = 0
const interval = setInterval(function(){
    document.getElementById("subtitle").textContent = fullText.substring(0,index)
    index++

if(index>fullText.length){
    clearInterval(interval)
}
},70)
