let menu = document.querySelector("#menu")
let menuicon = document.querySelector("#i")
let box1 = document.querySelector("#box1")
// console.log(box1.parentElement.innerHTML)

function handleMenu() {
    // console.log("handleMenu")
    if (menu.style.display === "") {
        // console.log("block")
        menu.style.display = "block"
        menuicon.innerHTML = ``
    }
    else {
        // console.log("hidden")
        menu.style.display = ""
        menuicon.innerHTML = `<i class="fa-solid fa-bars text-white my-auto text-4xl mx-5 cursor-pointer"></i>`
    }
}

function handleMenu1() {
    console.log("section")
    menu.style.display = ""
    menuicon.innerHTML = `<i class="fa-solid fa-bars text-white my-auto text-4xl mx-5 cursor-pointer" aria-hidden="true"></i>`

}


