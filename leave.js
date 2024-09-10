let clickBTN = document.getElementById('click');
let hoverBTN = document.getElementById('hover');
let dontClickBTN = document.getElementById('dontClick');

let clicks = 0

clickBTN.onclick = function (){
    if (clicks<!0){
        clicks += 1
        clickBTN.style.backgroundColor = "#3be824"
        clickBTN.style.transition = '0.5s'
    } else if (clicks === 1){
        clicks += 1
        clickBTN.style.backgroundColor = "#e5ff00"
        clickBTN.style.transition = '0.5s'

    } else if (clicks === 2){
        clicks -= 2
        clickBTN.style.backgroundColor = null
        clickBTN.style.transition = '0.5s'
    }


    console.log(clicks)

}

hoverBTN.onmouseover = function (){
    hoverBTN.style.backgroundColor = "#00b2ff"
    hoverBTN.style.transition = '0.5s'
}

hoverBTN.onmouseout = function (){
    hoverBTN.style.backgroundColor = null
    hoverBTN.style.transition = '0.5s'
}

let x = 1


dontClickBTN.onmouseover = function () {
    if (x === 1) {
        x += 1
        dontClickBTN.style.left = "500px"
        dontClickBTN.style.backgroundColor = "#00b2ff"
        dontClickBTN.style.transition = '0.4s'

    } else if (x === 2) {
        x += 1
        dontClickBTN.style.left = "-500px"
        dontClickBTN.style.backgroundColor = "#e5ff00"
        dontClickBTN.style.transition = '0.4s'

    } else if (x === 3) {
        x += 1
        dontClickBTN.style.left = "300px"
        dontClickBTN.style.backgroundColor = "#3be824"
        dontClickBTN.style.transition = '0.4s'


    } else if (x === 4) {
        x -= 3
        dontClickBTN.style.left = "0px"
        dontClickBTN.style.backgroundColor = null
        dontClickBTN.style.transition = '0.4s'
    }
}

// dontClickBTN.onclick = function() {
//     alert('How? You are a cheater!')
// }