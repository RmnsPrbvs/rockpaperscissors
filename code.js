console.log('hello');

let buttons = document.querySelector(".buttons")

let arr = [...(buttons.children)]

console.log(arr)
for (child in arr) {
    arr[child].addEventListener("click", (e) => {console.log('hello', e.target.innerText)})
}

