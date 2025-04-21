console.log('hello');

let buttons = document.querySelector(".buttons")

let arr = [...(buttons.children)]

let round = (input) => {
    let botn = Math.round(Math.random() * 2)
    if (botn == 0) {
        bot_input = 'paper'
    } else if (botn == 1) {
        bot_input = 'rock'
    } else {
        bot_input = 'paper'
    }

    if (input == bot_input) {
        console.log(input)
    } else {
        console.log(bot_input, input)
    }
}

console.log(arr)
for (child in arr) {
    arr[child].addEventListener("click", (e) => {round(e.target.innerText)})
}

