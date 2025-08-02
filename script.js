let menu=document.querySelector("#menu")
let menuicon=document.querySelector("#i")
function handleMenu(){
    if(menu.style.display===""){
        menu.style.display="block"
        menuicon.innerHTML=`<i onclick="handleMenu()" class="fa-solid fa-xmark text-white my-auto text-4xl mx-5 cursor-pointer" aria-hidden="true"></i>`
    }
    else{
        menu.style.display=""
        menuicon.innerHTML=`<i onclick="handleMenu()" class="fa-solid fa-bars text-white my-auto text-4xl mx-5 cursor-pointer" aria-hidden="true"></i>`
    }
}