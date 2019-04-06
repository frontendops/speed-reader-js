const text = document.querySelector('.words-container')
const playBtn = document.querySelector('.play-dark')

let words = text.innerHTML.trim().split(" ")
console.log(words)
let index = -1


// function playWords(words) {
//     let index = 0
//     setTimeout(() => {
//         console.log(words[index])
//         index++
//         console.log(index)
//         // text.innerHTML = ""
//         // text.innerHTML = word
//     }, 1000);

// }

let interval = null

function startTimer() {
    index += 1;
    text.innerHTML = ""
    text.innerHTML = `<span class="single-word">${words[index]}</span>`
    console.log(words[index])
    time = setTimeout(startTimer, 300);

    if (index === words.length - 1) {
        clearTimeout(time);
    }
}

// function playWords(words) {
//     console.log(words[index]);
//     index++
//     //stopWords()
// }

// function stopWords() {
//     if (index === words.length) {
//         clearInterval(playWords)
//     }
// }

playBtn.addEventListener('click', () => {
    startTimer()
})

