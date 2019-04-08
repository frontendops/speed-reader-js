const text = document.querySelector('.words-container')
const playBtn = document.querySelector('.play-dark')
const fastBtn = document.querySelector('.fast')
const neutralBtn = document.querySelector('.neutral')
const slowBtn = document.querySelector('.slow')

let words = text.innerHTML.trim().split(" ").filter(word => word !== "");
console.log(words)
let input = document.querySelector('#user-input')
let userInput = ""
let index = -1
let interval = null
let speed = 250

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
        time = setTimeout(startTimer, speed);
        if (index === words.length - 1) {
            console.log('stoping now');

            clearTimeout(time);
        }
    } else {
        text.innerHTML = `<span class="single-word">${userInput[index]}</span>`
        console.log(userInput[index])
        console.log(index)
        time = setTimeout(startTimer, speed);
        if (index === userInput.length - 1) {
            console.log('stoping now');

            clearTimeout(time);
        }
    }

}

function resetWords() {
    index = -1
}

playBtn.addEventListener('click', () => {
    resetWords()
    getUserInput()
    startTimer()

})

fastBtn.addEventListener('click', () => speed = 250)
neutralBtn.addEventListener('click', () => speed = 350)
slowBtn.addEventListener('click', () => speed = 500)

