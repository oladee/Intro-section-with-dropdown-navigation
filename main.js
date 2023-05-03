const features = document.getElementById("features")
const arrow = document.getElementById("arrow")
console.log(arrow.src)

features.addEventListener('click', () => {
    document.getElementById("myDrop").classList.toggle("show")
    if(arrow.src.includes("down")){
        arrow.src = "./images/icon-arrow-up.svg"
        console.log(arrow.src)
    }else{
        arrow.src = "./images/icon-arrow-down.svg"
    }
})