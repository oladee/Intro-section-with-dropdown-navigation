const features = document.getElementById("features");
const company = document.getElementById("Company")
const arrow = document.getElementById("arrow");
const arrow1 = document.getElementById("arrow1")
const iconMenu = document.getElementById("icon-menu");
features.addEventListener('click', () => {
    document.getElementById("myDrop").classList.toggle("show")
    if(arrow.src.includes("down")){
        arrow.src = "./images/icon-arrow-up.svg"
    }else{
        arrow.src = "./images/icon-arrow-down.svg"
    }
});
company.addEventListener('click', () => {
    document.getElementById("myDrop1").classList.toggle("show")
    if(arrow1.src.includes("down")){
        arrow1.src = "./images/icon-arrow-up.svg"
    }else{
        arrow1.src = "./images/icon-arrow-down.svg"
    }
})
iconMenu.addEventListener('click', () => {
    document.getElementById('sideMenu').style.display = "block"
    document.getElementById('sideMenu').style.animation = "mymove 2s 1"

})
document.getElementById("closeMenu").addEventListener('click', () => {
    document.getElementById('sideMenu').style.display = "none"
})