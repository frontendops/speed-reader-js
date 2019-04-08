const text = document.querySelector('.words-container')
const playBtn = document.querySelector('.play-dark')

let words = text.innerHTML.trim().split(" ").filter(word => word !== "");
console.log(words)
let input = document.querySelector('#user-input')
let userInput = ""
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
        if (index === words.length - 1) {
            console.log('stoping now');

            clearTimeout(time);
        }
    } else {
        text.innerHTML = `<span class="single-word">${userInput[index]}</span>`
        console.log(userInput[index])
        console.log(index)
        time = setTimeout(startTimer, 250);
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


