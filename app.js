const contentArray = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis labore consectetur architecto blanditiis accusantium, obcaecati cum possimus numquam in.
`, `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
];

const button = document.querySelector('button');
const yourtyping = document.querySelector('#yourtyping');
yourtyping.disabled = true;
let startTime, endTime;

function playGame() {
    const randomNo = Math.floor(Math.random() * contentArray.length);
    const contentPara = document.querySelector('.display_Text');
    contentPara.innerHTML = contentArray[randomNo];
    startTime = new Date().getTime();
    button.innerText = 'Done';
    console.log(startTime)
}

function DoneGame() {
    endTime = new Date().getTime();
    let totalTime = (endTime - startTime) / 1000;
    let coumputertext = document.querySelector('.display_Text').innerText;
    let humantext = yourtyping.value;

    const wordCountforhuman = wordcount(humantext);
    const wordCountforcomp = wordcount(coumputertext);

    let speed = Math.floor((wordCountforhuman / totalTime) * 60);

    let mistakes = mistakescount(humantext, coumputertext);
    let contentPara = document.querySelector('.display_Text');
    contentPara.innerText = `you speed is ${speed} word per minute ${mistakes}`;
    // console.log(mistakes);
}


//mistakes count 
function mistakescount(srt1, srt2) {
    let word1 = srt1.split(" ");
    let word2 = srt2.split(" ");
    let correct = 0;

    word1.forEach((elem, i) => {
        if (elem == word2[i]) {
            correct++
        }
    });


    let errorword = word1.length - correct;
    let string = `you made ${errorword} mistakes in ${word1.length} words`;
    return string;
}


// word count function 
function wordcount(humantext) {
    let wordcount = humantext.split(' ').length;
    return wordcount;
}




button.addEventListener('click', () => {

    if (button.innerText === 'Start') {
        yourtyping.disabled = false;
        playGame();
    }
    else {
        yourtyping.disabled = true;
        DoneGame();
    }



})