let score = document.getElementsByClassName("score")
// let isHome = document.getElementById("home")
let whoScore = document.querySelectorAll("h2")
let count = 0

// check all values
console.log(score)
console.log(whoScore[0].id)
console.log(whoScore[1].id)

// start function initializes / resets scores to 0
start()

function start() {
    console.log("start function was just activated")
    count = 0
    score[0].innerText = 0
    score[1].innerText = 0
    console.log(+score[0].innerText + +score[1].innerText +5)
}

function addOne() {
    // get current score & add 1
    if (whoScore[0].id = "home") {
        // do something
        console.log('this is the home ID selector: ' + whoScore[0].id)
        count =  +score[0].innerText
        count += 3
        score[0].innerText = count
        console.log(+score[0].innerText)
    }
    if (whoScore[1].id = "guest") {
        // do something
        console.log('this is guest ID selector: ' + whoScore[1].id)
        count =  +score[1].innerText
        count += 7
        score[1].innerText = count
        console.log(+score[1].innerText)
    }
}