const text = document.querySelector('.words-container')
const playBtn = document.querySelector('.play-dark')

let words = text.innerHTML.trim().split(" ").filter(word => word !== "");
console.log(words)

let index = -1

let interval = null

function startTimer() {
    index += 1;
    text.innerHTML = ""
    text.innerHTML = `<span class="single-word">${words[index]}</span>`
    console.log(words[index])
    time = setTimeout(startTimer, 250);

    if (index === words.length - 1) {
        clearTimeout(time);
    }
}

playBtn.addEventListener('click', () => {
    startTimer()
})

