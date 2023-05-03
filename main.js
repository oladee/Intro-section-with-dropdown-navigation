const features = document.getElementById("features")
const arrow = document.getElementById("arrow")
const iconMenu = document.getElementById("icon-menu")
features.addEventListener('click', () => {
    document.getElementById("myDrop").classList.toggle("show")
    if(arrow.src.includes("down")){
        arrow.src = "./images/icon-arrow-up.svg"
    }else{
        arrow.src = "./images/icon-arrow-down.svg"
    }
})
iconMenu.addEventListener('click', () => {
    document.getElementById('sideMenu').style.display = "block"
})