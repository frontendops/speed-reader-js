const text = document.querySelector('.words-container')
const playBtn = document.querySelector('.play-dark')

let words = text.innerHTML.trim().split(" ").filter(word => word !== "");
console.log(words)

let input = document.querySelector('#user-input')
let userInput = null

let index = -1

let interval = null

function getUserInput() {
    userInput = input.value.trim().split(" ").filter(word => word !== "");
    console.log(userInput)
}

function startTimer() {
    index += 1;
    text.innerHTML = ""
    if (userInput.length === 0) {
        text.innerHTML = `<span class="single-word">${words[index]}</span>`
        console.log(words[index])
        time = setTimeout(startTimer, 250);
    } else {
        text.innerHTML = `<span class="single-word">${userInput[index]}</span>`
        console.log(userInput[index])
        time = setTimeout(startTimer, 250);
    }

    if (index === userInput.length - 1) {
        clearTimeout(time);
    }
}

function resetWords() {
    index = -1
}

playBtn.addEventListener('click', () => {
    getUserInput()
    startTimer()
    resetWords()

})


// if no input is defined or if userInput.length == 0
// play the default text
// if there is user text defined play that text


