let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let QuestionsQuestion = ["What is the capital of France?", "Which planet is known as the Red Planet?", "What is the largest ocean on Earth?", "In what year did World War II end?", "Who painted the Mona Lisa?", "Which element is represented by the symbol 'O'?", "What is the square root of 64?", "Which country is the Great Barrier Reef located in?", "Who was the first person to walk on the moon?"];
let QuestionsOptionsA = ["Rome", "Earth", "Atlantic Ocean", "1942", "Pablo Picasso", "Oxygen", "6", "Canada", "Buzz Aldrin"];
let QuestionsOptionsB =  ["Paris","Venus", "Arctic Ocean", "1945", "Claude Monet", "Osmium", "8", "Australia", "Neil Armstrong"];
let QuestionsOptionsC = ["Madrid", "Mars", "Indian Ocean", "1950", "Vincent van Gogh", "Ozone", "10", "Brazil", "Michael Collins"];
let QuestionsOptionsD = ["Berlin", "Jupiter", "Pacific Ocean", "1939", "Leonardo da Vinci", "Octane", "16", "South Africa", "Yuri Gagarin"];
let EncodedCorrectOptions = ["Qg==", "Qw==", "RA==", "Qg==", "RA==", "QQ==", "Qg==", "Qg==", "Qg=="];
let CurrentQuestion = ["1"]
let CurrentRandomIndex = ""
let currentCorrectAnswer = ""; 

function decodeBase64(encodedString) {
    return atob(encodedString);
}

function NewQuestion(randomIndex){
    let number = numbers[randomIndex]; 

    numbers.splice(randomIndex, 1);
    console.log('Chosen number:', number);
    console.log('Updated numbers array:', numbers);
    
    if (number === undefined) {
        window.location.href = "index.html";
        let HighScoreFromLocalStorage = Number(localStorage.getItem("HighScore"))
        let ScoreFromLocalStorage = Number(localStorage.getItem("score"))
        if (ScoreFromLocalStorage > HighScoreFromLocalStorage) {
            localStorage.setItem("HighScore", ScoreFromLocalStorage)
        }
     }
     CurrentQuestion = QuestionsQuestion[randomIndex]
     document.getElementById("QuestionSelf").innerHTML = QuestionsQuestion[randomIndex]
     document.getElementById("QuestionAnswerA").innerHTML = "A: " + QuestionsOptionsA[randomIndex]
     document.getElementById("QuestionAnswerB").innerHTML = "B: " + QuestionsOptionsB[randomIndex]
     document.getElementById("QuestionAnswerC").innerHTML = "C: " + QuestionsOptionsC[randomIndex]
     document.getElementById("QuestionAnswerD").innerHTML = "D: " + QuestionsOptionsD[randomIndex]

     currentCorrectAnswer = decodeBase64(EncodedCorrectOptions[randomIndex]);
     document.getElementById("ID-Score").innerHTML = "Score: " + localStorage.getItem("score")
}

function ChangeScore(AnswerGiven) {
    if (AnswerGiven == currentCorrectAnswer) {
        let currentScore = Number(localStorage.getItem("score"));
        localStorage.setItem("score", currentScore + 1);
    }
}

GetRandomIndex()

function GetRandomIndex() {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    NewQuestion(randomIndex)
    CurrentRandomIndex = randomIndex
}

window.addEventListener('load', function (event) {
    console.log("Page loaded");
    localStorage.setItem("score", 0)
});

function changeCursor(element) {
    element.style.cursor = 'pointer';
}

function resetCursor(element) {
    element.style.cursor = 'default';
}

